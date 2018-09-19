$(document).ready(function(){
	console.log("pozvao");
	$(".slikaDestinacija").mouseenter(function(){
		var pom = this.id;
		$("#ZS" + pom).animate({'opacity':'1'}, 500);
		$("#PS" + pom).animate({'opacity':'0'}, 500);
	
	});
	$(".slikaDestinacija").mouseleave(function(){
		var pom = this.id;
		$("#ZS" + pom).animate({'opacity':'0'}, 300);
		$("#PS" + pom).animate({'opacity':'1'}, 500);
	});
});
