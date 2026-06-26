/**
 * 网表生成器扩展入口文件
 *
 * 分析原理图网表，提供引脚网络表、网络连接表、器件连接图、器件拓扑图等多种视图，支持多格式导出。
 *
 * 注意：本文件由现有 dist/index.js 忠实反推还原，逻辑、字符串、API 调用与产物保持一致。
 */

// 扩展激活
export function activate(_status?: 'onStartupFinished', _arg?: string): void {
	// 获取未连接（noConnected）引脚数量
	eda.sys_MessageBus.pull('netlist-analyzer:get-noconnected', async () => {
		try {
			console.log('[网表] 开始获取 noConnected 引脚...');
			let noConnectedCount = 0;
			let checkedPins = 0;
			const pageIds = new Set<string>();
			const currentComps = (await eda.sch_PrimitiveComponent.getAll(undefined, true)) || [];
			console.log('[网表] 当前页器件数:', currentComps.length);
			for (const comp of currentComps) {
				const schId = comp.getState_SchId?.() || comp.getState_PageId?.() || comp.getState_DocId?.() || '';
				if (schId) pageIds.add(schId);
			}
			for (const pageId of pageIds) {
				try {
					const pageComps = (await eda.sch_PrimitiveComponent.getAll(pageId, true)) || [];
					console.log('[网表] 页面', pageId, '器件数:', pageComps.length);
					for (const comp of pageComps) {
						const primId = comp.getState_PrimitiveId?.();
						const desig = comp.getState_Designator?.() || 'unknown';
						if (!primId) continue;
						try {
							const pins = await eda.sch_PrimitiveComponent.getAllPinsByPrimitiveId(primId);
							if (pins && pins.length > 0) {
								for (const pin of pins) {
									checkedPins++;
									const isNoConnected = pin.getState_NoConnected?.() === true;
									const pinNum = pin.getState_PinNumber?.() || '';
									if (isNoConnected) {
										noConnectedCount++;
										console.log('[网表] 找到 noConnected 引脚:', desig, '-', pinNum);
									}
								}
							}
						}
						catch (e) {
						}
					}
				}
				catch (e) {
				}
			}
			console.log('[网表] 检查的引脚总数:', checkedPins);
			console.log('[网表] noConnected 引脚数:', noConnectedCount);
			eda.sys_MessageBus.push('netlist-analyzer:noconnected-data', { count: noConnectedCount });
		}
		catch (e) {
			console.error('[网表] 获取 noConnected 失败:', e);
			eda.sys_MessageBus.push('netlist-analyzer:noconnected-data', { count: 0 });
		}
	});

	// 刷新网表数据
	eda.sys_MessageBus.pull('netlist-analyzer:refresh', async () => {
		try {
			const netlistFile = await eda.sch_ManufactureData.getNetlistFile();
			if (!netlistFile) {
				eda.sys_Message.showToastMessage(eda.sys_I18n.text('无法获取网表文件'));
				return;
			}
			const netlistStr = await netlistFile.text();
			const netlist = JSON.parse(netlistStr);
			eda.sys_MessageBus.push('netlist-analyzer:data', { netlist, netlistStr });
			eda.sys_Message.showToastMessage(eda.sys_I18n.text('网表已刷新'));
		}
		catch (e: any) {
			eda.sys_Message.showToastMessage(eda.sys_I18n.text('刷新失败: ${1}', undefined, undefined, e?.message || e));
		}
	});

	// 将图形数据应用到画布
	eda.sys_MessageBus.pull('netlist-analyzer:apply-to-canvas', async (data: any) => {
		try {
			if (!data || (!data.lines?.length && !data.texts?.length)) {
				eda.sys_Message.showToastMessage(eda.sys_I18n.text('没有可应用的图形数据'));
				return;
			}
			const createdIds: Array<string> = [];
			for (const line of data.lines || []) {
				try {
					const result = await eda.sch_PrimitivePolygon.create(
						line.points,
						line.strokeColor || '#000000',
						line.fillColor || 'none',
						1,
						null,
					);
					if (result && result.primitiveId) {
						createdIds.push(result.primitiveId);
					}
				}
				catch (e) {
					console.warn('[Netlist Explorer] Failed to create polygon:', e);
				}
			}
			for (const textItem of data.texts || []) {
				try {
					const result = await eda.sch_PrimitiveText.create(
						textItem.x,
						textItem.y,
						textItem.text,
						0,
						null,
						null,
						null,
						false,
						false,
						false,
						9,
					);
					if (result && result.primitiveId) {
						createdIds.push(result.primitiveId);
					}
				}
				catch (e) {
					console.warn('[Netlist Explorer] Failed to create text:', e);
				}
			}
			if (createdIds.length > 0) {
				try {
					await eda.sch_SelectControl.doSelectPrimitives(createdIds);
				}
				catch (e) {
				}
			}
			eda.sys_Message.showToastMessage(eda.sys_I18n.text('已创建 ${1} 个图元', undefined, undefined, createdIds.length));
		}
		catch (e: any) {
			eda.sys_Message.showToastMessage(eda.sys_I18n.text('应用到画布失败: ${1}', undefined, undefined, e?.message || e));
		}
	});
}

/**
 * 关于
 */
export function about(): void {
	eda.sys_Dialog.showInformationMessage(
		'Netlist Explorer v1.0.5',
		eda.sys_I18n.text('About'),
	);
}

/**
 * 打开网表生成器
 */
export async function generateNetlist(): Promise<void> {
	eda.sys_IFrame.openIFrame('/iframe/netlist.html', 1400, 900, 'netlist-iframe', {
		title: eda.sys_I18n.text('网表生成器'),
		maximizeButton: true,
		minimizeButton: true,
	});
}
