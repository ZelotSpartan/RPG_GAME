//GameStateManager
var WIDTH=640, HEIGHT=480;
var player;
function setup() {
  createCanvas(640,480);
		player = new Player(0,0);
}

function draw() {
  background(51);
  player.show();
  
  push();
  noStroke();
		fill(255,255,0,150);
  rect(int(mouseX/32)*32,int(mouseY/32)*32,32,2);
  rect(int(mouseX/32)*32,int(mouseY/32)*32,2,32);
  rect(int(mouseX/32)*32+32,int(mouseY/32)*32+32,-32,-2);
  rect(int(mouseX/32)*32+32,int(mouseY/32)*32+32,-2,-32);
  pop();
}

function keyPressed(){
	if(key=="W"){
		player.move(0,-32);
	}
	if(key=="S"){
		player.move(0,32);
	}
	if(key=="D"){
		player.move(32,0);
	}
	if(key=="A"){
		player.move(-32,0);
	}
}