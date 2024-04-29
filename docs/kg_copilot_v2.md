# Copilot 组件-Vue2

## ✨ 简介：

- 星光探索 copilot 组件 vue2 版本<br/>

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

| 属性名                    | 类型   | 默认值                                                                       | 说明                                                                                                                                                                                                                                                                                        |
| ------------------------- | ------ | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| aiName                    | string | Copilot                                                                      | ai 名称                                                                                                                                                                                                                                                                                     |
| initText                  | string | "你好，我是 AI 智能助手，如有任何需要，请随时告诉我，我会尽力为您提供帮助。" | 初始化提示语                                                                                                                                                                                                                                                                                |
| placeholder               | string | 输入“@”选择智能体，可通过上下键切换智能体选项，回车选中。                    | 文本框默认提示                                                                                                                                                                                                                                                                              |
| maxSendNum                | number | 0                                                                            | 限制最大对话次数，0 以下无限制                                                                                                                                                                                                                                                              |
| plugins                   | array  | -                                                                            | -name 智能体名称<br/> -url 智能体接口 url<br/> -introduce 智能体介绍<br/>-method 请求方式默认 post<br/>-param_desc 智能体每个参数的描述<br/>-require 描述什么情况下使用该智能体<br/>-requestParameFn 接口发送处理函数<br/>-responseParameFn 接口返回处理函数<br/> -onclose 监听后台连接关闭 |
| intelligentAnalysisConfig | object | -                                                                            | -url 智能分析接口 url<br/> -token 接口 token                                                                                                                                                                                                                                                |
| defaultDeal               | object | -                                                                            | -url 默认处理接口 url<br/> -method 请求方式默认 post<br/>-requestParameFn 接口发送处理函数<br/>-responseParameFn 接口返回处理函数<br/> -onclose 监听后台连接关闭                                                                                                                            |

::: tip 关于 plugins 的传参解释

- 发送消息先走 intelligentAnalysisConfig 智能解析，解析出所需智能体及相关参数进行调用，若发送消息与智能体描述不相关，没有解析到任何智能体，则走 defaultDeal 配置处理逻辑（一般为智能聊天接口）
- `requestParameFn` 和 `responseParameFn` 函数分别用于处理接口参数和接口返回值。
- 你可以在 `requestParameFn` 函数接收智能解析出的参数值，defaultDeal 配置中额外包含用户的发出的消息列表，并通过 data 定义接口参数(body)，headers 定义你的请求头，将拼接好的参数返回。
- 你可以在 `responseParameFn` 函数接收 JSON 格式的接口返回值，并通过 type 定义回答类型，content 定义回答内容，isOver 定义接口结束标识，将拼接好的参数返回。
  :::

::: details 属性传参示例代码

```html
<template>
  <div>
    <h2 style="margin-bottom: 10px">星光探索Copilot组件-vue2</h2>
    <div style="width:100%;height:600px;">
      <KgCopilot
        ref="KgCopilot"
        :intelligentAnalysisConfig="intelligentAnalysisConfig"
        :defaultDeal="defaultDeal"
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
  const contentType = {
    1: "text",
    2: "edit",
    3: "file",
  };
  export default {
    data() {
      return {
        intelligentAnalysisConfig: {
          url: "/api/chat/analysis/message",
          token: "684bfb41718a477ea6695662ac42e70f",
        },
        defaultDeal: {
          url: "/api/chat/url/report",
          requestParameFn: (config) => {
            console.log(config);
            config.headers.accessToken = "684bfb41718a477ea6695662ac42e70f";
            return config;
          },
          responseParameFn: (msg) => {
            if (!msg.data) return;
            const msgData = JSON.parse(msg.data);
            console.log(msgData);
            return {
              type: filetype[msgData.dataType], //消息类型
              content: msgData.data, //内容
              isOver: msgData.status !== SseStatus.running, //结束标识
            };
          },
        },
        plugins: [
          {
            name: "获取事件快报",
            url: "/api/chat/url/report",
            introduce:
              "可对用户提供的网站链接及关键词等信息进行内容提炼并撰写一份事件简报。",
            param_desc: {
              url: "字符串格式，文本信息中出现的url信息，若有多个，则按照要求强烈程度取最高的一条",
              days: "数字格式，文本信息中要求查询多少天的天数，若有周则算7，月算30，年算365",
              isInland:
                "boolean类型 true或者false要求获取的信息为境外则为false，其余情况则为true,需要返回",
              userLogic:
                "字符串格式，文本信息在不进行分词的情况下含有符合elasticsearch的query_string 查询的语法的信息则提取且and or not 等转大写，否则不提取。若该字段最终结果不包含and or not任意一个关键词则也不返回该字段",
              reportType: "若符合该智能体固定返回1。",
            },
            require: "文本信息中要求制作报告或者出现报告或简报等相关字眼即可",
            requestParameFn: (config) => {
              config.headers.accessToken = "684bfb41718a477ea6695662ac42e70f";
              return config;
            },
            responseParameFn: (msg) => {
              if (!msg.data) return;
              const msgData = JSON.parse(msg.data);
              return {
                type: contentType[msgData.dataType], //普通文本
                content: msgData.data, //内容
                isOver: msgData.status !== SseStatus.running, //结束标识
              };
            },
          },
          {
            name: "获取舆情快报",
            url: "report2/kuaibao_report",
            introduce:
              "可对用户提供的网站链接及关键词等信息进行内容提炼并撰写一份舆情快。",
            param_desc: {
              url: "字符串格式，文本信息中出现的url信息，若有多个，则按照要求强烈程度取最高的一条",
            },
            require: "文本信息中要求舆情快报或出现舆情字眼",
            requestParameFn: (config) => {
              config.headers.accessToken = "684bfb41718a477ea6695662ac42e70f";
              config.data.debug = 1;
              return config;
            },
            responseParameFn: (msg) => {
              const msgData = JSON.parse(msg.data);
              return {
                type: contentType[msgData.dataType],
                content: msgData.data, //内容
                isOver: msgData.status !== SseStatus.running, //结束标识
              };
            },
          },
          {
            name: "获取热点专报",
            url: "report2/redian_report",
            introduce:
              "可对用户提供的网站链接及关键词等信息进行内容提炼并撰写一份热点专报文件",
            requestParameFn: (config) => {
              config.data.debug = 1;
              config.headers.accessToken = "684bfb41718a477ea6695662ac42e70f";
              return config;
            },
            param_desc: {
              user_logic:
                "字符串格式，文本信息在不进行分词的情况下含有符合elasticsearch的query_string 查询的语法的信息则提取且and or not 等转大写，否则不提取。若该字段最终结果不包含and or not任意一个关键词则也不返回该字段",
              days: "数字格式，文本信息中要求查询多少天的天数，若有周则算7，月算30，年算365",
            },
            require: "文本信息中要求热点专报或出现热点字眼",
            responseParameFn: (msg) => {
              const msgData = JSON.parse(msg.data);
              return {
                type: contentType[msgData.dataType],
                content: msgData.data, //内容
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
