# translater.js

[![](http://jslite.io/sb/ico/npm.svg)](https://www.npmjs.com/package/translater.js) [![](http://jslite.io/sb/ico/gulp.svg)](#) [![](http://jslite.io/sb/license/mit.svg)](#) 

这是一个利用HTML注释的翻译页面解决方案。如果放到后端那是最佳解决方案，对于少量的静态页面，这种解决方案显得更简单。

如此简单：

```html
<div>
    这里是中文
    <!--{jp}ここは日本語です-->
    <!--{en}Here is English-->
</div>
<script src="../dist/translater.min.js" type="text/javascript"></script>
<script type="text/javascript">
var tran = new Translater({
    lang:"jp"
});
</script>
```

切换语言方法通过超链接

# 作为模块安装

```bash
$ npm install translater.js
```
