$(document).ready(function(){
  console.log("pozvao");
	$("#logo").animate({'opacity':'0.9'}, 1200);
	$("#navigacija").animate({'opacity':'0.9'}, 1800);


    $(window).scroll( function(){
	    $('.ZastoPYBIkonica').each( function(i){
	        var donjaGranica = $(this).offset().top + $(this).outerHeight();
	        var krajProzora = $(window).scrollTop() + $(window).height();
	        if(krajProzora*1.1 > donjaGranica){ 
	            $(this).animate({'opacity':'1'}, 750);       
	        } 
	    });
	    $('.gdjeZeliteIciIkonica').each( function(i){
	        var donjaGranica = $(this).offset().top + $(this).outerHeight();
	        var krajProzora = $(window).scrollTop() + $(window).height();
	        if(krajProzora*1.1 > donjaGranica){ 
	            $(this).animate({'opacity':'1'}, 500);       
	        } 
	    });
	    $('.kartica').each( function(i){
	        var donjaGranica = $(this).offset().top + $(this).outerHeight();
	        var krajProzora = $(window).scrollTop() + $(window).height();
	        if(krajProzora*1.2 > donjaGranica){ 
	            $(this).animate({'opacity':'1'}, 500);       
	        } 
	    });
	});
});


function otvoriModal(modalID){
	$("#"+modalID).modal();
}