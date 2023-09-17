var timerval = 60;
var score = 0;
var hitrn;

function makeBubble(){ 
    var clutter = "";
    
    for(i=1 ; i<=180 ; i++ ){
        
        var rn = Math.floor(Math.random()*10) ;
        
        clutter += `<div class="circle">${rn}</div>`;

}

document.querySelector("#pbtm").innerHTML = clutter;
}


function getNewhit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitnum").textContent = hitrn;
}


function timer(){
    var timerOut = setInterval(function(){
        if(timerval>0){
            timerval--;
            document.querySelector("#timer").textContent = timerval;
        }
        else{
            setTimeout(timerOut);
            document.querySelector("#pbtm").innerHTML = ` <h1>Your game is over but you can play again </h1>`;
        }
    }, 1000);
}

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm")
.addEventListener("click" ,function(dets){
    var scoreval = Number(dets.target.textContent);
    if(scoreval == hitrn){
       increaseScore();
       getNewhit();
       makeBubble();
    }
    
});



timer();
getNewhit();
makeBubble();
