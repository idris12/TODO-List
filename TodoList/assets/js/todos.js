$("ul").on("click","Li",function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","Span",function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
});

$("input[type='text']").keypress(function(event){
	if(event.which===13){
       var todo=$(this).val();
		$("ul").append("<li> <span><i class='fas fa-trash'></i></span> "+ todo + "</li>");
		$(this).val("");



	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})