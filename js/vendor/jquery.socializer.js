
/** Плагин плавающей панели jquery.socializer.js
 *  http://biznesguide.ru/coding/145.html
 *  Copyright (c) 2011 Шамшур Иван (http://twitter.com/ivanshamshur)
 *  Dual licensed under the MIT and GPL licenses
 */


(function($) {

   $.fn.socializer = function(options) {
	   //Значения по умолчанию
	   options = $.extend({ 
		   
           type: 'sliding',
           
		   position: 'right',
           
           opacity: 1,
           
           container: document,

		   inittop: 150, 
		   
		   scrolltop: 0,
		   
		   speed: 0,
		   
		   hoverdistance: 15,
           
           fx: 'linear',
           
           scrollend: function(){}
		   
		   }, options);
	   
	   
	   return this.each(function(i) {
            
            var self = $(this),
            	isshow = false,
            	opacity = options.opacity,
            	container = $(options.container),  
            	offset = container.offset(),
                height = container.height() + ((offset !== null )? offset.top: 0),
                fx = options.fx || jQuery.easing.def || 'linear';
                mouseover = {},mouseout = {};

            mouseover[options.position] = options.hoverdistance;
            mouseout[options.position] = 0;
            
            options.position = options.position == 'left' ? 'left': 'right';
            
            //Базовые настройки
            self.css({position: 'absolute', top: options.inittop }).css(options.position,0);
            $('a > *',self).css('opacity',options.opacity);
            
            $(window).scroll(function () {
                
                var $this = $(this),
                    top = $this.scrollTop();

                if(!isshow){
                	opacity = top/(height - $this.height());
                    
                    if(opacity < options.opacity) opacity = options.opacity;
                    if(opacity > 1) opacity = 1;
                }
            	

                if(top + options.scrolltop > options.inittop){
                    
                    if(options.type == 'sliding'){
                        
                        self.stop().animate({top: top+options.scrolltop},options.speed,fx);
                    }
                    else{
                        
                        self.css({top: options.scrolltop,position: 'fixed'});
                    }
                }
                else{
                    
                    if(options.type == 'sliding'){
                        
                        self.stop().animate({top: options.inittop},options.speed,fx);
                    }
                    else{
                        
                        self.css({top: options.inittop,position: 'absolute'});
                    }
                }
                
                
                // //Устанавливаем прозрачность картинок
                // if(!isshow){
                	
                // 	if(top >= height*options.opacity){

                //         $('a > *',self).css('opacity',opacity);
                //     }
                //     else{
                        
                //         $('a > *',self).css('opacity',options.opacity);
                //     }
                // }
                
                
                //Выполнение пользовательской функции
                //при прокрутке экрана до конца контейнера
                if(opacity == 1){
                    options.scrollend(self);
                    isshow = true;
                }

            });

            // $('a',self).hover(function(){

            //     $(this).stop()
            //     .animate(mouseover,options.speed)
            //     .find('img')
            //     .css('opacity',1);

            // },
            // function(){
  
            // 	$(this).stop()
            //     .animate(mouseout,options.speed)
            //     .find('img')
            //     .css('opacity',opacity);
                
            // });
           
        
        });

        // setTimeout(socializer(),1000);


   }; 
})(jQuery);