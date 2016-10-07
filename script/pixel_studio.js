var pixelStudio = {
	init: function(){
		let COLORS = [
			new Color('noir',0,0,0),
			new Color('blanc',255,255,255),
			new Color('rouge',250,37,37),
			new Color('vert',37,250,37),
			new Color('bleu',37,37,250)
		];

		let TOOLS =[
			new Tool('pinceau','<i class="fa fa-paint-brush" aria-hidden="true"></i>')
		];

		this.palette.initColor(COLORS);
		this.palette.clicColor();

		console.log("init terminé");
	}
}