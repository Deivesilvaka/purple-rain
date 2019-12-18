
var gotas = function() {

	this.x = Math.floor(Math.random() * 601);
	this.y = -Math.floor(Math.random() * 401);
	this.velocidade = 0;
	this.gravidade = Math.random() + 0.1;
	this.largura = 2;
	this.altura = 14;

	this.draw = function() {
		ctx.fillStyle = "purple";
		ctx.fillRect(this.x, this.y, this.largura, this.altura);
	}

	this.update = function() {
		this.velocidade += this.gravidade;
		this.y += this.velocidade;

		if(this.y > cnv.height) {
			this.y = -Math.floor(Math.random() * 401);
			this.velocidade = 0;
			this.gravidade = Math.random() + 0.1;

		}
	}
}