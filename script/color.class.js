class Color{
	constructor(name, red,green,blue){
		this.name	=name;
		this.color 	={r:red,g:green,b:blue};
		this.id 	= null
	}
	toString(){
		let rgb = 'rgb(';
		rgb+= this.color.r+',';
		rgb+= this.color.g+',';
		rgb+= this.color.b+')';
		return(rgb);
	}
}
