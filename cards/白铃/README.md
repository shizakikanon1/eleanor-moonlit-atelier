# 白铃 · 花见咖啡馆

依据提供的插画建立的 SillyTavern 角色卡项目草案，组织方式参考本仓库外部示例 `cards/艾莉诺`。插画没有角色文字信息，因此姓名、年龄 22 岁、咖啡馆主理人身份和樱町背景都属于可替换的创作假设。

## 文件

- `白铃.png`：用户提供的角色图，作为卡片头像。
- `design-spec.md`、`创作规划.yaml`：视觉解析与项目规划。
- `tavern-cards-state.json`：项目结构、条目清单、正则状态栏、MVU/Zod 元数据。
- `schema.ts`、`世界书/变量/`：追踪时间、地点、衣着、心情、精力、信赖和共同回忆。
- `正则/状态栏界面.html`：珍珠白/浅蓝/樱粉调的轻量状态栏，使用 MVU 消息变量宏。
- `开场白/0.txt`：咖啡馆试饮场景。

## 导入与构建

本目录保存可继续编辑的项目源文件。使用本机 tavern-cards-forge 环境注册项目后，可通过 `pack 白铃` 导出 PNG 卡片；本仓库的 `eleanor-statusbar-index.html` 是 Eleanor 专属的生产 bundle，不直接作为白铃的运行时替换文件。白铃的状态栏源码在 `正则/状态栏界面.html`，随卡片源文件一并托管。

### 运行时依赖

- SillyTavern + Tavern Helper 的 MVU 与 `format_message_variable` 宏。
- MVU 更新组件：`MagicalAstrogy/MagVarUpdate` loader（见 `脚本/MVU.txt`）。
- Zod schema loader URL 记录在 `tavern-cards-state.json` 的 `zod.importUrl`。
- 无远程图片依赖；头像本地打包。
