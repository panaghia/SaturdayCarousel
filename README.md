SaturdayCarousel
===========

Provides a class for setting-up an easy, convention over configuration, product slideshow.

How to use
----------
<div id="showcase">
	<div id="head_gallery">
	<!-- gallery items -->
		<div class="gallery_item">
			<h1>Sample Text Here!</h1>
		</div>
		<div class="gallery_item">
			<a href="http://panaghia.it" title="mootools category">
			<img src="http://panaghia.it/showcase/mootools_showcase.png" />
			</a>
		</div>
	</div>
	<!-- switch controls --> 
	<div id="control">
		<span class="control_point control_active" item="1">
		</span>
	   	<span class="control_point" item = "2">
	   	</span>
	</div>
</div>

window.addEvent('domready', function()
{
   var saturday = new SaturdayCarousel(); 
});