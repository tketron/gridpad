$(document).ready(function() {
	var nsquares = 16;
	var $container = $('#container');
	//get css for container div
	var containerWidth = $($container).width();
	var containerHeight = $($container).height();
	//set css for grid-square
	var gridSquareWidth = containerWidth / nsquares;
	var gridSquareHeight = containerHeight / nsquares;
	for (n=0; n<(nsquares*nsquares); n++) {
		$($container).append('<div class="grid-square"></div>');
	};
	$($container).find('div').height(gridSquareHeight);
	$($container).find('div').width(gridSquareWidth);

	//grid hover effect
	$(".grid-square").mouseenter(function() {
		$(this).css("background-color", "#"+Math.floor(Math.random()*16777215).toString(16));
	});
});