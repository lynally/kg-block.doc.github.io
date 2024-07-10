# 标签组件

## ✨ 简介：

- 星光探索 标签组件 vue2 版本

## 📦 安装

通过 npm

```bash
npm install knowl-ui-tags2
```

通过 yarn

```bash
yarn add knowl-ui-tags2
```

## 🔨 快速开始

```js{4}
import knowl_tags from 'knowl-ui-tags2'
import 'knowl-ui-tags2/lib/main.css'
Vue.use(knowl_tags, {store: vuex对象})
<template>
  <Home></Home>
</template>
```

## 属性

- pid: 选中项目 id string
- fdata: {}
  - filter 获取类别（非信源）appcategory/getAppCategoryList
  - filter_xinyuan: 获取类别（信源）appSourceCol/list
  - xinyuan_mapmping: 获取信源对应关系 appSourceMapping/getSourceMapping
  - xinyuan_head: 获取信源表头 appSourceCol/getAllList
  - fliterCount: 标签数量 {}
    - label_id:num

## 暴露的方法

- getSelFilter: 获取选中的标签
- getShowFilter： 获取显示的标签
- getAllFilter: 获取全部标签
- setSelFilter: 设置选中的标签 参数 fid 数组 [1,2,3]
- clearAllData：切换项目的时候情况数据
- setShowCount: 设置显示类别数量开关,默认 true 参数 xxx ：boolean
- setShowFilter_byCount：只显示有数量的类别,默认 false 参数 xxx:boolean
- setLanguage: 国际化设置,参数 字符串 zh 或 en, 默认是 zh

## 事件

- selFilterChange: 选中标签时触发
