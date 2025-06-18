let gameSeq =[];
let userSeq =[];
let btns =["yellow", "red", "green","purple" ];
let started =false;
let level =0;

let h1 = document.querySelector("h1");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game started");
        started = true;
        levelUp();

    }
    
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 400);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}

function levelUp(){
    userSeq =[];
    level++;
    // console.dir(h1);
    h1.innerText =`Level ${level}`;
    //random btn choose
    let randIdx =Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn =document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);
     gameSeq.push(randColor);
     console.log(gameSeq);
    gameFlash(randbtn);
}
function checkAns(idx){
     if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
     }else{
        h1.innerHTML=`Game Over! Your score was<b> ${level}</b> <br> Press any key to restart `;
        reset();
     }



}

function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);
    userColor =btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click" ,btnPress);
}
function reset(){
    started = false;
    gameSeq =[];
    userSeq =[];
    level = 0;

}