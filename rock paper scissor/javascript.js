let usescore=0;
let comscore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userscore=document.querySelector("#user-score");
let compscore=document.querySelector("#comp-score");

const getcompchoice=()=>{
    let arr=["rock","paper","scissor"];
     let choice=Math.floor(Math.random()*3);
    return arr[choice];
}

const gamedraw=()=>{
    msg.innerText="game was Draw";
    msg.style.backgroundColor="black";
};

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        usescore++;
        userscore.innerText=usescore;

        msg.innerText=`you won your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        comscore++;
        compscore.innerText=comscore;
        msg.innerText=`you lost!, ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const playgame=(userchoice)=>{
    let comchoice=getcompchoice();

     if(userchoice===comchoice)
     {
     gamedraw();
    }

       
        else{
        let userwin=true;
        if(userchoice==="rock")
        {
            userwin=comchoice==="scissor"?true:false;
        }
        else if(userchoice==="scissor")
        {
            userwin=comchoice==="paper"?true:false;
        }
        else
        {
            userwin=comchoice==="rock"?true:false;
        }

        showwinner(userwin,userchoice,comchoice);
     }



};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        playgame(userchoice);
       

    });
});
