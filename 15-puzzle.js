var puzzles=$("#puzzles");
var puzzleArr=[];
$("#button").on('click', function(){
	createPuzzle(4);
	$("#button").attr("disabled");
});

function createPuzzle(puzzles){
	var table=$('<div class="puzzleTable">');
	$("body").append(table);	
	for (var i = 0; i <puzzles; i++){		
		var tr=$('<div class="puzzleTr" data-index='+(i+1)+'>');
		$(".puzzleTable").append(tr);		
		for (var j=0 ; j< puzzles; j++){
			var td=$('<div class="puzzleTd" data-index='+(j+1)+'>');			
			$(".puzzleTr:last").append(td);
			puzzleArr.push($(".puzzleTd:last"));
		}
	}
	var freePlace=$(".puzzleTd:last");
	for (var i = 0; i < 15; i++) {
		$(puzzleArr[i]).html(i+1);
	};	
	$(".puzzleTd").on('click', function(){
		var tdIndex = $(this).attr("data-index"),
			trIndex = $(this).parent().attr("data-index"),
			tdFreePlace = $(freePlace).attr("data-index"),
			trFreePlace = $(freePlace).parent().attr("data-index");
		if ($(this).html()!=="" && 
		Math.abs(tdIndex - tdFreePlace) <= 1 && 
		Math.abs(trIndex - trFreePlace) <= 1 && 
		!(Math.abs(trIndex - trFreePlace) == 1 && Math.abs(tdIndex - tdFreePlace) == 1)){			
			$(freePlace).html($(this).html());
			$(this).html("");
			freePlace=this;			 
		}			  			
  	})	
}
