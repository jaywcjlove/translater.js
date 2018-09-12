# translater.js

[![](https://jaywcjlove.github.io/sb/ico/npm.svg)](https://www.npmjs.com/package/translater.js) [![](http://jaywcjlove.github.io/sb/status/no-dependencies.svg)](#) [![](http://jaywcjlove.github.io/sb/status/stable.svg)](#) [![](https://jaywcjlove.github.io/sb/license/mit.svg)](#) [![jaywcjlove/sb](https://jaywcjlove.github.io/sb/lang/chinese.svg)](https://jaywcjlove.github.io/translater.js/?lang=cn) [![jaywcjlove/sb](https://jaywcjlove.github.io/sb/lang/english.svg)](https://jaywcjlove.github.io/translater.js/?lang=en) [![CDNJS version](https://img.shields.io/cdnjs/v/translater.js.svg)](https://cdnjs.com/libraries/translater.js)

♣︎ This is a use of HTML comments page translation solution. For a small amount of static pages, this solution is more simple. it has no dependents, Compression only (~2KB) Official document [demo preview](http://jaywcjlove.github.io/translater.js/).

- Support `IMG``text` switching
- Support `URL` parameter switching language
- Support local cache selection

![translater.js 动画效果](translater.js.gif)

## Usage

```bash
$ npm install translater.js
```

```
import 'translater.js';
```

Or manually download and link **[translater.js](https://unpkg.com/translater.js/dist/)** in your HTML, It can also be downloaded via [UNPKG](https://unpkg.com/translater.js/dist/):

```html
<div>
  这里是中文
  <!--{jp}ここは日本語です-->
  <!--{en}Here is English-->
</div>
<script src="https://unpkg.com/translater.js/dist/translater.js" type="text/javascript"></script>
<script type="text/javascript">
var tran = new Translater({
  lang:"jp"
});
</script>
```

The method of switching languages via hyperlinks.

```html
<a href="javascript:tran.setLang('default');">English</a>
<a href="javascript:tran.setLang('jp');">日本語</a>
<a href="javascript:tran.setLang('cn');">中文</a>
```

You can set the language parameter passed through URL.

```url
http://127.0.0.1:9005/test/test.html?lang=jp
```

## API

**Adding text translation**

```html
<div>
  这里是中文
  <!--{jp}ここは日本語です-->
  <!--{en}Here is English-->
</div>
```

**Picture switch**

```html
<img 
  alt="image" 
  alt-cn="图片" 
  alt-jp="画像" 

  title="image2" 
  title-cn="图片2" 
  title-jp="画像2" 

  src="../img/imgae.jpg" 
  data-lang-cn="../img/imgae_cn.jpg" 
  data-lang-jp="../img/imgae_jp.jpg"
/>
```

**Input**

```html
<input type="text" placeholder="like this?"  placeholder-cn="像这样？"  />
<input type="button" value="button" value-cn="按钮" value-jp="按钮日本"  />
```

**getLang/setLang**

Get or set the current languge.

```html
<script type="text/javascript">
  var tran = new Translater();
  if (tran.getLang() === "default") tran.setLang('en');
</script>
```

