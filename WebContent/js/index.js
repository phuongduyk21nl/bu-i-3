liclick = function(){
	var menu = $('#Header').html();
	alert(menu);
	
	$('#content').html(menu);
	$('#content').show();
	
	$('#content').slideUp(2000, function(){
			       alert('content is slided up.')
})
	
}




$('li').click(liclick)
$('#content').click(liclick)