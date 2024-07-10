# copilot组件

## 简介：
- 星光探索 copilot组件vue3版本

## 属性
- sendUrl：    查询接口地址
- plugins：   获取插件集接口地址 []
  - name  工具名称
  - id    工具id
  - dsc   工具描述
  - icon  图表地址
- token：  用户标识
- aiName：   ai名称
- initText：  初始化提示语
## 暴露的方法
- getSearchText：  获取输入框的文字
- setSearchText：  设置输入框的文字
- getMsgList： 获取消息列表信息
- setMsgList： 设置消息列表信息

## 事件
- sendMsg: 发送时触发
- handleClickStopBtn: 点击停止按钮时触发

## 接口定义
- /sendUrl  不使用插件的问答

| 参数名 | 类型   | 说明     |
| -- | ----- | ----- |
| msg | string | 查询的关键字 |
| histroy | str数组 | 历史提问 |
| extend | 对象 | 附加功能信息 |

- header包含token

**接口参数**
- post请求

**返回值**
- 流的方式
```js{4}
{
  文字内容
}
```



