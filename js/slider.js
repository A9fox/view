$(function(){
	var	$up = $('#up'),
		$down = $('#down'),
		$slides  = $('.menu-card');


	var first = 0, last = 4,
		slidesLength = $slides.length;

	$slides.slice(0, 4).addClass('active');

function checkBtn(){
	if(slidesLength == last){
		$down.addClass('hidden');
	} else {
		$down.removeClass('hidden');
	}

	if(first == 0){
		$up.addClass('hidden');
	} else {
		$up.removeClass('hidden');
	}
}

checkBtn();


	function down(){

		if(slidesLength !== last){
			first++;
			last++;

			$slides.slice(first, last).addClass('active');
			$slides.slice(0,first+1).addClass('margin-top-card');
			$slides.slice(0,first).removeClass('active');
		}

		checkBtn();

	}

	function up(){

		if(first !== 0){
			first--;
			last--;

			$slides.slice(first, last).addClass('active');
			$slides.slice(first+1,slidesLength).removeClass('margin-top-card');
			$slides.slice(last,slidesLength).removeClass('active');
		}

		checkBtn();

	}


	$down.on('click', down);
	$up.on('click', up);

});