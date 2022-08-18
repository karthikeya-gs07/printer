function setup() {
    createCanvas(700, 700);
    colorMode(HSB);
  }
  
  function preload(){
    m = createAudio('portal.mp3');
  }
  function mouseMoved() {
    // playing a sound file on a user gesture
    // is equivalent to `userStartAudio()`
  
      m.play(); 
      m.volume(map(mouseX,0,600,0.1,0.9));
    }
  
  function draw() {
    background(220);
    
    //clapSound.play();
    let x1 = 0;
    let y1 = 0;
    let x2 = 0;
    let y2 = 0;
    let x3 = 0;
    let y3 = 0;
    let d = map(mouseX,0,400,3,100);
    let h = height/2;
    let w = width/2;
    
    S1(x1,y1+w,x2,y2,x3,y3,d,w,h);
    S2(x1+w,y1,x2+2*w,y2,x3+2*w,y3,d,w,h);
    S3(x1+2*w,y1+w,x2+w,y2+w,x3+w,y3+w,d,w,h);
    S4(x1+w,y1+2*w,x2,y2+2*w,x3,y3+2*w,d,w,h);
  }
  
  function S1(x1,y1,x2,y2,x3,y3,d,w,h)
  {
  
    for (i = 0; i < d*2; i++) {
      
      r1= random(0,map(mouseY,0,400,0,360));
      r2= random(0,map(mouseY,0,400,0,360));
      r3= random(0,100);
      fill(r1,r2,r3);
      noStroke();
      
      if (x3 < w) {
        triangle(x1, y1, x2, y2, x3 + w/d, y3);
        x2 = x2+(w/d);
        x3 = x3+(w/d);
      } 
      else {
        triangle(x1, y1, x2, y2, x3, y3+w/d);
        y2 = y3 + (w/d);
        y3 = y3 + (w/d);
      }
    }
  }
  
  
  
  function S2(x1,y1,x2,y2,x3,y3,d,w,h)
  {
  
    for (i = 0; i < d*2; i++) {
      
      r1= random(0,map(mouseY,0,400,0,360));
      r2= random(0,map(mouseY,0,400,0,360));
      r3= random(0,100);
      fill(r1,r2,r3);
      noStroke();
      
      if (y3 < w ) {
        triangle(x1, y1, x2, y2, x3, y3+(w/d));
        y2 = y2+(w/d);
        y3 = y3+(w/d);
      } 
      else {
        triangle(x1, y1, x2, y2, x3-(w/d), y3);
        x2 = x3-(w/d);
        x3 = x3-(w/d);
      }
    }
  }
  
  function S3(x1,y1,x2,y2,x3,y3,d,w,h)
  {
  
    for (i = 0; i < d*2; i++) {
      
      r1= random(0,map(mouseY,0,400,0,360));
      r2= random(0,map(mouseY,0,400,0,360));
      r3= random(0,100);
      fill(r1,r2,r3);
      noStroke();
      
      if (y3 <= h*2) {
        triangle(x1, y1, x2, y2, x3, y3+(w/d));
        y2 = y3 + (w/d);
        y3 = y3 + (w/d);
      } 
      
      else {
        triangle(x1, y1, x2, y2, x3+(w/d), y3);
        x2 = x3 + (w/d);
        x3 = x3 + (w/d);
      }
    }
  }
  
  function S4(x1,y1,x2,y2,x3,y3,d,w,h)
  {
  
    for (i = 0; i < d*2; i++) {
      
      r1= random(0,map(mouseY,0,400,0,360));
      r2= random(0,map(mouseY,0,400,0,360));
      r3= random(0,100);
      fill(r1,r2,r3);
      noStroke();
      
      if (y3 > h) {
        triangle(x1, y1, x2, y2, x3, y3-(w/d));
        y2 = y2-(w/d);
        y3 = y3-(w/d);
      } 
      else {
        triangle(x1, y1, x2, y2, x3+(w/d), y3);
        x2 = x3+(w/d);
        x3 = x3+(w/d);
      }
    }
  }
  
  function mousePressed(){
    saveCanvas('image','png');
  }