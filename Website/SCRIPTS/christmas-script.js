var img = document.getElementById("img-area");
var backgroundIm = document.getElementById("atvirukas");
var fonas = document.getElementById("fonas");
var tekstas = document.getElementById("text");

// *************IMAGE*****************************************
function xmassNone() {
    img.src = 'IMAGES/CHRISTMAS-IMG/kaledos3.jfif';
    img.style.opacity = "0";
}
function xmass1() {
    img.src = 'IMAGES/CHRISTMAS-IMG/xmass1.png';
    img.style.opacity = "1";
}
function xmass2() {
    img.src = 'IMAGES/CHRISTMAS-IMG/xmass2.png';
    img.style.opacity = "1";
}
function xmass3() {
    img.src = 'IMAGES/CHRISTMAS-IMG/xmass3.png';
    img.style.opacity = "1";
}
function xmass4() {
    img.src = 'IMAGES/CHRISTMAS-IMG/xmass4.png';
    img.style.opacity = "1";
}
function xmass5() {
    img.src = 'IMAGES/CHRISTMAS-IMG/xmass5.png';
    img.style.opacity = "1";
    console.log("veikia5");
}
function xmass6() {
    console.log("veikia6");
    img.src = 'IMAGES/CHRISTMAS-IMG/xmass6.png';
    img.style.opacity = "1";
}
function xmass7() {
    console.log("veikia7");
    img.src = 'IMAGES/CHRISTMAS-IMG/xmass7.png';
    img.style.opacity = "1";
}

// **********POSITION*****************************************
function right() {

    img.style.float = "right";
    tekstas.style.float = "left"
}
function left() {

    img.style.float = "left";
    tekstas.style.float = "right"
}


// *************BACKGROUD ************************************* 
function changeColor() {
    let color = document.getElementById('colorInputColor').value;
    backgroundIm.style.backgroundColor = color;
}



// Christmas own decoration

function previewFile() {
    const preview = document.getElementById('img-area');
    const file = document.getElementById("formFileSm").files[0];
    const btn = document.getElementById('apply');
    const reader = new FileReader();

    btn.addEventListener("click", function () {
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}