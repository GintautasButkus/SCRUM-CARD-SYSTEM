var img = document.getElementById("img-area");
var backgroundIm = document.getElementById("atvirukas");
var fonas = document.getElementById("fonas");


//  Christmas 



// Christmas Images
function ChristmasWithoutImage(){
    img.src='IMAGES/Christmas1.jpg';
    img.style.opacity = "0";
}
function ChristmasOne(){
    img.src='IMAGES/Christmas1.jpg';
    img.style.opacity = "1";
}
function ChristmasTwo(){
    img.src='IMAGES/Christmas2.jpg';
    img.style.opacity = "1";
}
function ChristmasThree(){
    img.src='IMAGES/Christmas3.jpg';
    img.style.opacity = "1";
}
function ChristmasFour(){
    img.src='IMAGES/Christmas4.jpg';
    img.style.opacity = "1";
}
function ChristmasFive(){
    img.src='IMAGES/Christmas5.jpg';
    img.style.opacity = "1";
    console.log("veikia5");
}
function ChristmasSix(){
    console.log("veikia6");
    img.src='IMAGES/Christmas6.jpg';
    img.style.opacity = "1";
}

// Christmas Image Position
function ChristmasRight(){
    img.style.float = "right";
}
function ChristmasLeft(){
    img.style.float = "left";
}


// Christmas postcard background
function changeColor(){
    let color = document.getElementById('colorInputColor').value;
    backgroundIm.style.backgroundColor = color;
}


// Birthday

function gimtadienisVienas(){
    img.src='IMAGES/gimtadienis1.jfif';
}
function gimtadienisDu(){
    img.src='IMAGES/gimtadienis2.jfif';
}
function gimtadienisTrys(){
    img.src='IMAGES/gimtadienis3.jfif';
}
function gimtadienisTrys(){
    img.src='IMAGES/gimtadienis3.jfif';
}




// Easter

function velykosVienas(){
    img.src='IMAGES/velykos1.jfif';
}
function velykosDu(){
    img.src='IMAGES/velykos2.jfif';
}
function velykosTrys(){
    img.src='IMAGES/velykos3.jfif';
}




// Vacation

function atostogosVienas(){
    img.src='IMAGES/atostogos1.jfif';
}
function atostogosDu(){
    img.src='IMAGES/atostogos2.jfif';
}
function atostogosTrys(){
    img.src='IMAGES/atostogos3.jfif';
}