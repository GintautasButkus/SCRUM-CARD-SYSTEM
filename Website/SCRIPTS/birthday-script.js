var img = document.getElementById("img-area");
var backgroundIm = document.getElementById("atvirukas");
var fonas = document.getElementById("fonas");
var tekstas = document.getElementById("text-div");

// *************IMAGE*****************************************
function bdayNone() {
    img.src = 'IMAGES/BIRTHDAY-IMG/bday3.jpg';
    img.style.opacity = "0";
}
function bday1() {
    img.src = 'IMAGES/BIRTHDAY-IMG/bday1.png';
    img.style.opacity = "1";
}
function bday2() {
    img.src = 'IMAGES/BIRTHDAY-IMG/bday2.png';
    img.style.opacity = "1";
}
function bday3() {
    img.src = 'IMAGES/BIRTHDAY-IMG/bday3.png';
    img.style.opacity = "1";
}
function bday4() {
    img.src = 'IMAGES/BIRTHDAY-IMG/bday4.png';
    img.style.opacity = "1";
}
function bday5() {
    img.src = 'IMAGES/BIRTHDAY-IMG/bday5.png';
    img.style.opacity = "1";
    console.log("veikia5");
}
function bday6() {
    console.log("veikia6");
    img.src = 'IMAGES/BIRTHDAY-IMG/bday6.png';
    img.style.opacity = "1";
}
function bday7() {
    console.log("veikia7");
    img.src = 'IMAGES/BIRTHDAY-IMG/bday7.png';
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

// *************Download postcard************************************* 

// *************Download postcard option 1 ************************************* 

// function downloadtable() {

//     var node = document.getElementById('tablecontainer');

//     domtoimage.toPng(node)
//         .then(function (dataUrl) {
//             var img = new Image();
//             img.src = dataUrl;
//             downloadURI(dataUrl, "records.png")
//         })
//         .catch(function (error) {
//             console.error('oops, something went wrong', error);
//         });
// }

// function downloadURI(uri, name) {
//     var link = document.createElement("a");
//     link.download = name;
//     link.href = uri;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     delete link;
// }


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