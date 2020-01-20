#mock-server
Based on express front-end interface service.

#####快速上手

> npm i
> npm run api-server

#####服务配置

> 修改 src/config.js 中的配置
> {
> host: "127.0.0.1", //主机名
> port: 3000 //端口
> }

#####创建接口

> 1.在 api 目录下创建一个脚本文件，控制台会输出你创建文件的路径生成一个接口地址,例如：http://127.0.0.1:3000/test-api；如果你的接口包含层级关系，直接根据你的层级关系在api目录下创建相应的目录即可。
> 2.脚本文件中直接返回一个对象，该对象为：
> //请求方法
> method: "POST", 
> //请求头
> headers: {
>    "content-type": "application/json"
> }, 
> //请求响应数据，如果配置了rewriteFunc方法，该属性将无效
> resData: {
>    name: "Geralt Zhang",
>    age: "保密"
> }
> //请求重写函数,如果你需要mock一些实际的业务逻辑，使用此函数进行模拟。
> rewriteFunc: (req, res) => {} 
> 3.mock-server默认支持restful风格，如果你想创建非restful风格的接口，请在你的脚本中引用response模块，并调用响应的方法，例如：
> const response = require("../response");
> const resData = response(200, resBody, "数据获取成功");