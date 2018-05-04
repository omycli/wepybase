# wepybase
基于wepy的小程序模板

## 体验步骤

### 1. 安装 wepy
本项目基于wepy开发，[参考这里](https://github.com/wepyjs/wepy)
```bash
npm install wepy-cli -g
```

### 2. 下载源代码
```bash
ssh://git@10.97.204.200:/home/git/repo/trip_miniprogram.git
```

### 3. 安装开发依赖
```bash
npm install
```

### 4. 编译源代码

#### 开发模式
```bash
npm run dev
```
#### 打包模式
```bash
npm run build
```

### 5.导入至开发者工具

编译完成后会生成`dist`目录，开发者工具本地开发目录指向`dist`目录。

**切记： 取消勾选`项目-->开启ES6转ES5`，否则代码运行报错。**

  
## 开发步骤

### 1.样式

```
> 样式主要写在css目录下,统一用scss预编译
> base.scss下有一些基础样式的设定,包含flex和原生button,checkbox,radio的修改.
> mixin.scss下主要是一些常用问题的解决方法.
> 如需自定义样式,创建好后需要在package.scss里面引用一下.
> eg:page.scss
```

### 2.小图标雪碧图


```
> 主要用于将页面中的小图标放在slices目录下,运行代码将自动合成雪碧图,直接在页面class中引用就可以了.  
> eg:创建图标命名为cherry.png,那么直接在页面class="icon-cherry"就可以看到效果了.  
> 注意:目前待合成雪碧图应小于3M,否则无效果.需要修改请移步gulpfile.js
```

### 3.按钮事件

```
> 页面跳转按钮事件统一在utils下的nav.js中
> 在需要跳转的页面引用 import NAV from './../utils/nav.js';
> 在页面中使用NAV.你的方法(e.this.$root)
```

### 4.数据请求

```
> 数据请求统一在api目录下.
> base.js中配置请求域名
> 其他页面自行根据业务进行创建.
> eg:api.js
```

### 5.模拟数据

```
> 模拟数据写在mocks文件夹下,在api中引用.
> eg:index.js
```