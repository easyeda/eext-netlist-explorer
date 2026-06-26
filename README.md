# 网表分析器 / Netlist Explorer

基于 EasyEDA Pro 扩展接口的网表分析工具，支持一键提取原理图网表，并在 EasyEDA Pro 中进行网表查看、连接关系分析、连接器引脚映射可视化、器件拓扑图、BOM 提取与多格式导出。


A netlist analysis tool based on the EasyEDA Pro extension API, supporting one-click netlist extraction from schematics, with netlist browsing, connection analysis, connector pin mapping visualization, BOM extraction, and multi-format export in EasyEDA Pro.

## **支持内容 / Supported Views**

支持以下内容：
-  全量网表查看 / Full netlist view 
![](./images/netlist-view.png)
-  连接关系参考网表 / Connection reference netlist 
![](./images/connection-ref.png)
-  连接关系图（连接器引脚映射）/ Connector pin mapping diagram
![](./images/pin-mapping.png)
-  器件拓扑图 / Component topology diagram
![](./images/topology-view.png)
-  网表 JSON 查看 / Netlist JSON viewer 
![](./images/json-viewer.png)
-  BOM 提取与导出 / BOM extraction and export 
![](./images/bom-export.png)


Supports the following content:
-  Full netlist view
-  Connection reference netlist
-  Connector pin mapping diagram
-  Component topology diagram
-  Raw JSON viewer
-  BOM extraction and export 

## **在图中能力 / In-Editor Capabilities**

可用于：
-  快速查看原理图所有器件与引脚连接关系 
-  分析网络之间的连接分组与方向 
-  自动识别连接器配对并生成引脚映射图 
-  提取器件清单并导出 CSV 
-  导出完整网表、连接关系网表和原始 JSON 


Useful for:
-  Quickly inspecting all schematic components and pin connections 
-  Analyzing grouped net relationships and connection directions 
-  Automatically identifying connector pairs and generating pin mapping diagrams 
-  Extracting BOM data and exporting CSV 
-  Exporting full netlist, connection netlist, and raw JSON 

## **功能特性 / Features**

-  ✨ 一键生成网表 - 从 EasyEDA Pro 当前原理图中直接提取网表数据 
-  📊 统计看板 - 显示元件数量、网络总数、引脚连接数、悬空引脚和未命名网络 
-  📋 全量网表视图 - 以表格形式查看器件、引脚、网络、分类和描述 
-  🔗 连接关系参考网表 - 将网络连接整理为更适合阅读和检查的连接关系表 
-  🧭 连接器配对识别 - 自动提取连接器之间的配对关系 
-  🖼️ 连接关系图 - 生成连接器引脚映射 SVG 图，支持缩放、拖拽和筛选
-  🕸️ 器件拓扑图 - 可视化展示器件间的连接关系网络，默认过滤 GND 网络，点击引脚可高亮同名网络，支持按网络筛选
-  🧾 BOM 提取 - 根据器件属性聚合生成 BOM 清单 
-  💾 多格式导出 - 支持导出全量网表 CSV、连接关系 CSV、原始 JSON 和引脚映射 SVG 
-  🌐 中英双语 - 支持中文和英文界面切换 
-  🎨 深浅色主题 - 支持浅色/深色主题切换 
-  🔍 筛选分析 - 支持按分类、网络分组、器件前缀和连接对进行筛选查看 


-  ✨ One-click netlist generation - Extract netlist data directly from the current EasyEDA Pro schematic 
-  📊 Statistics dashboard - Display component count, total nets, connected pins, floating pins, and unnamed nets 
-  📋 Full netlist view - Browse components, pins, nets, categories, and descriptions in a table 
-  🔗 Connection reference netlist - Reorganize raw net connections into a more readable connection table 
-  🧭 Connector pair detection - Automatically detect connector-to-connector mapping pairs 
-  🖼️ Connection diagram - Generate SVG-based connector pin mapping diagrams with zoom, pan, and filtering
-  🕸️ Component topology diagram - Visualize component connection networks with GND filtered by default, click pins to highlight same-name nets, filter by network
-  🧾 BOM extraction - Aggregate component properties into a BOM list 
-  💾 Multi-format export - Export full netlist CSV, connection CSV, raw JSON, and pin mapping SVG 
-  🌐 Bilingual UI - Switch between Chinese and English 
-  🎨 Theme toggle - Support light and dark themes 
-  🔍 Filtering tools - Filter by category, net group, component prefix, and connector pair 

## **已知问题 / Known Issues**

-  引脚名称增强包含异步补全逻辑，某些跨页器件的引脚名可能不会立即在首屏结果中体现 
-  部分 CSV 导出内容在特殊字符较多时，仍建议在 Excel 或文本工具中二次确认格式 
-  "应用到画布"的底层消息处理已预留，但当前界面版本主要以分析与导出为主 


-  Pin name enrichment includes asynchronous enhancement logic, so pin names for some cross-page components may not appear immediately in the initial result 
-  For CSV exports containing many special characters, it is recommended to verify formatting in Excel or a text editor 
-  The underlying "apply to canvas" message handler is prepared, but the current UI is mainly focused on analysis and export 

## **安装 / Installation**

1.  打开 嘉立创EDA / EasyEDA Pro 
2.  进入原理图编辑器 
3.  点击 高级 → 扩展管理器 → 扩展列表 
4.  查找 网表分析器 并安装，或点击 导入扩展
5.  选择已构建好的 .eext 文件 
6.  确认安装 


7.  Open EasyEDA Pro 
8.  Enter the schematic editor 
9.  Click Advanced → Extension Manager → Extension List 
10.  Find Netlist Explorer and install it, or click Import Extension
11.  Select the built .eext file 
12.  Confirm installation 

## **使用方法 / Usage**

### **打开插件 / Open Plugin**
在原理图编辑器中，点击顶部菜单：
网表分析器 → 生成网表
插件窗口将自动打开，并开始加载和显示当前原理图的网表数据。


In the schematic editor, click the top menu:
Netlist Explorer → Generate Netlist
The plugin window will open automatically and load the current schematic netlist.

### **查看网表 / Browse Netlist**

插件打开后，可在左侧切换不同分析面板：
-  全量网表 
-  连接关系参考网表 
-  连接关系图 
-  原始 JSON 


After opening the plugin, switch between analysis panels on the left:
-  Full Netlist
-  Connection Reference Netlist
-  Connection Diagram
-  Component Topology Diagram
-  Raw JSON 

### **使用筛选 / Use Filters**

在表格、映射图和拓扑图面板中，可使用筛选项快速聚焦特定内容，例如：
-  某一类器件
-  某一组网络
-  某一类连接器
-  某一组引脚映射关系


In table, mapping, and topology diagram panels, filters can be used to focus on:
-  A specific device category
-  A specific net group
-  A certain connector type
-  A selected pin mapping pair 

## **界面说明 / Interface Overview**

### **1. 顶部统计栏 / Top Statistics Bar**
显示以下信息：
-  元件数量 
-  网络总数 
-  引脚连接数 
-  悬空引脚 
-  未命名网络 


Displays:
-  Component count 
-  Total net count 
-  Connected pin count 
-  Floating pins 
-  Unnamed nets 

### **2. 全量网表 / Full Netlist**
以表格形式展示：
-  位号 
-  引脚号 
-  引脚名称 
-  网络名称 
-  器件分类 
-  描述信息 


Displayed as a table:
-  Designator 
-  Pin number 
-  Pin name 
-  Net name 
-  Category 
-  Description 

### **3. 连接关系参考网表 / Connection Reference Netlist**
将网络重新组织为更适合人工检查的连接关系格式，便于查看：
-  哪个器件的哪个引脚 
-  通过哪个网络 
-  连接到哪个目标器件和引脚 


Reorganizes netlist data into a human-readable connection table, making it easier to inspect:
-  Which device and pin 
-  Through which net 
-  Connected to which target device and pin 

### **4. 连接关系图 / Connection Diagram**
自动提取连接器对，并生成可视化引脚映射图，支持：
-  缩放 
-  拖拽 
-  中心复位 
-  连接对切换 
-  SVG 导出 


Automatically extracts connector pairs and generates a visual pin mapping diagram with:
-  Zoom 
-  Pan 
-  Reset to center 
-  Pair switching 
-  SVG export 

### **5. 网表 JSON / Netlist JSON**
显示从原理图提取的原始网表 JSON 数据，适合调试、验证和二次开发。


Displays the raw netlist JSON extracted from the schematic, useful for debugging, validation, and secondary development.

### **6. 器件拓扑图 / Component Topology Diagram**
自动分析器件之间的连接关系，生成可视化拓扑图，支持：
-  默认过滤 GND 网络，避免干扰网络可视化
-  点击引脚高亮同名网络
-  按网络筛选过滤显示内容
-  交互式缩放和拖拽浏览
-  SVG 格式导出


Automatically analyzes component connections and generates a visual topology diagram with:
-  GND networks filtered by default to avoid visual interference
-  Click on a pin to highlight nets with the same name
-  Filter and display by network
-  Interactive zoom and pan
-  SVG export

## **导出功能 / Export Options**

### **支持导出 / Supported Exports**
-  全量网表 CSV / Full Netlist CSV
-  连接关系 CSV / Connection CSV
-  原始 JSON / Raw JSON
-  引脚映射 SVG / Pin Mapping SVG
-  器件拓扑图 SVG / Topology Diagram SVG
-  BOM CSV / BOM CSV 

### **导出说明 / Export Notes**
-  全量网表 CSV：适合做完整连接审查与归档
-  连接关系 CSV：适合做接口检查和线束核对
-  原始 JSON：适合做脚本处理和调试
-  引脚映射 SVG：适合作为设计说明、接口文档或交付附件
-  器件拓扑图 SVG：适合作为系统架构说明和设计文档
-  BOM CSV：适合做采购、整理和归档 


-  Full Netlist CSV: suitable for full connection review and archiving
-  Connection CSV: suitable for interface review and cable checking
-  Raw JSON: suitable for scripting and debugging
-  Pin Mapping SVG: suitable for design notes, interface documentation, or delivery attachments
-  Topology Diagram SVG: suitable for system architecture documentation
-  BOM CSV: suitable for procurement, organization, and archiving 

## **BOM 提取 / BOM Extraction**

点击 提取 BOM 按钮后，插件会根据器件属性自动聚合生成 BOM 清单。
默认提取的信息包括：
-  位号 
-  器件名称 
-  规格/数值 
-  封装 
-  制造商 
-  制造商料号 
-  供应商料号 
-  数量 


Click Extract BOM to generate a BOM aggregated from component properties.
Extracted fields include:
-  Designators 
-  Device name 
-  Value / specification 
-  Footprint 
-  Manufacturer 
-  Manufacturer part number 
-  Supplier part number 
-  Quantity 

## **数据来源 / Data Source**

插件主要通过 EasyEDA Pro 提供的原理图制造数据接口获取网表，并对数据进行进一步增强，包括：
-  从网表 JSON 中预填引脚名称 
-  通过 EDA API 尝试补全引脚名称 
-  支持多页原理图中的器件引脚信息匹配 
-  对连接器和网络进行额外分析和归类 


The plugin mainly retrieves netlist data through EasyEDA Pro's schematic manufacturing data API, then enriches the data by:
-  Pre-filling pin names from netlist JSON 
-  Attempting to enhance pin names through the EDA API 
-  Supporting pin matching for multi-page schematics 
-  Performing extra connector and net classification analysis 

## **适用场景 / Use Cases**

-  原理图连接检查 
-  板级接口关系核对 
-  连接器对接关系梳理 
-  线束定义与整理 
-  设计交付资料导出 
-  BOM 初步提取与整理 


-  Schematic connection inspection 
-  Board-level interface checking 
-  Connector mapping review 
-  Harness definition and organization 
-  Design deliverable export 
-  Initial BOM extraction and cleanup 

## **开发 / Development**

```
npm install
npm run compile
npm run build
```
构建后的扩展包位于构建输出目录中，可导入 EasyEDA Pro 安装使用。


The built extension package will be generated in the build output directory and can be imported into EasyEDA Pro.

## **技术栈 / Tech Stack**
-  EasyEDA Pro API - 插件开发接口 / Extension development API 
-  TypeScript - 主逻辑实现 / Main logic implementation 
-  iframe + HTML + CSS + Vanilla JavaScript - 界面与交互 / UI and interaction 
-  SVG - 引脚映射图导出与展示 / Pin mapping export and rendering 

## **许可证 / License**
Apache-2.0

## **贡献 / Contributing**
欢迎提交 Issue 和 Pull Request。


Issues and Pull Requests are welcome.

## **相关链接 / Links**
-  [EasyEDA Pro](https://easyeda.com/) 
-  [EasyEDA Pro 扩展开发文档](https://docs.easyeda.com/en/Extension/intro/index.html) 