var puzzles=document.getElementById("puzzles");
var puzzleArr=[];
var counter=1;
$("#button").click(function(){

	createPuzzle(4);
});

for (var i = 0; i < puzzleArr.length-1; i++) {
	puzzleArr[i].value=counter;
	counter++;

};

function createPuzzle(puzzles){
	var table=$('<table>');
	$("body").append(table);
	
	for (var i = 0; i <puzzles; i++){
		var tr=$('<tr>');
		$("table").append(tr);
		
		for (var j=0 ; j< puzzles; j++){
			var td=$('<td>');
			
			$("tr:last").append(td);
			puzzleArr.push($("td:last"));

		}
	}
	for (var i = 0; i < 15; i++) {
		$(puzzleArr[i]).html(i+1);
	};
	
}

