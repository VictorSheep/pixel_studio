pixelStudio.palette={
	COLORS 			: [],
	colorSelected 	: null,
	selectColor 	: function(color){
		this.colorSelected = color;
	},

	initColor: function(table){

		this.COLORS = table;

		let $divColor = $('.color:first').detach(); // clone + remove

		for (var i = 0; i < table.length; i++) {
			table[i].id = i;
			$divColor.css('background-color',table[i].toString());
			$divColor.attr('title',table[i].name);
			$divColor.appendTo('#colorkit');
			$divColor = $('.color:first').clone();
		}
		this.selectColor(table[0]);
		$('#colorkit div').eq(0).addClass('selected');
	},

	initTool: function(table){

		let $divColor = $('.tool:first').detach(); // clone + remove

		for (var i = 0; i < table.length; i++) {
			$divColor.css('background-image',table[i].toString());
			$divColor.appendTo('#toolkit');
			$divColor = $('.tool:first').clone();
		}
	},

	clicColor: function(){
		var self=this;

		$('#colorkit').on('click','div',function(){
			let index = $(this).index();
			let newColor = self.COLORS[index];
			self.selectColor(newColor);

			$('#colorkit div').removeClass('selected');
			$('#colorkit div').eq(index).addClass('selected');

		});
	}
}