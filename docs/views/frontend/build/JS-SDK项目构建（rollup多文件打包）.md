---
title: JS-SDK项目构建（rollup多文件打包）
date: 2019-09-12
tags:
 - JavaScript
 - Rollup
categories:
 - Build
---

## 初始化文件目录

```
ProjectName
├─ build
│   ├─ rollup.config.dev.js    开发环境的配置文件（启动本地服务、开启热重载）
│   ├─ rollup.config.js        通用配置文件（控制打包流程、代码转换、cmd规范的js转换、eslint代码规范等等）
│   └─ rollup.config.prod.js   生产环境的配置文件（混淆生产代码）
├─ dist                        存放打包后的文件
├─ example                     开发时，用于调试的页面
│   ├─ index.html
│   └─ game.html
├─ src                         打包的入口
│   ├─ index.js
│   └─ sdk.js
└─ package.json
```

## 安装依赖

```sh
npm i -D rollup // rollup基础模块
npm i -D rollup-plugin-babel // 转换代码
npm i -D @babel/core @babel/preset-env @babel/plugin-transform-classes // babel核心、自动辨别加载相应babel模块、class转换
npm i -D rollup-plugin-node-resolve // 识别无法识别node_modules的模块
npm i -D rollup-plugin-commonjs // 将node_modules中的cmd规范的模块转换为es语法

// 如果需要eslint
// npm i -D rrollup-plugin-eslint // 代码规范检查插件
// npm i -g eslint
```

一键安装

```sh
npm i -D rollup rollup-plugin-babel @babel/core @babel/preset-env @babel/plugin-transform-classes rollup-plugin-node-resolve rollup-plugin-commonjs
```

## 配置 rollup

### `rollup.config.js`

如果安装了eslint，在项目的根目录执行`eslint --init`，会生成一个`.eslintrc.**`的文件，并且`rollup-plugin-eslint`会自动加载这个配置文件

配置`rollup.config.js`

```js
const path = require('path');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
// const sass = require('rollup-plugin-sass'); // 需要先安装 rollup-plugin-sass
// const {eslint} = require('rollup-plugin-eslint'); // 需要先安装 rollup-plugin-eslint

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath);
};

const plugins = [
  resolve(),
  commonjs(),
  // 如果安装了sass，在这里配置
  // sass(
  //   insert: true // 将编译后的 css 动态插入到 head 标签
  // ),
  // 如果安装了eslint，在这里配置
  // eslint({
  //   include: ['src/**'],
  //   exclude: ['node_modules/**']
  // }),
  babel({
    babelrc: false,
    presets: [
      ['@babel/preset-env', { modules: false }]
    ],
    plugins: [
      ['@babel/plugin-transform-classes', {
        'loose': true
      }]
    ]
  })
];

module.exports = [
  {
    input: resolveFile('src/index.js'),
    output: {
      file: resolveFile('dist/index.js'),
      format: 'umd',
      name: '' // umd 输出模式必填 name
    },
    plugins
  }, {
    input: resolveFile('src/sdk.js'),
    output: {
      file: resolveFile('dist/sdk.js'),
      format: 'umd',
      name: 'hhpSDK' // 打包后暴露的全局变量
    },
    plugins
  }
];
```

### `rollup.config.dev.js`

先安装用于开发环境的rollup插件

```sh
npm i -D rollup-plugin-serve // 用于启动本地 server
npm i -D rollup-plugin-livereload // 配合 rollup-plugin-serve 监听开发文件自动刷新浏览器
```

然后再配置`rollup.config.dev.js`

```js
process.env.NODE_ENV = 'development'; // 设置环境变量为开发模式

const path = require('path');
const serve = require('rollup-plugin-serve');
const configList = require('./rollup.config');
const livereload = require('rollup-plugin-livereload');
const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath);
};

// 合并rollup.config.js中的基础配置
configList.map((config, index) => {
  config.output.sourcemap = true;
  if (index === 0) {
    config.plugins = [
      ...config.plugins,
      ...[
        serve({
          port: 3000,
          contentBase: [resolveFile('')]
        }),
        livereload(resolveFile('dist')) // 启动重载，并且监听 dist 目录
      ]
    ];
  }
  return config;
});

module.exports = configList;
```

### `rollup.config.prod.js`

先安装用于生产环境的rollup插件

```sh
// npm i -D rollup-plugin-uglify // 混淆代码专用
// TIPS：上述插件不支持es模块打包，所以想输出 uglify 的 es 模块需要使用下边的插件
npm i -D rollup-plugin-uglify-es
```

然后再配置`rollup.config.prod.js`

```js
process.env.NODE_ENV = 'production'; // 设置环境变量为生产
// const { uglify } = require('rollup-plugin-uglify');
// import uglify from 'rollup-plugin-uglify-es';
const uglify = require('rollup-plugin-uglify-es');
// const path = require('path');

const configList = require('./rollup.config');

// const resolveFile = function(filePath) {
//   return path.join(__dirname, '..', filePath);
// };

// 合并rollup.config.js中的基础配置
configList.map(config => {
  config.output.sourcemap = false;
  config.plugins = [
    ...config.plugins,
    ...[
      uglify()
    ]
  ];
  return config;
});

module.exports = configList;
```

## 配置启动命令

在`package.json`的`script`中加入下面的命令

```json
  "scripts": {
    "build": "node_modules/.bin/rollup -c ./build/rollup.config.prod.js", // 构建命令，rollup -c 指定配置文件
    "dev": "node_modules/.bin/rollup -w -c ./build/rollup.config.dev.js", // 启动生产命令，rollup -w 开启监听模式，文件变化随时知道
  },
```

> 注意：
> 1. `example`目录下面的测试文件，引入的是`dist`目录下打包后的文件
> 2. 实际使用的时候发现在样式文件内 @import 引入其他的样式文件不会触发自动编译，暂时的解决办法为：用JS来引入样式文件
