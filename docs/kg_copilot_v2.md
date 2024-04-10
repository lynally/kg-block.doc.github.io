# copilot组件

## 简介：
- 星光探索 copilot组件vue2版本

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

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

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
