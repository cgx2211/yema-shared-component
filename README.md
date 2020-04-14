# yema-shared-component
野马UI组件库
## npm script
```bash
npm start         # 启动组件展示项目
npm run es        # 编译组件 ES Module
npm run lib       # 编译组件 CommonJS
npm run typings   # 编译组件定义文件
npm run build     # 编译组件
npm run up        # 编译并上传组件到本地npm库中
npm run down      # 从本地npm库中下架组件库
```
上传组件库请确保已配置本地/私有npm库
## 目录结构
```bash
--config
--es            # 编译后发布 ES Module
--lib           # 编译后发布 CommonJS
--typings       # 编辑后发布 .d.ts定义文件
--public
--scripts
--src
 |--shared       # 公共组件的代码根目录
   |--yematech   # 公共组件目录（与业务无关的组件）--下级目录建议以功能命名如：Button/Alert/Model/Tag
   |--index.ts  # 批量导出公共组件--新增组件后在这个文件中定义导出
 |--App.tsx     # 测试组件的容器
```
PS：后续公共组件目录会创建与业务相关的组件目录
## 抽取公共组件的原则
* 单一责任
* 可重用
* 灵活

## 一个公共组件需要的内容
1. 公共组件源码
2. .d.ts typescript的定义文件。他可以在使用时给与使用者提示
3. README.md 公共组件的说明文件。可参照 RadioSelect 的README.md文件编写。

## 讨论：什么样的组件可以抽取
当你复制粘贴3次以上的情况下，我觉得这个组件就可以抽取为项目内的公共组件。至于是否存到这个公共组件库中可以商量讨论决定。