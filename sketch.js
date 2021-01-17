var time = {hour: undefined, minute: undefined, second: undefined, millisecond: undefined};
var angle = {min: undefined, hr: undefined, sec: undefined, ms: undefined};

function setup() {
	createCanvas(800, 800);

	angleMode(DEGREES);
}

function draw() {
	var d = new Date();
	background(0, 0, 0);

	translate(400, 400);
	rotate(-90);

	time.hour = hour() % 12;
	time.minute = minute();
	time.second = second();
	time.millisecond = d.getMilliseconds();

	angle.hr = map(time.hour, 0, 24, 0, 360);
	angle.min = map(time.minute, 0, 60, 0, 360);
	angle.sec = map(time.second, 0, 60, 0, 360);
	angle.ms = map(time.millisecond, 0, 1000, 0, 360);

	push();
	rotate(angle.hr);
	stroke(0, 0, 255);
	strokeWeight(7);
	line(0, 0, 100, 0);
	rotate(-angle.hr);
	noFill();
	arc(0, 0, 400, 400, 0, angle.hr);
	pop();

	push();
	rotate(angle.min);
	stroke(0, 255, 0);
	strokeWeight(7);
	line(0, 0, 100, 0);
	rotate(-angle.min);
	noFill();
	arc(0, 0, 383, 383, 0, angle.min);
	pop();

	push();
	rotate(angle.sec);
	stroke(255, 0, 0);
	strokeWeight(7);
	line(0, 0, 100, 0);
	rotate(-angle.sec);
	noFill();
	arc(0, 0, 366, 366, 0, angle.sec);
	pop();

	push();
	rotate(angle.ms);
	stroke(255, 255, 0);
	strokeWeight(7);
	line(0, 0, 100, 0);
	rotate(-angle.ms);
	noFill();
	arc(0, 0, 349, 349, 0, angle.ms);
	pop();
}
