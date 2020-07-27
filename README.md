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

1. 将 myTheme.js 放入至 pyecharts-assets/assets/themes 文件夹。
2. 注册主题到 pyecharts
````python
 from pyecharts.datasets import register_files
 register_files({"myTheme": ["themes/myTheme", "js"]})
````
3. 使用主题
````python
 c = Bar(init_opts=opts.InitOpts(theme="myTheme"))
````
