// Scene switching
function nextScene(sceneNumber){

    document.querySelectorAll(".scene").forEach(scene=>{
        scene.classList.remove("active")
    })

    document.getElementById("scene"+sceneNumber).classList.add("active")

}


// ---------- Scene 1 ----------

const seal = document.getElementById("seal")
const scene1 = document.getElementById("scene1")
const topPanel = document.querySelector(".top-panel")
const bottomPanel = document.querySelector(".bottom-panel")

const ripSound = new Audio("sounds/rip.mp3")
const flipSound = new Audio("sounds/pageflip.mp3")

seal.addEventListener("click", startOpening)

function startOpening(){

    ripSound.play()

    scene1.classList.add("ripped")

    setTimeout(()=>{
        topPanel.classList.add("flip-top")
        flipSound.play()
    },600)

    setTimeout(()=>{
        bottomPanel.classList.add("flip-bottom")
    },1300)

    setTimeout(()=>{
        nextScene(2)
        startEnvelope()
    },2100)

}


// ---------- Scene 2 ----------

function startEnvelope(){

    const flap = document.getElementById("flapTop")
    const flash = document.getElementById("flash")

    setTimeout(()=>{
        flap.classList.add("flap-open")
    },2000)

    setTimeout(()=>{
        flash.classList.add("active")
    },2600)

    setTimeout(()=>{
        nextScene(3)
        document.body.style.overflow = "auto"
    },3300)

}