<h1>mock-server</h1>
<p>Based on express front-end interface service.</p>

<h3>快速上手</h3>

> npm i
> npm run api-server

<h3>服务配置</h3>

> 修改 src/config.js 中的配置
> {
> host: "127.0.0.1", //主机名
> port: 3000 //端口
> }

<h3>创建接口</h3>

> <p>1.在 api 目录下创建一个脚本文件，控制台会输出你创建文件的路径生成一个接口地址,例如：http://127.0.0.1:3000/test-api；如果你的接口包含层级关系，直接根据你的层级关系在api目录下创建相应的目录即可。</p>
> <p>2.脚本文件中直接返回一个对象，该对象为：</p>
> <p>//请求方法</p>
> <p>method: "POST", </p>
> <p>//请求头</p>
> <p>headers: {</p>
>    <p>"content-type": "application/json"</p>
> <p>}, </p>
> <p>//请求响应数据，如果配置了rewriteFunc方法，该属性将无效</p>
> <p>resData: {</p>
>    <p>name: "Geralt Zhang",</p>
>    <p>age: "保密"</p>
> <p>}</p>
> <p>//请求重写函数,如果你需要mock一些实际的业务逻辑，使用此函数进行模拟。</p>
> <p>rewriteFunc: (req, res) => {} </p>
> <p>3.mock-server默认支持restful风格，如果你想创建非restful风格的接口，请在你的脚本中引用response模块，并调用响应的方法，例如：</p>
> <p>const response = require("../response");</p>
> <p>const resData = response(200, resBody, "数据获取成功");</p>

<h3>nodemon.json</h3>

> <p>1.nodemon为node服务的自动重启工具，根目录nodemon.json为这个工具的配置文件</p>
> <p>//nodemon忽略的目录</p>
> <p>"ignore": [</p>
>    <p>".git",</p>
>    <p>".svn",</p>
>    <p>"node_modules/**/node_modules"</p>
> <p>]</p>
> <p>//nodemon监听的目录</p>
> <p>watch: [</p>
>    <p>"src"</p>
> <p>]</p>
> <p>//监听文件后缀名，用空格隔开</p>
> <p>"ext": "js json"</p>