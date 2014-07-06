$(function(){
	//alert($('body').width());		
	responsive();		
	$(window).resize(function() {
	  responsive();
	}); 	
	if($.browser.msie) { 
		if($.browser.msie&&($.browser.version == "6.0")&&!$.support.style){
			$('html').addClass('ie6');
		} 
		if($.browser.msie&&($.browser.version == "7.0")&&!$.support.style){
			$('html').addClass('ie7');
		} 
		if($.browser.msie&&($.browser.version == "8.0")&&!$.support.style){
			$('html').addClass('ie8');
		}
	}
	else if($.browser.safari)
	{
		$('html').addClass('safari');
	}
	else if($.browser.mozilla)
	{
		$('html').addClass('firefox');
	}
	else if($.browser.opera) {
		$('html').addClass('opera');
	}
	else {
		//alert("i don't konw!");
	}  
})

function responsive(){
			if($('body').width()>1250 && $('body').width() < 1440){
		//$('<link rel="stylesheet" href="assets/css/screen/1200.css" />').appendTo('head').fadeIn();
		$('html').removeClass('desktop flatbed phone hd');
			$('html').addClass('hd');
		}
		else if($('body').width()>980 && $('body').width() < 1300){
			$('html').removeClass('desktop flatbed phone hd');
			$('html').addClass('desktop');
		}
		else if($('body').width()>=768 && $('body').width() < 960){
			$('html').removeClass('desktop flatbed phone hd');
			$('html').addClass('flatbed');
		}
		else if($('body').width()<768){
			$('html').removeClass('desktop flatbed phone hd');
			$('html').addClass('phone');
		}
	}
	
	/*ie6 浏览器更新提醒*/
	$(function(){
		if($.browser.msie&&($.browser.version == "6.0")&&!$.support.style){
			$('<div class="kq-spring"><div class="kq-wrapper">亲~您还在使用十几年前的浏览器IE6，享受更棒的冲浪体验建议您更新 <a href="http://se.360.cn" target="_blank">360安全浏览器</a></div><del>×</del></div>').prependTo('body').fadeIn();	
		}		   
	})