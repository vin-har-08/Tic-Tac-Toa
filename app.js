let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let turnO= true;
let newbt=document.querySelector("#newbt");
let msgcantainer=document.querySelector(".msgcantainer")
let msg=document.querySelector("#msg")
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const disabledboxes = () => {
    for(box of boxes){
        box.disabled=true; 
    }
}
const resetgame=()=>{
    turnO= true;
    enableboxes();
    msgcantainer.classList.add("hide");
}
const enableboxes = () => {
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
boxes.forEach ((box) => {
    box.addEventListener("click", () => {
       if(turnO){
        box.innerText="O";
        turnO=false;
       }
       else{
        box.innerText="X"
        turnO=true;
       }
       box.disabled=true;
       checkWinner();
    });
})
showWinner =(winner) =>{
    msg.innerText=`Congratulations , Winner is ${winner}`;
    msgcantainer.classList.remove("hide");
}
checkWinner = () => {
    for(let pattern of winpattern){
            let pos1=boxes[pattern[0]].innerText;
           let pos2= boxes[pattern[1]].innerText;
           let pos3= boxes[pattern[2]].innerText;
           
           if(pos1!= "" && pos2!="" && pos3!=""){
             if(pos1==pos2 && pos2==pos3){
                console.log("winner",pos1);
                disabledboxes();
                showWinner(pos1);
             }
           }
    }
}
newbt.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);