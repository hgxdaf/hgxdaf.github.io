var mic, fft;
  
function setup(){
    var cnv = createCanvas(window.innerWidth, window.innerHeight);
    
    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);
    
    frameRate(24);
    background(16);
}
  
function draw(){
    background(16);
  
    var spectrum = fft.analyze();

    noFill();
    stroke(255);

    beginShape();
    for (i = 0; i<spectrum.length; i++) {
        vertex(i * 3.0,  spectrum[i] + height/2);
        vertex(i * 3.0, -spectrum[i] + height/2);
    }
    endShape();
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}