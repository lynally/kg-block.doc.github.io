# Copilot 组件-Vue3

## ✨ 简介：

- 星光探索 copilot 组件 vue3 版本

## 📦 安装

通过 npm

```bash
npm install @kg-ui/kg-ui-plus
```

通过 yarn

```bash
yarn add @kg-ui/kg-ui-plus
```

## 🔨 快速开始

```js
import KnowUI from '@kg-ui/kg-ui-plus'
import "@kg-ui/kg-ui-plus/dist/es/style.css";
Vue.use(KnowUI, {store: pinia对象})
<template>
  <KgCopilot></KgCopilot>
</template>
```

## 属性

| 属性名     | 类型   | 默认值                                                                       | 说明                                                                                                                                                                                                                |
| ---------- | ------ | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| aiName：   | string | Copilot                                                                      | ai 名称                                                                                                                                                                                                             |
| initText： | string | "你好，我是 AI 智能助手，如有任何需要，请随时告诉我，我会尽力为您提供帮助。" | 初始化提示语                                                                                                                                                                                                        |
| plugins    | array  | -                                                                            | -url 智能体接口 url<br/> -name 智能体名称<br/> -id 智能体 id<br/> -dsc 智能体描述<br/>-introduce 智能体介绍<br/> -icon 图标地址<br/> -requestParameFn 接口发送处理函数<br/> -responseParameFn 接口返回处理函数<br/> |

::: tip 关于 plugins 的传参解释

- `requestParameFn` 和 `responseParameFn` 函数分别用于处理接口参数和接口返回值。
- 你可以在 `requestParameFn` 函数接收用户的发出的消息列表，并通过 data 定义接口参数，headers 定义你的请求头，将拼接好的参数返回。
- 你可以在 `responseParameFn` 函数接收 JSON 格式的接口返回值，并通过 type 定义回答类型，content 定义回答结果，isOver 定义接口结束标识，将拼接好的参数返回。
  :::
  ::: details 属性传参示例代码

```html
<template>
  <div>
    <h2 style="margin-bottom: 10px">星光探索Copilot组件-vue2</h2>
    <div style="width:100%;height:600px;">
      <KgCopilot
        :plugins="plugins"
        aiName="KPAI"
        initText="你好，我是探索平台智能AI助手，如有任何需要，请随时告诉我，我会尽力为您提供帮助。" />
    </div>
  </div>
</template>

<script>
  const SseStatus = {
    failed: -1,
    complete: 10,
    running: 1,
  };
  export default {
    data() {
      return {
        plugins: [
          {
            name: "获取简报",
            url: "api/chat/url/report",
            describe:
              "可对用户提供的网站链接及关键词等信息进行内容提炼并撰写一份舆情简报。",
            requestParameFn: (msgs) => {
              return {
                // 接口参数
                data: {
                  url: msgs.pop(), //取最后一条消息
                },
                // 请求头
                headers: {
                  accessToken: "354216b2d3cd4a3bb06bd479eb1dd2d6",
                },
              };
            },
            responseParameFn: (msg) => {
              const msgData = JSON.parse(msg.data);
              return {
                type: "text", //普通文本
                content: msgData.data + "<br/>", //内容
                isOver: msgData.status !== SseStatus.running, //结束标识
              };
            },
          },
        ],
      };
    },
  };
</script>
```

:::

## 插槽

- avatar 自定义 AI 头像

## 暴露的方法

- getSearchText： 获取输入框的文字
- setSearchText(text:string)： 设置输入框的文字
- getMsgList： 获取消息列表信息
- sendMsg(text:string): 自动发送消息

## 接口定义

- /sendUrl 不使用智能体的问答

| 参数名  | 类型     | 说明         |
| ------- | -------- | ------------ |
| msg     | string   | 查询的关键字 |
| histroy | str 数组 | 历史提问     |
| extend  | 对象     | 附加功能信息 |

- header 包含 token

**接口参数**

- post 请求

**返回值**

- 流的方式

```js{4}
{
  文字内容
}
```
