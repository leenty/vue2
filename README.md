# vue2.0-demo
捣鼓捣鼓vue2.0
使用 Material 风格
后面会加入大量微动效

# 安装
克隆仓库到本地
```
git clone git@github.com:leenty/vue2.git
```
安装依赖
```
npm i
```
生成文章路径
```
npm run article -- -m
```
生成文章
```
npm run article -- -n 'demo'
```
在文章生成后，运行以下代码以生成文章路由
```
npm run article -- -m
```

# 新建文章及路由生成
```
   Usage: npm run article -- [[-m] | [-n 'fileName'] | [-r] | [-h]]
   or: node build/new-article.js [[-n 'fileName'] | [-r] | [-h]]

   -m, --mkdir           |  mkDir          初始化文章目录
   -n, --new 'fileName'  |  new article    新建文章
   -r, --render          |  render router  渲染路由
   -h, --help            |  help           帮助
```

# 当前css规则
```
css命名使用 BEM+emmet 风格作为命名规范

约定[分类名称|模块名称][属性|组件名称]与[属性名]使用小写
约定[描述]与[状态]使用首字母大写
[eg]:
 .[分类名称|模块名称]__[子分类|子模块]-[属性|组件名称][描述]--[属性值|状态]
   => .l-flexV--c
   => .b-base--Active
   => .fg-offset-12
   => .fg__pad-offset-12

 1.约定 [分类名称|模块名称] 缩写:
   • .layout => .l- (布局部分)
   • .utils => .u- (工具部分)
   • .button => .b- (按钮部分)
   
 2.约定通用 [属性] 缩写:(以emmet联想风格为缩写)
   • width => w
   • height => h
   • color => c
   • background => bg
   • margin => m
   • padding => p
   • border => bd
   
 3.约定通用 [组件名称]:(这里不使用缩写，
   因为组件名可以自定义，缩写易混淆，会增加记忆成本)
   • flex => flex (这里所指的是弹性盒子)
   
 4.约定通用 [描述] 缩写:(以大写)
   • horizontal => H
   • vertical => V
   • normal => N
   
 5.约定通用 [属性值] 缩写:(以属性前缀 '--' + emmet联想风格为缩写)
   • center => --c
   • middle => --m
   • space-around => --sa
   
 6.约定通用 [状态] 缩写:(以属性前缀 '--' + 状态首字母大写，
   这里不使用缩写，因为状态名可以自定义，缩写易混淆，会增加记忆成本)
   • active => --Active
```