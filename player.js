var WIDTH=32,HEIGHT=32;

function Player(x,y){
	this.pos = createVector(x,y);
	
	this.show = function(){
		push();
		noStroke();
		fill(255,0,0);
		rect(this.pos.x,this.pos.y,32,32);
		pop();
	}
	this.move = function(x1,y1){
		this.pos.x+=x1;
		this.pos.y+=y1;
	}
}