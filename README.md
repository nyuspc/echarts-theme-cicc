# echarts-theme-cicc
An echarts theme follow CICC template

## Use in js

1. 下载或复制以下的主题保存至 *.json 文件；
2. 读取该 JSON 文件，并使用 obj = JSON.parse(data) 将其转换成对象；
3. 调用 echarts.registerTheme('cicc-color', obj) 注册主题；
4. 使用 echarts.init(dom, 'cicc-color') 创建图表，第二个参数即为刚才注册的主题名字。

or

1. 下载或复制以下的主题保存至 *.js 文件；
2. 将该文件在 HTML 中引用；
3. 使用 echarts.init(dom, 'cicc-color') 创建图表，第二个参数即为 *.js 文件中注册的主题名字。

## Use in python (pyecharts)

1. 将 cicc-color.js 放入至 pyecharts-assets/assets/themes 文件夹。
2. 注册主题到 pyecharts
````python
 from pyecharts.datasets import register_files
 register_files({"cicc-color": ["themes/cicc-color", "js"]})
````
3. 使用主题
````python
 c = Bar(init_opts=opts.InitOpts(theme="cicc-color"))
````

## Use in Jupyter Notebook

pyecharts v1.5.1+ 起开始支持 Notebook 插件作为静态资源服务。

1. 获取 pyecharts-assets 项目
````shell
 $ git clone https://github.com/pyecharts/pyecharts-assets.git
````

2. 安装扩展插件

````shell
 $ cd pyecharts-assets
 # 安装并激活插件
 $ jupyter nbextension install assets
 $ jupyter nbextension enable assets/main
````
3. 配置 pyecharts 全局 HOST

````python
 # 只需要在顶部声明 CurrentConfig.ONLINE_HOST 即可
 from pyecharts.globals import CurrentConfig, OnlineHostType

 # OnlineHostType.NOTEBOOK_HOST 默认值为 http://localhost:8888/nbextensions/assets/
 CurrentConfig.ONLINE_HOST = OnlineHostType.NOTEBOOK_HOST

 # 接下来所有图形的静态资源文件都会来自刚启动的服务器
 from pyecharts.charts import Bar
 bar = Bar()
````

4. 注册主题到 pyecharts
````python
 from pyecharts.datasets import register_files
 register_files({"cicc-color": ["themes/cicc-color", "js"]})
````
5. 使用主题
````python
 c = Bar(init_opts=opts.InitOpts(theme="cicc-color"))
````
