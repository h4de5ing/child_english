# 项目结构与 Cloudflare Workers 部署

整个仓库根目录作为一个静态站点部署。一个 Worker 同时提供入口首页、Claude 版本和 Codex 版本。

```text
child_english/
├── index.html                 # 统一入口：选择两个版本
├── src_claude/                # Claude 页面、样式、脚本和资源
├── src_codex/                 # Codex 页面、PWA 和图标
├── wrangler.jsonc             # 整个项目唯一的部署配置
├── _headers                   # Codex PWA 的缓存响应头
├── .assetsignore              # 仅发布首页和两个应用目录
└── docs/                      # 文档，不作为公开资源发布
```

## 本地预览

从项目根目录执行：

```powershell
python.exe -m http.server 4173 --bind 127.0.0.1 --directory .
```

打开 <http://127.0.0.1:4173/> 查看整体项目。也可双击根目录的 `index.html` 查看首页，但模块脚本和 PWA 应通过本地服务访问。Python 预览不应用 Cloudflare 的 `_headers` 规则或 HTML 路径规范化。

Windows 上以仓库根目录为静态资源目录时，Wrangler 的文件监听可能因自身临时文件触发反复重载，日常预览建议使用上述静态服务；这不影响 `wrangler deploy` 发布。

## 命令行部署

所有命令都在项目根目录执行，不进入 `src_codex` 或 `src_claude`。

```powershell
# 首次使用时登录 Cloudflare
npx wrangler@4.137.0 login

# 检查配置，不上传、不发布
npx wrangler@4.137.0 deploy --dry-run

# 发布整个项目
npx wrangler@4.137.0 deploy
```

`wrangler.jsonc` 中 `assets.directory` 为 `.`，Worker 名称为 `child-english`。如需要其他名称，修改 `name`。

## Cloudflare Git 集成设置

提交并推送文件后，在 Workers 中连接仓库：

| 配置项       | 值                                  |
| --------- | ---------------------------------- |
| 项目根目录     | 仓库根目录（留空或 `.`）                     |
| 构建命令      | 留空，无需构建                            |
| 部署命令      | `npx wrangler@4.137.0 deploy`      |
| Worker 名称 | `child-english`，或与配置文件中的 `name` 一致 |

本项目采用 Workers Static Assets，不需要服务端脚本、数据库或环境变量。`src_codex/sw.js` 是浏览器的 Service Worker，不是 Workers 服务端入口。

## 部署后的访问路径

| 路径             | 页面        |
| -------------- | --------- |
| `/`            | 统一首页，选择版本 |
| `/src_codex/`  | Codex 版本  |
| `/src_claude/` | Claude 版本 |

Workers 默认会将 `.html` 入口规范化；首页中的文件链接仍可正常跳转。缺失资源返回 404，不会回退到另一个版本。

Codex PWA 的安装、启动和 Service Worker 范围都在 `/src_codex/`，不会控制首页或 Claude 版本。语音仍使用浏览器能力，需要在目标手机上验证；离线缓存成功后可离线看图和玩游戏。

学习进度保存在当前来源的浏览器中，从 localhost 换到 Workers 域名不会自动迁移进度。尚未执行线上发布；部署后重点验证发音、安装、离线重开和再次发布后的更新。

## 相关说明

- [Codex 版本功能说明](../src_codex/README.md)
- [Workers 静态资源配置](https://developers.cloudflare.com/workers/static-assets/binding/)
- [Cloudflare HTML 路径处理](https://developers.cloudflare.com/workers/static-assets/routing/advanced/html-handling/)
- [Cloudflare 静态响应头](https://developers.cloudflare.com/workers/static-assets/headers/)
