/*
---
description: SaturdayCarousel - MooTools based zero-config carousel

license: MIT-style

authors:
- Sergio Panagia (http://panaghia.it)

requires:
- Element.Event
- Fx.Tween
- Element.Style
- Element.Dimenstions
- String
- Array

provides: [SaturdayCarousel]

...
*/

var sCarousel = new Class({
        Implements: [Options, Events],
        options: {
        wrapper: 'head_gallery',
        item:'.gallery_item',
        control_point: '.control_point'
        },
        initialize: function(options){
        
        	this.setOptions(options);
        	
        	var gallery = document.id(this.options.wrapper);
			if (gallery)
			{
				var offset = 0;
				var total_items = $$(this.options.item).length;
				var seedWidth = $$(this.options.item).getLast().getSize().x;
				var containerWidth = seedWidth * total_items;
				gallery.setStyle('width', containerWidth);
				
				$$(this.options.item).addEvent('click', function(e)
				{
					//alert(offset+" "+gallery.getScrollSize().x);
					offset+=-420;
					if(- (offset) < gallery.getScrollSize().x)
						gallery.tween('left', offset);
					else
					{
						
						gallery.tween('left', offset = 0);
					}
					
				});
				
				$$(this.options.control_point).each(function(one, i)
				{
					one.addEvent('click', function(e)
					{
						e.preventDefault();
						var n = this.get("item");
						offset = 0 - (n-1) * seedWidth;
						gallery.tween('left', offset);
					});
			
				});
				
			}      
        }
});