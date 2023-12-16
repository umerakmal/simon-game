let gameSeq = []
let userSeq = []

let started = false;
let stage = 0

let h3 = document.querySelector("h3")


let colors = ["deepOrange", "copper", "scarlet", "orange"]
let btns = document.querySelectorAll(".btn")

let startBtn = document.querySelector("button")

startBtn.addEventListener('click', function(){
    if(started == false){
        // console.log("game started")
        started = true
        stageUp()
    }
})

function btnFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 250)
}
function stageUp() {
    userSeq = []
    stage++;
    h3.innerText = `Stage ${stage}`
    let randindex = Math.floor(Math.random() * 4)
    let randColor = colors[randindex]
    let randbtn = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor)
    // console.log("game", gameSeq)
    btnFlash(randbtn)
}

function check(idx) {
    
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(stageUp, 1000)
        }
    }
    else {
        h3.innerHTML = `Game Over! Your score was <b>${stage}</b> <br> Press button to start again`
        reset()
    }
}

function btnpress () {
    let btn = this;
    btnFlash(btn)
    let btnId = btn.getAttribute("id")
    userSeq.push(btnId)
    // console.log("user", userSeq)
    check(userSeq.length - 1)
}

for (let btn of btns) {
    btn.addEventListener("click", btnpress)
}

function reset() {
    started = false;
    gameSeq = []
    userSeq = []
    stage = 0
}