# copilot 组件

## 简介：

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

## 暴露的方法

- getSearchText： 获取输入框的文字
- setSearchText： 设置输入框的文字
- getMsgList： 获取消息列表信息
- setMsgList： 设置消息列表信息

## 事件

- sendMsg: 发送时触发

## 接口定义

- /sendUrl 不使用插件的问答

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
