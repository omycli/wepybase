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
https://github.com/omycli/wepybase.git
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