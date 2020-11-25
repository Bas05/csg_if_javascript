function setup() {
  canvas = createCanvas(450,450);
  background('cornflowerblue');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  noStroke();
  fill('wheat');
  rect(0,350,450,100);
  
  strokeWeight(4);
  stroke('darkgrey');
  fill('lightgray');
  rect(100,280,100,100);
  fill('gray');
  
  fill('gray');
  triangle(150,180,100,280,200,280)
  rect(100,0,0,0)
  

  strokeWeight(1);
  stroke('darkgrey');
  fill('darkgrey');
  noStroke();
  rect(120,330,30,50);
  
  fill('khaki');
  ellipse(350,100,150)
 
  // teken de boom
  fill('sienna');
  rect(300,250,40,130);
  fill('olive');
  ellipse(320,180,100,200)
  // VERVANG DEZE REGEL door een regel die het groen van de boom tekent met behulp van ellipse
  // Als je een cirkel wilt tekenen met diameter 300 kun je ellipse(0,0,300) gebruiken.
  // Als je een ellipse wilt maken met breedte 300 en hoogte 500, dan moet je een parameter toevoegen: ellipse(0,0,300,500).
}
