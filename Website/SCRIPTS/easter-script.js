var img = document.getElementById("img-area");
var backgroundIm = document.getElementById("atvirukas");
var fonas = document.getElementById("fonas");
var tekstas = document.getElementById("text-div");

// *************IMAGE*****************************************
function easterNone() {
    img.src = 'IMAGES/EASTER-IMG/1.png';
    img.style.opacity = "0";
}
function easter1() {
    img.src = 'IMAGES/EASTER-IMG/1.png';
    img.style.opacity = "1";
}
function easter2() {
    img.src = 'IMAGES/EASTER-IMG/2.png';
    img.style.opacity = "1";
}
function easter3() {
    img.src = 'IMAGES/EASTER-IMG/3.png';
    img.style.opacity = "1";
}
function easter4() {
    img.src = 'IMAGES/EASTER-IMG/4.png';
    img.style.opacity = "1";
}
function easter5() {
    img.src = 'IMAGES/EASTER-IMG/5.png';
    img.style.opacity = "1";
    console.log("veikia5");
}
function easter6() {
    console.log("veikia6");
    img.src = 'IMAGES/EASTER-IMG/6.png';
    img.style.opacity = "1";
}
function easter7() {
    console.log("veikia7");
    img.src = 'IMAGES/EASTER-IMG/7.jpg';
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


// *************Download postcard option 2 ************************************* 

$("#btnConvert").on('click', function () {
    html2canvas(document.getElementById("html-content-holder")).then(function (canvas) {                   
       var anchorTag = document.createElement("a");
        document.body.appendChild(anchorTag);
        document.getElementById("previewImg");
        anchorTag.download = "filename.jpg";
        anchorTag.href = canvas.toDataURL();
        anchorTag.target = '_blank';
        anchorTag.click();
    });
});



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