var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var box1 = createSprite(25,75,50,50);
box1.shapeColor = "red";
var box2 = createSprite(75,75,50,50);
box2.shapeColor = "blue";
var box3 = createSprite(125,75,50,50);
box3.shapeColor = "red";
var box4 = createSprite(175,75,50,50);
box4.shapeColor = "blue";
var box5 = createSprite(225,75,50,50);
box5.shapeColor = "red";
var box6 = createSprite(275,75,50,50);
box6.shapeColor = "blue";
var box7 = createSprite(325,75,50,50);
box7.shapeColor = "red";
var box8 = createSprite(475,75,50,50);
box8.shapeColor = "blue";
var box9 = createSprite(525,75,50,50);
box9.shapeColor = "red";
var box10 = createSprite(575,75,50,50);
box10.shapeColor = "blue";

var box11 = createSprite(25,125,50,50);
box11.shapeColor = "blue";
var box12 = createSprite(75,125,50,50);
box12.shapeColor = "red";
var box13 = createSprite(125,125,50,50);
box13.shapeColor = "blue";
var box14 = createSprite(175,125,50,50);
box14.shapeColor = "red";
var box15 = createSprite(225,125,50,50);
box15.shapeColor = "blue";
var box16 = createSprite(275,125,50,50);
box16.shapeColor = "red";
var box17 = createSprite(325,125,50,50);
box17.shapeColor = "blue";
var box18 = createSprite(475,125,50,50);
box18.shapeColor = "red";
var box19 = createSprite(525,125,50,50);
box19.shapeColor = "blue";

var paddle=createSprite(200,390,100,20);
paddle.shapeColor= ("pink");
var ball=createSprite(200,200,20,20);
ball.shapeColor= ("green");



function draw(){

  background("whithe");
  if (keyDown("space")){
    ball.velocityX=2;
    ball.velocityY=3;
  
  }
  paddle.x=World.mouseX;
  ball.bounceOff(paddle);
  createEdgeSprites();
  ball.bounceOff(rightEdge);
  ball.bounceOff(paddle);
  ball.bounceOff(topEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(paddle);
  ball.bounceOff(box1);
  ball.bounceOff(box2);
  ball.bounceOff(box3);
  ball.bounceOff(box4);
  ball.bounceOff(box5);
  ball.bounceOff(box6);
  ball.bounceOff(box7);
  ball.bounceOff(box8);
  ball.bounceOff(box9);
  ball.bounceOff(box10);
  ball.bounceOff(box11);
  ball.bounceOff(box12);
  ball.bounceOff(box13);
  ball.bounceOff(box14);
  ball.bounceOff(box15);
  ball.bounceOff(box16);
  ball.bounceOff(box17);
  ball.bounceOff(box18);
  ball.bounceOff(box19);
  ball.bounceOff(paddle);
   drawSprites(); 
}











// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
