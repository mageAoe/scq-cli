## vite + vue + ts

> pre-commit hook 文件作用是：当执行 git commit \-m "xxx" 时，会先对 src 目录下所有的 .vue、.js、.ts 文件执行 eslint \--fix 命令，如果 ESLint 通过，成功 commit，否则终止 commit

> npm uninstall eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue @typescript-eslint/parser @typescr -D



## 解决 eslint 和 prettier 冲突

> 解决 ESLint 中的样式规范和 prettier 中样式规范的冲突，以 prettier 的样式规范为准，使 ESLint 中的样式规范自动失效

> npm i -D eslint-config-prettier

## npm run lint 报错

> .eslintrc.js 重命名为 .eslintrc.cjs

## .npmrc

> .npmrc文件，指定项目依赖的来源（yarn 会读取.npmrc的配置文件

## ESlint不要分号，Prettier却强制分号结尾的问题，解决如下（这里统一不要分号）
> package.json

```js
"prettier": {
   "semi": false
}
```
## vite 常用插件
> 可以查看官方文档：vitejs.cn/plugins/

@vitejs/plugin-vue 提供 Vue 3 单文件组件支持
@vitejs/plugin-vue-jsx 提供 Vue 3 JSX 支持（通过 专用的 Babel 转换插件）
@vitejs/plugin-legacy 为打包后的文件提供传统浏览器兼容性支持
unplugin-vue-components 组件的按需自动导入
vite-plugin-compression 使用 gzip 或者 brotli 来压缩资源

## 非常推荐使用的 hooks 库

> 因为vue3.x和react hooks真的很像，所以就称为 hooks

> VueUse：vueuse.org/

## Cannot find module 'xxx.vue' or its corresponding type declarations.ts(2307)

> 在项目根目录或 src 文件夹下创建一个名为 shims-vue.d.ts 的文件，并写入以下内容

```js
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
```

## Component name "Login" should always be multi-word.eslint

> .eslintrc.js中配置:

```json
rules: {
        'vue/multi-word-component-names': 0,
      },
```

or

> vue.config.js 文件中加一行

```js
module.exports = { 
    lintOnSave:false, 
}
```

## 提交

> commit-msg": "node scripts/verify-commit-msg.js"

```js
"config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
```
