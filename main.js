diffrent = 0;
wristleftX = 0;
wristrightX = 0;

function preload() {

}

function setup() {

  video = createCapture(VIDEO);
  video.size(550, 550);

  canvas = createCanvas(550, 400);
  canvas.position(560, 140);

  posenet = ml5.poseNet(video, modelloaded);
  posenet.on('pose', gotresult);
}

function draw() {
  background('#a89d9d');

  fill('#6effd8');
  textSize(diffrent);
  text('Lucky', 100, 250);
  document.getElementById("width").innerHTML = "The size of text well be " + diffrent +'px';
}

function modelloaded() {
  console.log("poseNet is working");
}
function gotresult(results) {
  if (results.length > 0) {
    console.log(results);

    wristleftX = results[0].pose.leftWrist.x;
    wristrightX = results[0].pose.rightWrist.x;
    diffrent = floor(wristleftX - wristrightX);
    console.log('wristleftX =' + wristleftX + ' wristrightX =' + wristrightX + 'diffrent =' + diffrent);
  }

}