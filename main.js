noseX=0
noseY=0
function preload(){
    clownnose=loadImage("clownnose.jpg")
}
function setup(){
    canvas=createCanvas(500,500)
    video=createCapture(VIDEO)
    video.hide()
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on('pose',gotresult)
}

function modelloaded(){
    console.log("modelloaded")

}
function gotresult( error,results){
if (error) {
   console.log(error) 
} else {
    console.log(results)
    noseX=results[0].pose.nose.x
    noseY=results[0].pose.nose.y
}
}
function draw() {
    image(video,0,0,500,500)
    image(clownnose,noseX,noseY,50,50)  
    }
    function takesnapshot(){
        save('youareaclown.png')
    }