let body = document.getElementById("body");

function huetorgb(m1, m2, h) {
       if( h < 0 ) h = h + 1;
  else if( h > 1 ) h = h - 1;

       if( h*6 < 1 ) return m1+(m2-m1)*h*6;
  else if( h*2 < 1 ) return m2;
  else if( h*3 < 2 ) return m1+(m2-m1)*(2/3-h)*6;
  else               return m1;
}
function hsltorgb(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;
  var m2 = (l <= 0.5) ? l*(s+1) : l+s-(l*s),
    m1 = l*2-m2,
    r = parseInt(huetorgb(m1, m2, h+1/3)*255),
    g = parseInt(huetorgb(m1, m2, h)*255),
    b = parseInt(huetorgb(m1, m2, h-1/3)*255);
  return [r, g, b];
}
function setup() {
    var cv = createCanvas(body.offsetWidth - 64, body.offsetHeight - 64);
	cv.parent("body");
}
function draw() {
	background(241);
	
	questionMarker(534, 0);
}
function windowResized() {
    resizeCanvas(body.offsetWidth - 64, body.offsetHeight - 64);
}
function questionMarker(top, sign) {
	
	let _textSize = 40;
	
	let left = _textSize/2 + _textSize*0.1;
	
	noFill();
	
	if (sign < 0) { stroke(150, 0,0 ); }
	else if (sign > 0) { stroke(0, 150, 0); }
	else { stroke(16); }
	
	strokeWeight(_textSize/8);
	ellipse(left, top, _textSize, _textSize);
	strokeWeight(_textSize/12);
	if (sign < 0) { stroke(200, 0,0 ); }
	else if (sign > 0) { stroke(0, 200, 0); }
	else { stroke(32); }
	ellipse(left, top, _textSize, _textSize);
	
	if (sign < 0) { fill(200, 0,0 ); }
	else if (sign > 0) { fill(0, 200, 0); }
	else { fill(32); }
	textSize(_textSize*0.8);
	noStroke();
	textAlign(CENTER);
	
	let str = "?"
	if (sign < 0) { str = "X" }
	else if (sign > 0) { str = "V" }
	
	text(str, left, top + _textSize*0.3);
}
/*
{ // draw background
	let t = millis() / 10000;
	let startHueRange = 170;
	let endHueRange = 260;
	let range = endHueRange - startHueRange
	let hue = sin(t) * (range/2) + startHueRange + range/2;
	let endOffset = 80;
	let endHue = sin(t + endOffset) * (range/2) + startHueRange + range/2;
	
	console.log(hue);
	
	let rgb = hsltorgb(hue, 100, 95);
	
	let rFrom = rgb[0];
	let gFrom = rgb[1];
	let bFrom = rgb[2];

	let rgbTo = hsltorgb(endHue, 100, 90);
	
	let rTo = rgbTo[0];
	let gTo = rgbTo[1];
	let bTo = rgbTo[2];
	
	let size = 16;
	
	let n = floor(height/size);
	for (let i = 0; i < n; i++) {
		
		let r = rFrom - (rFrom - rTo) / n * i;
		let g = gFrom - (gFrom - gTo) / n * i;
		let b = bFrom - (bFrom - bTo) / n * i;
		
		fill(r, g, b);
		
		rect(0, i * size, width, size);
	}
	}
	
*/