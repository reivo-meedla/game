const text = document.getElementById("text1");
const rockbutton = document.getElementById("rockbutton");
const paperbutton = document.getElementById("paperbutton");
const scissorsbutton = document.getElementById("scissorsbutton");

const choices = {
    1: 'Rock',
    2: 'Paper',
    3: 'Scissors'
}

const determineVictor = () => {
    console.log('lol')
};

const whatever = (plrMove)  => {
    let oppMove = Math.floor(Math.random()*3)+1
    text.innerHTML = `You picked: ${choices[plrMove]} <br>
    Opponent picked: ${choices[oppMove]}`
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