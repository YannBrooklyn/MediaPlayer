/* 
LANGAGE
HTML / CSS / JAVASCRIPT

SUJET

Coder un bon Media player est un excellent exercice pour pratiquer le DOM,
les événements, les fonctions JavaScript.

Vous pourrez vous amuser sur le développement de l’interface graphique en
JS ( DOM ) et CSS.

Votre media player doit avoir au minimum les fonctionnalités suivantes :

● Play / Pause
● Réglage Volume
● Skip Backward
● Skip Forward
● Une animation au choix.

Une Media player complète et aboutie est un excellent projet javascript pour
progresser.

RENDU

Le nom de votre dossier sera ‘MyMediaPlayer’ il est important de le
nommer exactement comme demandé.

Dans ce dossier doit avoir l'arborescence suivante :

● Index.html comme point d'entrée.
● Dossier assets ou on trouve 2 autres dossiers css et js.

Votre projet doit être push sur votre github

LIVRABLE

Lien de repos github. */

/***********************************************************/

const htmljs = document.querySelector("html")
htmljs.style.backgroundImage = "/media/nba23back.png";
const bodyjs = document.createElement("body");
// bodyjs.style.minHeight = "140vh";

document.body.style.marginRight = "20%";
document.body.style.marginLeft = "20%";
document.body.style.backgroundColor = "rgb(150, 0, 0)"
document.body.style.borderStyle = "solid";

// document.body.style.width = "auto";
document.body.style.height = "140vh";

/***********************************************************/

const div0 = document.createElement("div");
document.querySelector("body").appendChild(div0);
div0.classList.add("div0");
div0.style.display = "flex";
div0.style.flexDirection ="row";
div0.style.justifyContent = "center";
div0.style.justifyContent ="space-between"
div0.style.alignItems = "center"

const img2k = document.createElement("img");
document.querySelector(".div0").appendChild(img2k);
img2k.setAttribute("alt", "logo 2k");
img2k.setAttribute("src", "\media/logo2k.png");
img2k.style.width = "10vh";

const search2k = document.createElement("input")
document.querySelector(".div0").appendChild(search2k);
search2k.setAttribute("type", "text");
search2k.style.height = "3vh";
search2k.setAttribute("placeholder", "Recherche une vidéo...")


const div1 = document.createElement("div");
document.querySelector("body").appendChild(div1);
div1.classList.add("video-player");
div1.style.width = "100%";
// div1.style.height = "100%";
div1.style.display = "flex";
div1.style.flexDirection ="column";
div1.style.alignItems = "center"
div1.style.justifyContent = "center";
div1.style.verticalAlign = "top";
div1.style.backgroundColor = "black"

/***********************************************************/

const div3button = document.createElement("div");
document.querySelector(".video-player").appendChild(div3button);
div3button.classList.add("div3button");
div3button.style.position = "absolute";
div3button.style.zIndex = "1"
div3button.style.display = "flex";
div3button.style.gap ="2vh"
div3button.style.justifyContent = "center"
div3button.style.alignItems = "center";
div3button.style.display = "block";

const videojs = document.createElement("video");
document.querySelector(".video-player").appendChild(videojs)
// videojs.setAttribute("controls", "")
videojs.classList.add("myvideo");
// CSS
videojs.style.width = "100%";
videojs.style.height = "80%";
videojs.style.position = "relative";

const sourcejs = document.createElement("source");
document.querySelector(".myvideo").appendChild(sourcejs);
videojs.setAttribute("src", "\media/nbaback.mp4");
videojs.setAttribute("type", "video/mp4");


const div2 = document.createElement("div")
document.querySelector(".video-player").appendChild(div2);
div2.classList.add("controls");
div2.style.left = "0";
div2.style.bottom = "0";
div2.style.width = "100%";
div2.style.backgroundColor = bodyjs



const buttonbackward = document.createElement("button");
document.querySelector(".div3button").appendChild(buttonbackward);
buttonbackward.classList.add("bbackward");
buttonbackward.addEventListener("click", function BWVideo(){
    videojs.currentTime = -10;
})
buttonbackward.innerHTML = "⏮"
buttonbackward.style.border = "0";
buttonbackward.style.fontSize = "2vh";
buttonbackward.style.backgroundColor = "darkred"
buttonbackward.style.color = "white"
buttonbackward.style.borderRadius = "10vh"
buttonbackward.style.width = "5vh"
buttonbackward.style.height = "5vh"
buttonbackward.style.textAlign = "center"
buttonbackward.style.verticalAlign = "top"
buttonbackward.style.transition = "All 0.3s ease-out"

const buttonplaypause = document.createElement("button");
document.querySelector(".div3button").appendChild(buttonplaypause);
buttonplaypause.classList.add("bplaypause");
buttonplaypause.addEventListener("click", function PPVideo(){
    if(videojs.paused){
        buttonplaypause.innerHTML = "⏸"
        videojs.play();
        
    } else {
        buttonplaypause.innerHTML = "⏵"
        videojs.pause();
    }
})
buttonplaypause.innerHTML = "⏵"
// CSS
buttonplaypause.style.border = "0";
buttonplaypause.style.fontSize = "2vh";
buttonplaypause.style.backgroundColor = "darkred"
buttonplaypause.style.color = "white"
buttonplaypause.style.borderRadius = "10vh"
// buttonplaypause.style.lineHeight = "20vh"
buttonplaypause.style.width = "5vh"
buttonplaypause.style.height = "5vh"
buttonplaypause.style.textAlign = "center"
buttonplaypause.style.verticalAlign = "top"
buttonplaypause.style.transition = "All 0.3s ease-out"

const buttonforward = document.createElement("button");
document.querySelector(".div3button").appendChild(buttonforward);
buttonforward.classList.add("bforward");
buttonforward.addEventListener("click", function FWVideo(){
    videojs.currentTime = +10;
})
buttonforward.innerHTML = "⏭"
buttonforward.style.border = "0";
buttonforward.style.fontSize = "2vh";
buttonforward.style.backgroundColor = "darkred"
buttonforward.style.color = "white"
buttonforward.style.borderRadius = "10vh"
buttonforward.style.width = "5vh"
buttonforward.style.height = "5vh"
buttonforward.style.textAlign = "center"
buttonforward.style.verticalAlign = "top"
buttonforward.style.transition = "All 0.3s ease-out"

const progressbarjs = document.createElement("progress");
document.querySelector(".controls").appendChild(progressbarjs);
progressbarjs.setAttribute("value", "0");
progressbarjs.setAttribute("max", "100");
progressbarjs.classList.add("progressbar");
progressbarjs.setAttribute("id", "fill1")
progressbarjs.style.width = "100%";
const br = document.createElement("br")
div2.appendChild(br)





const buttonstop = document.createElement("button");
document.querySelector(".controls").appendChild(buttonstop);
buttonstop.classList.add("bstop");
buttonstop.addEventListener("click", function PPVideo(){
    
        videojs.pause();
        videojs.currentTime = 0;
        buttonplaypause.innerHTML = "⏵"
        div3button.style.display = "block"
     
})
videojs.addEventListener("ended", function PPVideoo(){
    
    videojs.pause();
    videojs.currentTime = 0;
    buttonplaypause.innerHTML = "⏵"
    div3button.style.display = "block"
 
})
buttonstop.innerHTML = "⏹"
buttonstop.style.border = "0";
buttonstop.style.fontSize = "2vh";
buttonstop.style.backgroundColor = "darkred"
buttonstop.style.color = "white"
buttonstop.style.borderRadius = "10vh"
// buttonstop.style.lineHeight = "20vh"
buttonstop.style.width = "5vh"
buttonstop.style.height = "5vh"
buttonstop.style.textAlign = "center"
buttonstop.style.verticalAlign = "top"
buttonstop.style.transition = "All 0.3s ease-out"









const progresssong = document.createElement("progress");
document.querySelector(".controls").appendChild(progresssong);
progresssong.style.width = "2vh";
progresssong.style.height = "8vh";
// progresssong.style.display = "none";
progresssong.classList.add("hidden");


const buttonsong = document.createElement("button");
document.querySelector(".controls").appendChild(buttonsong);
buttonsong.classList.add("bsong");
buttonsong.addEventListener("click", function BSVideo(){
    if (progresssong.classList.contains("hidden")) {
        progresssong.classList.remove("hidden")
        
       
    }
    else {
        progresssong.classList.add("hidden")
    }
    
})
// buttonsong.addEventListener("click", function BSBVideo(){
//     if (progresssong.style.display = "block") {
//         progresssong.style.display ="none"
// }
// })
buttonsong.innerHTML = "🕪"
buttonsong.style.border = "0";
buttonsong.style.fontSize = "2vh";
buttonsong.style.backgroundColor = "darkred"
buttonsong.style.color = "white"
buttonsong.style.borderRadius = "10vh"
buttonsong.style.width = "5vh"
buttonsong.style.height = "5vh"
buttonsong.style.textAlign = "center"
buttonsong.style.verticalAlign = "top"
buttonsong.style.transition = "All 0.3s ease-out"

const labelseconde = document.createElement("label");
document.querySelector(".controls").appendChild(labelseconde);
labelseconde.setAttribute("for", "fill1");
labelseconde.style.color = "red";
labelseconde.value = 00;

function probar() {
    setInterval(function () {
        progressbarjs.value = Math.round((videojs.currentTime / videojs.duration) * 100);
        labelseconde.value = labelseconde.value + Math.round(videojs.currentTime)
    })
}
probar();


if (videojs.play()) {
    div3button.style.display == "none"
    videojs.addEventListener ||  div3button.addEventListener("mouseenter", function hideshow1() {
        if (div3button.style.display == "none" ){
            div3button.style.display = "block"
        }
    })

    videojs.addEventListener && div3button.addEventListener("mouseleave", function hideshow2() {  
        if (div3button.style.display == "block") {
            div3button.style.display = "none";
        }
    })


}


const div3 = document.createElement("div")
div3.classList.add("text-com");
document.querySelector("body").appendChild(div3);

const titlevideo = document.createElement("h2");
document.querySelector(".text-com").appendChild(titlevideo);
titlevideo.innerHTML = "Get Back" + "<hr>";
titlevideo.style.color = "white";

const descripjs = document.createElement("p");
document.querySelector(".text-com").appendChild(descripjs);
descripjs.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in dui nulla. Proin eleifend elementum arcu, sodales fermentum justo accumsan ut. Cras vel felis tempor velit tempus pretium. Maecenas at dolor lacinia, blandit nisi ultricies, auctor purus. Donec lobortis ut lectus id pretium. Mauris pellentesque, enim vel congue mollis, odio lacus viverra massa, eu interdum neque nisi vel neque. Nam sollicitudin, leo at lobortis vulputate, ipsum ipsum porta nisi, nec fermentum ex arcu vel erat."
descripjs.style.color = "white";
if (descripjs.innerHTML.length > 100) {

}

const commentary = document.createElement("div");
document.querySelector(".text-com").appendChild(commentary)
commentary.classList.add("divcommentary")

const pseudocom = document.createElement("input")
pseudocom.setAttribute("type", "text")
document.querySelector(".divcommentary").appendChild(pseudocom);
pseudocom.classList.add("pseudocommentary")
pseudocom.style.backgroundColor ="rgb(140, 0, 0)"
pseudocom.style.borderColor = "black"
pseudocom.style.borderStyle = "solid"
pseudocom.style.borderWidth = "0.1vh"
pseudocom.setAttribute("placeholder", "pseudonyme")
pseudocom.value = "";

const com = document.createElement("textarea");
com.setAttribute("placeholder", "Votre commentaire...")
com.style.resize = "none";
document.querySelector(".divcommentary").appendChild(com);
com.style.borderColor = "black"
com.style.backgroundColor = "rgb(140, 0, 0)"
com.style.width = "99%";
com.style.height = "15vh"
com.value = "";

const hre = "<hr>";




const buttoncom = document.createElement("button");
document.querySelector(".divcommentary").appendChild(buttoncom);
buttoncom.innerHTML = "Envoyer";
buttoncom.addEventListener("click", function sendcom(){
    const newP = document.createElement("p");
    pseudocom.style.fontWeight = "bold";
    document.querySelector(".divcommentary").appendChild(newP)
    newP.innerHTML = pseudocom.value + "<br/>" + com.value + "<br/>" + hre;
    com.value = "";
    pseudocom.value ="";
    
})


