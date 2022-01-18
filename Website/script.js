var img = document.getElementById("img-area");
var backgroundIm = document.getElementById("atvirukas");
var fonas = document.getElementById("fonas");


//  Kaledos 



// Kaledos paveikslelis
function kaledosBePaveikslelio(){
    img.src='IMAGES/kaledos3.jfif';
    img.style.opacity = "0";
}
function kaledosVienas(){
    img.src='IMAGES/kaledos1.jfif';
    img.style.opacity = "1";
}
function kaledosDu(){
    img.src='IMAGES/kaledos2.jfif';
    img.style.opacity = "1";
}
function kaledosTrys(){
    img.src='IMAGES/kaledos3.jfif';
    img.style.opacity = "1";
}
function kaledosKeturi(){
    img.src='IMAGES/kaledos4.jfif';
    img.style.opacity = "1";
}
function kaledosPenki(){
    img.src='IMAGES/kaledos5.jfif';
    img.style.opacity = "1";
    console.log("veikia5");
}
function kaledosSesi(){
    console.log("veikia6");
    img.src='IMAGES/kaledos6.jfif';
    img.style.opacity = "1";
}

// Kaledos paveikslelio pozicija
function kaledosDesineje(){
    img.style.float = "right";
}
function kaledosKaireje(){
    img.style.float = "left";
}


// Kaledos atviruko fonas
function changeColor(){
    let color = document.getElementById('colorInputColor').value;
    backgroundIm.style.backgroundColor = color;
}


// Gimtadienis 

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




// Velykos 

function velykosVienas(){
    img.src='IMAGES/velykos1.jfif';
}
function velykosDu(){
    img.src='IMAGES/velykos2.jfif';
}
function velykosTrys(){
    img.src='IMAGES/velykos3.jfif';
}




// Atostogos

function atostogosVienas(){
    img.src='IMAGES/atostogos1.jfif';
}
function atostogosDu(){
    img.src='IMAGES/atostogos2.jfif';
}
function atostogosTrys(){
    img.src='IMAGES/atostogos3.jfif';
}