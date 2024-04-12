# copilot 组件

## ✨ 简介：

星光探索 copilot 组件 vue2 版本<br/>

## 📦 安装

通过 npm

```bash
npm install @kg-ui/kg-ui
```

通过 yarn

```bash
yarn add @kg-ui/kg-ui
```

## 🔨 快速开始

```js
import KnowUI from '@kg-ui/kg-ui'
import "@kg-ui/kg-ui/lib/main.css"
Vue.use(KnowUI, {store: vuex对象})
<template>
  <KgCopilot></KgCopilot>
</template>
```

## 属性

| 属性名     | 类型   | 默认值                                                                       | 说明                                                                                                                                                                              |
| ---------- | ------ | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| aiName：   | string | Copilot                                                                      | ai 名称                                                                                                                                                                           |
| initText： | string | "你好，我是 AI 智能助手，如有任何需要，请随时告诉我，我会尽力为您提供帮助。" | 初始化提示语                                                                                                                                                                      |
| plugins    | []     | [] =>{}                                                                      | -url 插件接口 url<br/> -name 工具名称<br/> -id 工具 id<br/> -dsc 工具描述<br/> -icon 图表地址<br/> -requestParameFn 接口发送处理函数<br/> -responseParameFn 接口返回处理函数<br/> |

::: tip 关于 plugins 的传参解释

- `requestParameFn` 和 `responseParameFn` 是分别用于处理接口发送的函数和处理接口返回的函数
- `requestParameFn` 的入参为用户的发出的消息列表
- `responseParameFn`的入参为接口返回值
- 你可以在 `requestParameFn` 函数中通过 data 定义接口参数，headers 定义你的请求头。
- isOver 是接口结束标识
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
                data: {
                  url: msgs.pop(), //取最后一条消息
                },
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

## 暴露的方法

- getSearchText： 获取输入框的文字
- setSearchText： 设置输入框的文字
- getMsgList： 获取消息列表信息

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
