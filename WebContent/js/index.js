liclick = function(){
	var menu = $('#Header').html();
	
	alert(menu);
	$('#content').html(menu);
	$('#content').slideup(200, function(){
			       alert('content is slided up.')
})
	
}




$('li').click(liclick)
$('#content').click(liclick)