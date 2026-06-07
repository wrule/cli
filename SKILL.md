---
name: req
description: 当用户明确说使用 req skill 发送请求时使用。
---

## 功能

本 skill 通过调用 `req` 命令行工具来发送请求

`req` 命令会自动读取已经保存的鉴权 `headers` 附加到请求上，然后调用 `axios.request()` 发送请求。

- 第一个参数：HTTP method
- 第二个参数：请求 URL，可包含查询参数
- 第三个参数：可选 JSON 请求体

命令会打印响应状态码和格式化后的 JSON 响应体。

## 用法

```bash
req <method> <url> [jsonBody]
```

示例：

```bash
req GET 'https://api.example.com/users'
req GET 'https://api.example.com/users?page=1&limit=20'
req POST 'https://api.example.com/action' '{"id":"123"}'
```

## 注意

- 如果传入 `jsonBody`，必须是合法 JSON。
- `jsonBody` 必须写成能被命令行正确传入的字符串，推荐用单引号包住整段 JSON，JSON 内部使用双引号。
- 第三个参数固定作为 Axios `data` 发送，也就是请求体。
- 如果有查询参数，必须直接拼接在 URL 上。
- 如果遇到鉴权失败或请求头缺失，再让用户手动用 `scurl -H ...` 重新更新请求头。
