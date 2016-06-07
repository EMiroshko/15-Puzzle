var puzzles=$("#puzzles");
var puzzleArr=[];
var counter=1;
$("#button").on('click', function(){
	createPuzzle(4);
});

function createPuzzle(puzzles){
	var table=$('<table>');
	$("body").append(table);	
	for (var i = 0; i <puzzles; i++){		
		var tr=$('<tr data-index='+(i+1)+'>');
		$("table").append(tr);		
		for (var j=0 ; j< puzzles; j++){
			var td=$('<td data-index='+(j+1)+'>');			
			$("tr:last").append(td);
			puzzleArr.push($("td:last"));
		}
	}
	var freePlace=$("td:last");
	for (var i = 0; i < 15; i++) {
		$(puzzleArr[i]).html(i+1);
	};	
	$("td").on('click', function(){
		if ($(this).html()!==""){
			var tdIndex = $(this).attr("data-index");
			var trIndex = $(this).parent().attr("data-index");
			alert(tdIndex+trIndex);
			$(freePlace).html($(this).html());
			$(this).html("");
			freePlace=this; 
		}			  			
  	})	
}
