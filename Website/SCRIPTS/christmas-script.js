var img = document.getElementById("img-area");
var backgroundIm = document.getElementById("atvirukas");
var fonas = document.getElementById("fonas");
var tekstas = document.getElementById("text-div");

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

// function previewFile(){
//     var img_url = document.getElementById("img-area").value;
//     document.getElementsByTagName("formFileSm")[0].style.backgroundImage = "url('"+img_url+"')";
//     }



function previewFile() {
    const preview = document.getElementById('img-area');
    const file = document.getElementById("formFileSm").files[0];
    const btn = document.getElementById('apply');
    const reader = new FileReader();

    btn.addEventListener("click", function () {
        preview.src = reader.result;
    }, false);

    if (file) {
       preview.style.backgroundImage = reader.readAsDataURL(file);
    }
}