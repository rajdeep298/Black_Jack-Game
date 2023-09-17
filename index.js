var firstcard; 
var secondcard;
var sum=firstcard+secondcard;
var array=[firstcard,secondcard];
var bj=false;
var alive=true;

document.getElementById("result").textContent="Want to play a round?🤗"

document.getElementById("reset").disabled=true;
document.getElementById("new_card").disabled=true;
function start() {
    firstcard==random_number(1,13);
    secondcard==random_number(1,13);
    document.getElementById("sum").innerText="Sum:"+sum;
    //document.querySelector("#sum").innerText="Sum:"+sum; 

    document.getElementById("cards").innerText="Cards:"+array/*firstcard+" "+secondcard*/;
    document.getElementById("start").remove();
    document.getElementById("new_card").disabled=false;
    check();
}
function check() {
    if(sum<=20)
    {
        document.getElementById("result").textContent="Do you want to draw a new card?😃";
    } 
    else if(sum===21)
    {
        document.getElementById("result").textContent="You've got the Blackjack!🥳";

        //document.getElementById("start").disabled = true;
        //document.getElementById("new_card").disabled = true;

        document.getElementById("new_card").remove();
        bj=true;

        document.getElementById("reset").disabled=false;
    } 
    else
    {
        document.getElementById("result").textContent="You're out of the game!😭";
        alive=false;

        //document.getElementById("start").disabled = true;
        //document.getElementById("new_card").disabled = true;

        document.getElementById("new_card").remove();

        document.getElementById("reset").disabled=false;
    } 
}

function new_card(){
    var thirdcard=random_number(1,13);
    sum+=thirdcard;
    array.push(thirdcard);

    document.getElementById("sum").innerText="Sum:"+sum;
    document.getElementById("cards").innerText="Cards:"+array;

    //document.getElementById("cards").innerText="New Card:"+thirdcard;
    check();
}
function random_number(min,max){
    let random= Math.floor(Math.random()*(max-min) + min);
    if(random>10){
        return 10;
    }
    else if(random==1){
        return 11;
    }
    else{
        return random;
    }
}
function reset(){
    location.reload();
}