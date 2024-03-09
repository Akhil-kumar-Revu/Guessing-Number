let inputobj=document.getElementById("input");
let result=document.getElementById("gameResult");
let tri=document.getElementById("tries");
let random=Math.random()*100;
let cornum=Math.ceil(random);
let tries=7;
tri.textContent="Tries left: "+tries;
function check(){
    let input=parseInt(inputobj.value);
    if(input<=0 || input>99){
        result.textContent="Invalid Input!";
        result.style.backgroundColor="red";
        tries--;
        if(tries===0){
            result.style.backgroundColor="red";
            result.textContent="Game Over! Try Again";
            tri.textContent="Tries left: "+tries;
            tries=7;
            cornum=Math.ceil(Math.random()*100);
        }
        else{
            tri.textContent="Tries left: "+tries;
        }
    }
    else if(input<cornum){
        result.textContent="Too Low,Try Again!";
        result.style.backgroundColor="gold";
        tries--;
        if(tries===0){
            result.textContent="Game Over! Try Again";
            result.style.backgroundColor="red";
            tri.textContent="Tries left: "+tries;
            tries=7;
            cornum=Math.ceil(Math.random()*100);
        }
        else{
            tri.textContent="Tries left: "+tries;
        }
    }
    else if(input>cornum){
        result.textContent="Too High,Try Again!";
        result.style.backgroundColor="orange";
        tries--;
        if(tries===0){
            result.style.backgroundColor="red";
            result.textContent="Game Over! Try Again";
            tri.textContent="Tries left: "+tries;
            tries=7;
            cornum=Math.ceil(Math.random()*100);
        }
        else{
            tri.textContent="Tries left: "+tries;
        }
    }
    else{
        if(cornum===input){
            result.textContent="Congratulations!You got it right."
            result.style.backgroundColor="green";
            tries=7;
            cornum=Math.ceil(Math.random()*100);
            tri.textContent="Let's Play Again!";
        }
        else{
            result.textContent="Invalid Input!";
            result.style.backgroundColor="red";
            tries--;
            if(tries===0){
                result.style.backgroundColor="red";
                result.textContent="Game Over! Try Again";
                tri.textContent="Tries left: "+tries;
                tries=7;
                cornum=Math.ceil(Math.random()*100);
            }
            else{
                tri.textContent="Tries left: "+tries;
            }
        }   
    }
    
}