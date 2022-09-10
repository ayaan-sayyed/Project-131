img= "";

function BedRoom() {
    window.location = "bedroom.html";
}

function Back() {
    window.location = "index.html";
}

function TVAC() {
    window.location = "TV and AC.html";
}

function Desk() {
    window.location = "Desk.html";
}

function Bottles() {
    window.location = "bottles.html";
}

function fruitbasket() {
    window.location = "fruitbasket.html";
}

function setup() {
    canvas= createCanvas(650, 500);
    canvas.center();
    objectDetector= ml5.objectDetector("cocossd", modelLoaded);
    objectDetector.detect(img, gotResults);
    }
    
    
    function modelLoaded() {
    console.log("CocoSSD model is sucessfully loaded!!!!!!11");
    }
    
    function gotResults(error,results) {
    if(error){
    console.error(error);
    }
    else{
    console.log(results); 
    objects= results;
    }
    }