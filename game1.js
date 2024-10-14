let gameSeq=[];
let userSeq=[];
let Clr=["red","blue","green","orange"];
let g="Game started";
let highest=0;

let Started=false;
let level=0;


document.addEventListener("keypress",function(){

    if(Started==false){
        console.log(g);
        Started=true;

        levelUp();
    }

})
let h2=document.querySelector("h2");
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 300);

}
function btnFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 300);

}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    // console.log(randIdx);
    let randClr=Clr[randIdx];
    let randBtn=document.querySelector(`.${randClr}`);
    
    gameFlash(randBtn);
    gameSeq.push(randClr);
    console.log(gameSeq);
}
function checkAns(idx){
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        if(highest<level){
            highest=level;
        }
        h2.innerHTML=`Game Over!! <br>Highest Score: ${highest} <br> Your Score: ${level}<br> Press any key to restart.`;
        document.querySelector("body").classList.add("over");
        setTimeout(function() {
            document.querySelector("body").classList.remove("over");
        }, 200);
        reset();
    }
}
function btnPress(){
    let btn=this;
    btnFlash(btn);
    // console.log(btn);
    let userclr=btn.getAttribute("id");
    userSeq.push(userclr);
    // console.log(userSeq);
    checkAns(userSeq.length-1);

}
let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}
function reset(){
    g="Game Restarted.";
    Started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
}