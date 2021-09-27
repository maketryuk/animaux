# Aurore Slider

This jQuery module builds up a text slider with support for touch on mobile with a simple HTML markup. The mobile events get triggered in devices with width equal or smaller than 768px
 
## Quick start

1\.  Add CSS file in head tag

```html
	<link rel="stylesheet" href="auroreslider/auroreslider.css">
```


2\.  Add JS file before the closing body tag

```html
	<script src="auroreslider/auroreslider.js"></script>
```


2\.  The only required structure for Aurore Slider to work is a container div and the sliders directly inside of it.

```html
<div id="textslider">
  <div>Slide 1</div>
  <div>Slide 2</div>
  <div>Slide 3</div>
  ...
  <div>Slide n</div>
</div>
```


3\. Just call the module!

```html
<script>
		window.onload = function(){
			auroreSlider('#textslider');
		};
	</script>
```