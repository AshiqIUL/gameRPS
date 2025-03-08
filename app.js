let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let msg = document.querySelector("#msg");
let you = document.querySelector("#you");
let comp = document.querySelector("#comp");

let yourTotal = 0;
let compTotal = 0;
let yourChoice;

rock.addEventListener("click", () => {
    yourChoice = 0;
    playGame();
});

paper.addEventListener("click", () => {
    yourChoice = 1;
    playGame();
});

scissor.addEventListener("click", () => {
    yourChoice = 2;
    playGame();
});

function playGame() {
    let computerChoice = Math.floor(Math.random() * 3);
    console.log(`Your Choice: ${yourChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);

    if (yourChoice === computerChoice) {
        console.log("It's a tie");
        msg.innerText = "It's a tie";
        msg.style.backgroundColor="blue";
        msg.style.color="white";
    } 
    
    else if (
        (yourChoice === 0 && computerChoice === 2) || 
        (yourChoice === 1 && computerChoice === 0) || 
        (yourChoice === 2 && computerChoice === 1)    
    ) {
        console.log("You win!");
        msg.innerText = "You win";
        msg.style.backgroundColor="green";
        msg.style.color="white";
        yourTotal++;
    } 
    
    else {
        console.log("Computer wins!");
        msg.innerText = "Computer wins";
        msg.style.backgroundColor="red";
        msg.style.color="white";
        compTotal++; 
    }

    you.innerText = yourTotal;
    comp.innerText = compTotal;
}
