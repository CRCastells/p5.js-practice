let circ;


function setup() {
	 var cnv = createCanvas(600, 600);

	circ = createSprite(width/2, 500, 40, 80);
	circ.shapeColor = color(0);
	cnv.mouseClicked(fire);

}
var x = 0;
var y = 0;
function draw() {
  	background(255);
  	drawSprites();
 
}

function mouseClicked() {
	
}




function fire(){
	x = mouseX;
	y = mouseY;
	var projectile = createSprite(width/2,500,40,40);
	projectile.velocity.y = (y-(width/2))/100;
	projectile.velocity.x = (x-(height/2))/100;
}

