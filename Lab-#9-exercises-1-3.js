function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  addX = random(1,5);
  addY = random(1,5);
  luffysToStart = 50;
  luffy = [];
  for (let luffyDefined = 0; luffyDefined < luffysToStart; luffyDefined++) {
    let x = random(100,300);
    let y = random(height);
    addX = random(1,5);
    luffy.push(new Luffy(x, y, addX, addY));
  }
}

function draw() {
  background("powderblue");
  //update luffy
  for (let luffyShown = 0; luffyShown < luffy.length; luffyShown++) {
  let thisLuffy = luffy[luffyShown];
  thisLuffy.update();
  thisLuffy.show();  
  }
}
class Luffy {
  constructor(x, y, addX, addY) {
    this.x = x;
    this.y = y;
    this.addX = addX;
    this.addY = addY;
  }

  update() {
    this.x = this.x + this.addX;
    this.y = this.y + this.addY;
    //reverse if it hits a wall
    let isTooFarLeft = this.x < 0;
    let isTooFarRight = this.x > width - 100;
    let isTooFarUp = this.y < 0;
    let isTooFarDown = this.y > height - 100;
    if (isTooFarLeft || isTooFarRight) {
      this.addX = -this.addX;
      //this.y = random(height);
    }
    if (isTooFarUp || isTooFarDown)
    this.addY = -this.addX;
  }
  show() {
    push();
    translate(this.x, this.y);
    fill("goldenrod");
    noStroke();
    rect(50, 20, 10);
    rect(50, 30, 10);
    rect(40, 30, 10);
    rect(60, 20, 10);
    rect(70, 20, 10);
    rect(80, 30, 10);
    rect(60, 30, 10);
    rect(70, 30, 10);
    rect(55, 15, 5);
    rect(60, 15, 5);
    rect(65, 15, 5);
    rect(70, 15, 5);
    noFill();
    //draw the ribbon on the hat
    fill("maroon");
    rect(50, 25, 5);
    rect(55, 25, 5);
    rect(60, 25, 5);
    rect(65, 25, 5);
    rect(70, 25, 5);
    rect(75, 25, 5);
    //draw the head
    fill("peachpuff");
    rect(45, 40, 10);
    rect(50, 40, 10);
    rect(60, 40, 10);
    rect(70, 40, 10);
    rect(60, 50, 10);
    rect(50, 50, 10);
    rect(70, 50, 10);
    rect(60, 60, 10);
    noFill();
    //draw the hair
    fill("black");
    rect(40, 40, 5);
    rect(40, 45, 5);
    rect(45, 50, 5);
    rect(50, 40, 5);
    rect(55, 40, 5);
    rect(60, 40, 5);
    rect(65, 40, 5);
    rect(70, 40, 5);
    rect(75, 40, 5);
    rect(80, 40, 5);
    rect(85, 40, 5);
    rect(80, 45, 5);
    rect(65, 40, 5);
    rect(50, 45, 5);
    //draw torso
    fill("maroon");
    rect(70, 70, 10);
    rect(50, 70, 10);
    rect(70, 80, 10);
    rect(50, 80, 10);
    rect(60, 80, 10);
    rect(50, 90, 10);
    rect(60, 90, 10);
    rect(70, 90, 10);
    rect(50, 100, 10);
    rect(60, 100, 10);
    rect(70, 100, 10);
    noFill();
    //draw the shorts
    fill("dodgerblue");
    rect(50, 110, 10);
    rect(60, 110, 10);
    rect(70, 110, 10);
    rect(50, 120, 10);
    rect(60, 120, 10);
    rect(70, 120, 10);
    rect(50, 130, 10);
    rect(60, 130, 10);
    rect(70, 130, 10);
    rect(45, 115, 5);
    rect(45, 120, 5);
    rect(45, 125, 5);
    rect(45, 130, 7);
    rect(80, 115, 5);
    rect(80, 120, 5);
    rect(80, 125, 5);
    rect(78, 130, 7);
    noFill();
    //draw the gap between the legs
    fill("black");
    rect(63, 120, 4);
    rect(63, 124, 4);
    rect(63, 128, 4);
    rect(63, 132, 4);
    rect(63, 136, 4);
    noFill();
    //draw the shorts trim
    fill("white");
    rect(67, 136, 4);
    rect(71, 136, 4);
    rect(75, 136, 4);
    rect(79, 136, 4);
    rect(59, 136, 4);
    rect(55, 136, 4);
    rect(51, 136, 4);
    rect(48, 136, 4);
    rect(44, 136, 4);
    rect(83, 136, 4);
    noFill();
    //draw the legs
    fill("peachpuff");
    rect(50, 140, 10);
    rect(70, 140, 10);
    rect(50, 150, 10);
    rect(70, 150, 10);
    rect(55, 160, 5);
    rect(50, 160, 5);
    rect(45, 160, 5);
    rect(40, 160, 5);
    rect(70, 160, 5);
    rect(75, 160, 5);
    rect(80, 160, 5);
    rect(85, 160, 5);
    noFill();
    //draw the sandals
    fill("chocolate");
    rect(39, 165, 3);
    rect(42, 165, 3);
    rect(45, 165, 3);
    rect(48, 165, 3);
    rect(51, 165, 3);
    rect(54, 165, 3);
    rect(57, 165, 3);
    rect(70, 165, 3);
    rect(73, 165, 3);
    rect(76, 165, 3);
    rect(79, 165, 3);
    rect(82, 165, 3);
    rect(85, 165, 3);
    rect(88, 165, 3);
    //draw the arms stretched up
    if (mouseIsPressed) {
      fill("peachpuff");
      //the one "peachpuff" piece on the torso
      rect(60, 70, 10);
      //
      rect(45, 80, 5);
      rect(80, 80, 5);
      rect(40, 70, 10);
      rect(80, 70, 10);
      rect(40, 60, 10);
      rect(80, 60, 10);
      rect(40, 50, 10);
      rect(80, 50, 10);
      rect(40, 40, 10);
      rect(80, 40, 10);
      rect(40, 30, 10);
      rect(80, 30, 10);
      rect(40, 20, 10);
      rect(80, 20, 10);
      rect(40, 10, 10);
      rect(80, 10, 10);
      rect(40, 0, 10);
      rect(80, 0, 10);
      rect(40, -10, 10);
      rect(80, -10, 10);
      rect(40, -20, 10);
      rect(80, -20, 10);
      rect(35, -30, 15);
      rect(80, -30, 15);
    } else {
      //draw arms
      fill("peachpuff");
      rect(60, 70, 10);
      rect(45, 75, 5);
      rect(80, 75, 5);
      rect(40, 80, 10);
      rect(80, 80, 10);
      rect(40, 90, 10);
      rect(80, 90, 10);
      rect(35, 100, 15);
      rect(80, 100, 15);
      //draw torso
      fill("maroon");
      rect(70, 70, 10);
      rect(50, 70, 10);
      rect(70, 80, 10);
      rect(50, 80, 10);
      rect(60, 80, 10);
      rect(50, 90, 10);
      rect(60, 90, 10);
      rect(70, 90, 10);
      rect(50, 100, 10);
      rect(60, 100, 10);
      rect(70, 100, 10);
      noFill();
      //draw the legs
      fill("dodgerblue");
      rect(50, 110, 10);
      rect(60, 110, 10);
      rect(70, 110, 10);
      rect(50, 120, 10);
      rect(60, 120, 10);
      rect(70, 120, 10);
      rect(50, 130, 10);
      rect(60, 130, 10);
      rect(70, 130, 10);
      rect(45, 115, 5);
      rect(45, 120, 5);
      rect(45, 125, 5);
      rect(45, 130, 7);
      rect(80, 115, 5);
      rect(80, 120, 5);
      rect(80, 125, 5);
      rect(78, 130, 7);
      noFill();
      fill("black");
      rect(63, 120, 4);
      rect(63, 124, 4);
      rect(63, 128, 4);
      rect(63, 132, 4);
      rect(63, 136, 4);
      noFill();
      fill("white");
      rect(67, 136, 4);
      rect(71, 136, 4);
      rect(75, 136, 4);
      rect(79, 136, 4);
      rect(59, 136, 4);
      rect(55, 136, 4);
      rect(51, 136, 4);
      rect(48, 136, 4);
      rect(44, 136, 4);
      rect(83, 136, 4);
      noFill();
      fill("peachpuff");
      rect(50, 140, 10);
      rect(70, 140, 10);
      rect(50, 150, 10);
      rect(70, 150, 10);
      rect(55, 160, 5);
      rect(50, 160, 5);
      rect(45, 160, 5);
      rect(40, 160, 5);
      rect(70, 160, 5);
      rect(75, 160, 5);
      rect(80, 160, 5);
      rect(85, 160, 5);
      noFill();
      fill("chocolate");
      rect(39, 165, 3);
      rect(42, 165, 3);
      rect(45, 165, 3);
      rect(48, 165, 3);
      rect(51, 165, 3);
      rect(54, 165, 3);
      rect(57, 165, 3);
      rect(70, 165, 3);
      rect(73, 165, 3);
      rect(76, 165, 3);
      rect(79, 165, 3);
      rect(82, 165, 3);
      rect(85, 165, 3);
      rect(88, 165, 3);
      pop();
    }
  }
}
