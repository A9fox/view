$(function() {

	function open(){
		$('#popup').show();
	}

	function close(){
		$('#popup').hide();
	}

	$(".btn-action").on('click', open);
	$(".btn-close").on('click', close);
})