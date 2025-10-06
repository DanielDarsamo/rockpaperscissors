let humanScore=0;
let computerScore= 0;

function getComputerChoice(result){
    result=Math.floor(Math.random() * 3);
    if(result==0){
        return "Rock";
    } else if( result==1){

        return "Paper";
    }
    else{

        return "Scissors";
    }
}

function getHumanChoice(){
    let choice= prompt("choose: Rock , Paper or Scissors");

    if(choice == "rock" ||choice =="ROCK"||choice =="Rock"){
        return "Rock";
    }
    else if (choice == "Paper" ||choice =="PAPER"||choice =="paper"){
        return "Paper";
    }
    else if (choice == "Scissor" ||choice =="SCISSORS"||choice =="scissors"){
        return "Scissors";
    }
    else{
        return "invalid option";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Invalid") {
        return "Invalid choice. Please choose Rock, Paper, or Scissors.";
      }
    
      if (humanChoice === computerChoice) {
        return `Tie! You both chose ${humanChoice}.`;
      } 

    else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
      ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
      } 
      else {
        computerScore++;
        return `Computer wins! ${computerChoice} beats ${humanChoice}.`;
      }
    }
    function playGame() {
        const rounds = 5;
      
        for (let i = 0; i < rounds; i++) {
          const humanSelection = getHumanChoice();
          const computerSelection = getComputerChoice();
      
          console.log(`Round ${i + 1}:`);
          console.log(playRound(humanSelection, computerSelection));
          console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
          console.log("-----------------------");
        }
      
        console.log("Final Results:");
        if (humanScore > computerScore) console.log("🎉 You won the game!");
        else if (computerScore > humanScore) console.log("💻 Computer won the game!");
        else console.log("🤝 It's a tie!");
      }
      
      playGame();

  

