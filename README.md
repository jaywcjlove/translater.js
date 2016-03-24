# translater.js

[![](https://jaywcjlove.github.io/sb/ico/npm.svg)](https://www.npmjs.com/package/translater.js) [![](http://jaywcjlove.github.io/sb/ico/gulp-build-with.svg)](#) [![](http://jaywcjlove.github.io/sb/status/no-dependencies.svg)](#) [![](http://jaywcjlove.github.io/sb/status/stable.svg)](#) [![](https://jaywcjlove.github.io/sb/license/mit.svg)](#)

这是一个利用HTML注释的页面翻译解决方案。对于少量的静态页面，这种解决方案显得更简单。它没有依赖，压缩只有只有(~2kb)。

# 传统使用方法

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
