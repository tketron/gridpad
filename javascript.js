$(document).ready(function() {
	var nsquares = 32;
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

	$("button").click(function(event) {
		event.preventDefault();
		nsquares = $("#text-input").val();
		//clear all divs
		$(".grid-square").remove();

		gridSquareWidth = containerWidth / nsquares;
		gridSquareHeight = containerHeight / nsquares;
		for (n=0; n<(nsquares*nsquares); n++) {
			$($container).append('<div class="grid-square"></div>');
		};
		$($container).find('div').height(gridSquareHeight);
		$($container).find('div').width(gridSquareWidth);
	});

	//grid hover effect
	$("#container").on("mouseenter", ".grid-square",function() {
		event.stopPropagation();
		$(this).css("opacity", 1);
		$(this).css("background-color", "#"+Math.floor(Math.random()*16777215).toString(16));
	});
	/*$(".grid-square").mouseleave(function() {
		$(this).fadeTo(1000, 0);
	});*/
});