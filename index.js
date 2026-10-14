const text = document.getElementById("text1");
const rockbutton = document.getElementById("rockbutton");
const paperbutton = document.getElementById("paperbutton");
const scissorsbutton = document.getElementById("scissorsbutton");


const choices = {
    1: 'Rock',
    2: 'Paper',
    3: 'Scissors'
}

const comp = (inp) => { // tagastab sisendi vastu võitja indeksi
    if (inp + 1 <= 3) {return inp + 1}
    else return 1;
}

const determineVictor = (plr, opp) => { // otsustab mängija ja vastase otsuste põhjal võitja
    if (plr === comp(opp)) {
        return 'YOU WIN!'}
    else if (opp === comp(plr)) {
        return 'YOU LOSE!'}
    else return 'DRAW!'
};

const whatever = (plrMove)  => { // midaiganes
    let oppMove = Math.floor(Math.random()*3)+1
    text.innerHTML = `You picked: ${choices[plrMove]} <br>
    Opponent picked: ${choices[oppMove]} <br>
    ${determineVictor(plrMove, oppMove)}`
};

rockbutton.addEventListener('click', function() {
    whatever(1)
}); 

paperbutton.addEventListener('click', function() {
    whatever(2)
}); 

scissorsbutton.addEventListener('click', function() {
    whatever(3)
});