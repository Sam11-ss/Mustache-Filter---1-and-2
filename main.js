function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(300,300);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
    }
    function modelLoaded(){
        console.log("Posenet is initialised.");
    }
    function takeSnapshot(){
        save('my_filter_image.png');
    }
    function draw(){
        image(video,0,0,300,300);
    }
    function gotPoses(results){
        if (results.length > 0){
            console.log(results);
            console.log("nose x = "+results[0].pose.nose.x);
            console.log("nose y = "+results[0].pose.nose.y);
        }
    }
