function setup() {
  createCanvas(512, 424);
	noStroke();
  textAlign( CENTER );
  text( "clic here", width/2, height/2 );
}

function draw() {
	if (mouseIsPressed) {
  	for( var x=0; x<width; x+=2) {
			for (var y=0; y<height; y+=2) {
				var r = floor( random(8) ) * 32;
				var g = floor( random(8) ) * 32;
				var b = floor( random(4) ) * 64;
				fill( r, g, b );
				rect( x,y,2,2 );
				// set( x, y, color(random(255),random(255),random(255)) );
				// set( x,y,color(0) );
			}
		}
		// updatePixels();
	}
}	