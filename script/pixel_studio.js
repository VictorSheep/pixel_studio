var pixelStudio = {
	init: function(){
		let COLORS = [
			new Color('noir',0,0,0),
			new Color('blanc',255,255,255),
			new Color('rouge',250,37,37),
			new Color('vert',37,250,37),
			new Color('bleu',37,37,250)
		];
		this.palette.initColor(COLORS);

		console.log("init terminer");
	}
}