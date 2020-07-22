var pos;
var prev;
var vel;
function setup() {
	createCanvas(400, 400);
	background(51);
	pos = createVector(200,200);
	prev = pos.copy();
}

function draw() {
	//background(51);
	stroke(0,0,255);
	strokeWeight(2);
	//point(pos.x, pos.y);
	line(pos.x, pos.y, prev.x, prev.y);
	prev.set(pos);
	vel = p5.Vector.random2D();

	var r = random(100);
	if(r < 1) //there's a 1% chance it will make a jump. The jump will be between 1 and 100 pixels.
	{
		vel.mult(random(1,100));
	}
	pos.add(vel);

}
