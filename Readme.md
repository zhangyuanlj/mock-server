<h1>mini-mock-server</h1>

> Based on express front-end interface service.

<h3>快速上手</h3>

- npm i mini-mock-server
- nodemon mini-mock-server/src/server.js
- 新建mock目录，添加配置文件config.js、api目录，静态资源目录名称可以自定义，自定义后配置static属性

<h3>创建服务配置</h3>

- 修改 src/config.js 中的配置
- host: "127.0.0.1", //主机名
- port: 3000 //端口
- static: "static" //静态资源目录

<h3>创建接口</h3>

- 1.在api目录中，新建一个脚本文件，控制台会输出你创建文件的路径生成一个接口地址,例如：http://127.0.0.1:3000/test-api；
- 2.如果你的接口包含层级关系，直接根据你的层级关系在api目录下创建相应的目录即可。
- 3.脚本文件中直接返回一个对象，该对象为：
  - method: "POST", //请求方法
  - headers: {}, //请求头
  - resData: {} //请求响应数据，如果配置了rewriteFunc方法，该属性将无效
  - rewriteFunc: (req, res) => {} //请求重写函数,如果你需要mock一些实际的业务逻辑，使用此函数进行模拟。
- 4.mini-mock-server默认支持restful风格