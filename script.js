let userscore=0;
let compscore=0;

let choices=document.querySelectorAll(".choice")
let msgpara=document.querySelector("#msg")
let userscorepara=document.querySelector("#user-score")
let compscorepara=document.querySelector("#comp-score")


let gencompchoice=()=>{
    //rock paper sisior
    let options=["rock","paper","scissors"]
    let randomidx=Math.floor(Math.random()*3)
    return options[randomidx]
}

let drawgame=()=>{
    // console.log("game was draw");
    msgpara.innerText="game was Draw,play again"
    msgpara.style.backgroundColor="brown"
    
}

let showWinner=(userwin,userchoice,comchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msgpara.innerText=`you Win! ${userchoice} beats ${comchoice}`;
    msgpara.style.backgroundColor="green"

        // console.log("you win");
    }else{
        compscore++;
        compscorepara.innerText=compscore;

        msgpara.innerText=`you lost! ${comchoice} beats ${userchoice}`;

        // msgpara.innerText="you Lost"
        msgpara.style.backgroundColor="red"
 
        // console.log("you lost this turn");
    }
}

let platgame=(userchoice)=>{
    // console.log("userchoice=",userchoice);
    //generate computer choice
 let comchoice=gencompchoice();
//  console.log("computer choice=",comchoice);

if(userchoice===comchoice){
    drawgame();
}else{
    let userwin=true;
    if(userwin==="rock"){
        //paper, scciser
        userwin=comchoice==="paper"?false:true;
    }else if(userchoice==="paper"){
        //rock,scisser
        userwin=comchoice==="scissor"?false:true;
    }else{
        userwin=comchoice==="rock"?false:true;
    }

    showWinner(userwin,comchoice,userchoice);
}
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id")
        // console.log("your choice is:",userchoice);

        platgame(userchoice);
    })
})

