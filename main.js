var img = "";
var status1 = "";
var object = [];


function preload() {
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    Objectdetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "status-detecing objects";

}

function draw() {

    image(img, 0, 0, 640, 420);

    if (status1 != 0) {
        for (i = 0; i < object.length; i++) {
            document.getElementById("status").innerHTML = "status-object detected";
            fill("#ff9348");
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x+15, object[i].y+15);
            noFill();
            stroke("#ff8234");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}

function modelloaded() {
    console.log("model is loaded :-)");
    status1 = true;
    Objectdetector.detect(img, gotResults);


}

function gotResults(error, Results) {
    if (error) {

        console.log(error);

    }
    console.log(Results);
    object = Results;

}