pixelStudio.palette={
	initColor: function(table){

		let divColor = $('.color:first').detach(); // clone + remove
		console.log(divColor);

		for (var i = 0; i < table.length; i++) {
			divColor.appendTo('#colorkit');
			divColor.css('background-color',table[i].toString());
			divColor = $('.color:first').clone();
		}
	}
}