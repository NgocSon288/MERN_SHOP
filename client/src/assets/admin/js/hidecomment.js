import $ from 'jquery'
$(document).ready(() => {
	$(".opstion button").click(function(){
		var text = $(this).text().split(" - ");
		$(".opstion button").each(function(){ 
			$(this).removeClass("btnClick"); 
		}) 
		$(this).addClass("btnClick");
		
		$("#ops-text").text(text[0]);
		$("#span-gia").text(text[1]);
		$("#del-gia").text($(this).attr("data-del"));

	})
}) 
