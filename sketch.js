time = 0;
x = 375;
y = 250;

vx = 0;
vy = 0;

vspeed = 75;

dt = 0.1;

blob_radius = 25;

xpaddle = 375;
ypaddle = 10;


xpaddle2 = 375;
ypaddle2 = 490;

paddle_width = 150;

function draw(){
  
  time += 1;
  
    // Update location
    x += vx*dt;
    y += vy*dt;

/*
    if ( y + blob_radius > height ) {  // top game over
      vx = vx;
      vy = -vy;
    }  
*/

  	if ( (x - blob_radius < 0) | (x + blob_radius > width) ) {  // sides
       vx = -vx;
       vy = vy;
    }

    if ( (y - blob_radius < ypaddle) & (abs(x - xpaddle) < paddle_width/2)) {
      vx = vx; 
      vy = -vy;
    }
    
    if ( (y + blob_radius > ypaddle2) & (abs(x - xpaddle2) < paddle_width/2)) {
      vx = vx; 
      vy = -vy;
    }

    // Move the paddle
    if (keyIsDown(LEFT_ARROW)) {
       xpaddle += -10;
    }
    if (keyIsDown(RIGHT_ARROW)) {
       xpaddle += 10;
    }
    if (keyIsDown(65) | (keyIsDown(81))) {
       xpaddle2 += -10;
    }
    if (keyIsDown(68) | (keyIsDown(69))) {
       xpaddle2 += 10;
    }
  
    display();
  
  fill(255,100,100)
  drawText('Red: Use A & D keys or Q & E keys to move the top pong paddle',0.05*width,height/1.79);
  
    fill(100,100,255)
  drawText('Blue: Use the left and right arrow keys to move the bottom pong paddle',0.05*width,height/2.25);

    if (y-blob_radius < 0) {
     fill(255,0,0);
     drawText('Red won in ' + time/60 + ' seconds!',0.05*width,height/2); 
     noLoop();
    }
    
    if (y-blob_radius > 500) {
     fill(0,0,255);
     drawText('Blue won in ' + time/60 + ' seconds!',0.05*width,height/2); 
     noLoop();
    }
    
/*  fill(100,0,255);
  drawText('Time Elapsed:' + time/60 + ' seconds', 0.05*width, height/1.65);
  
    fill(100,0,255);
  drawText('Time Elapsed:' + time/60/60 + ' minutes', 0.05*width, height/2.55);
*/  

// ^^^^ displays seconds and minutes passed.

    for( i = 0; i < xhistory.length ; i+= 1) {
     drawPoint(xhistory[i],yhistory[i]); 
    }
    drawBlob(x,y,vx,vy,blob_radius);
    stroke(0,0,255)
    drawLine(xpaddle-paddle_width/2,ypaddle,xpaddle+paddle_width/2,ypaddle);
    stroke(255,0,0)  
    drawLine(xpaddle2-paddle_width/2,ypaddle2,xpaddle2+paddle_width/2,ypaddle2);

}