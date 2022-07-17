let count = 0;
let score1 = document.getElementById("score-el");
let score2 = document.getElementById("score2-el");


function home1(){
    count += 1;
    score1.textContent = count;

}
function home2(){
    count += 2;
    score1.textContent = count;
}
function home3(){
    count += 3;
    score1.textContent = count;
}

function guest1(){
    count += 1;
    score2.textContent = count;

}
function guest2(){
    count += 2;
    score2.textContent = count;
}
function guest3(){
    count += 3;
    score2.textContent = count;
}