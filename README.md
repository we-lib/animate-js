# animate-js

Easy js port for [animate.css](https://github.com/daneden/animate.css)

## Usage

```html
<link rel="stylesheet" href="animate.css">
<script src="animate.js"></script>
<div id="box"></div>
```

```js
var $box = $('#box')
$box.animateCss('bounceIn', function(){
  $box.animateCss('zoomOutDown')
})
```