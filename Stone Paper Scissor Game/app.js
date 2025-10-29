let userscore=0;
let compscore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector('#msg');
let uScore=document.querySelector('#userscore');
let cScore=document.querySelector('#compscore');


const cmpChoice=()=>{
    const options = ['rock','paper','scissor'];
    const rndIdx = Math.floor(Math.random() * 3);
    return options[rndIdx];
};
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});

const playGame=(userChoice)=>{
    console.log('user clicked '+userChoice);
    const gencmpChoice=cmpChoice();
    console.log('Computer choose '+gencmpChoice);
    if(userChoice===gencmpChoice){
        draw();
    }
    else{
        let uWin=true;
        if(userChoice=='paper'){
            uWin=gencmpChoice=='scissor'?false:true;
        }
        else if(userChoice=='scissor'){
            uWin=gencmpChoice=='rock'?false:true;
        }
        else {
            uWin=gencmpChoice=='paper'?false:true;
        }
        showWinner(uWin);
    }
};
function draw(){
    msg.innerText="Its draw";
}
function showWinner(uWin){
    if(uWin){
        userscore++;
        uScore.innerText=userscore;
        msg.innerText='You Win!';
        msg.style.backgroundColor='green';
    }
    else{
        compscore++;
        cScore.innerText=compscore;
        msg.innerText='You Lose! Better Luck next time';
        msg.style.backgroundColor='red';
    }
}