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
div2.style.left = "0"
div2.style.bottom = "0"
div2.style.width = "100%"
div2.style.backgroundColor = bodyjs


const buttonplaypause = document.createElement("button");
document.querySelector(".controls").appendChild(buttonplaypause);
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


const buttonstop = document.createElement("button");
document.querySelector(".controls").appendChild(buttonstop);
buttonstop.classList.add("bstop");
buttonstop.addEventListener("click", function PPVideo(){
    
        videojs.pause();
        videojs.currentTime = 0;
        buttonplaypause.innerHTML = "⏵"
     
})

videojs.addEventListener("ended", function PPVideoo(){
    
    videojs.pause();
    videojs.currentTime = 0;
    buttonplaypause.innerHTML = "⏵"
 
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

const div3 = document.createElement("div")
div3.classList.add("text-com");
document.querySelector("body").appendChild(div3);

const titlevideo = document.createElement("h2");
document.querySelector(".text-com").appendChild(titlevideo);
titlevideo.innerHTML = "Get Back"
titlevideo.style.color = "white";

const descripjs = document.createElement("p");
document.querySelector(".text-com").appendChild(descripjs);
descripjs.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in dui nulla. Proin eleifend elementum arcu, sodales fermentum justo accumsan ut. Cras vel felis tempor velit tempus pretium. Maecenas at dolor lacinia, blandit nisi ultricies, auctor purus. Donec lobortis ut lectus id pretium. Mauris pellentesque, enim vel congue mollis, odio lacus viverra massa, eu interdum neque nisi vel neque. Nam sollicitudin, leo at lobortis vulputate, ipsum ipsum porta nisi, nec fermentum ex arcu vel erat."
descripjs.style.color = "white";

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
document.querySelector(".divcommentary").appendChild(com);
com.style.borderColor = "black"
com.style.backgroundColor = "rgb(140, 0, 0)"
com.style.width = "100%";
com.value = "";




const buttoncom = document.createElement("button");
document.querySelector(".divcommentary").appendChild(buttoncom);
buttoncom.innerHTML = "Envoyer"
buttoncom.addEventListener("click", function sendcom(){
    const newP = document.createElement("p");
    document.querySelector(".divcommentary").appendChild(newP)
    newP.innerHTML = pseudocom.value + "<br/>" + com.value;
    com.value = "";
    pseudocom.value ="";
    
})