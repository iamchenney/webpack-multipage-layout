# webpack-multipage-layout

## 项目介绍

本项目借鉴自 [@Array-Huang/webpack-seed](https://github.com/Array-Huang/webpack-seed) 主要对项目目录结构
和文件进行了调整，使目录更加清晰

## 使用说明
- 全局安装webpack和webpack-dev-server，如果已经装过那可以跳过这一步
```bash
$ npm install --global webpack webpack-dev-server
```

- 本项目使用包管理工具NPM，因此需要先把本项目所依赖的包下载下来：
```
git clone https://github.com/iamchenney/webpack-multipage-layout.git
cd webpack-multipage-layout
$ npm install
```

- 编译程序，生成的所有代码在`build`目录内。
```
$ npm run build # 生成生产环境的代码。用npm run watch或npm run dev可生成开发环境的代码
```

- 启动服务器，推荐直接使用webpack-dev-server
```
$ npm run start
```


## CLI命令(npm scripts)
| 命令            | 作用&效果          |
| --------------- | ------------- |
| npm run build   | 根据`webpack.config.js`，build出一份生产环境的代码 |
| npm run dev     | 根据`webpack.dev.config.js`，build出一份开发环境的代码 |
| npm run watch   | 在`npm run dev`的基础上添加`-- watch`，实时监控源文件，建议开发时使用这项 |
| npm run start   | 开启webpack-dev-server，然后就可以在 http://localhost:8080/ 查看成品了 |
| npm run profile | 显示编译过程中每一项资源的耗时，用来调优的 |
| npm run dll     | 生成Dll文件，每次升级第三方库时都需要重新执行一遍 |

开发时可 同时保持 npm run watch & npm run start 改动后刷新页面即可
