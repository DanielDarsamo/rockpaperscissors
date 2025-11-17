let computerScore=0;
let humanScore=0;

    function getComputerChoice(choice){
        choice=Math.floor(Math.random()*3);

        switch (choice){
            case 0: return "Rock";
            case 1: return "Paper";
            case 2: return "Scissors";
            
            default : console.log("oops"); break;
        };
    }

    function getHumanChoice(){
        let choice=prompt("Enter your choice: Rock , Paper or Scissors");
        if(choice === "rock"|| choice === "Rock"|| choice === "ROCK"|| choice==="roCK") {
            return "Rock";

        }
        else if (choice === "Paper"|| choice === "paper"|| choice === "PAPER"|| choice==="paPer"){
            return "Paper";
        }
        else if (choice === "scissor"|| choice === "scissors"|| choice === "SCISSORS"|| choice==="scisSOR"){
            return "Scissors";
        }
        else{
            return "invalid choice bro";
        }
    }

        
        function playRound(humanChoice, computerChoice) {
            console.log(`You chose: ${humanChoice}`);
            console.log(`Computer chose: ${computerChoice}`);
        
            if (humanChoice === computerChoice) {
                humanScore++;
                computerScore++;
                return "It's a tie!";
            } 
            else if (
                (humanChoice === "Rock" && computerChoice === "Scissors") ||
                (humanChoice === "Paper" && computerChoice === "Rock") ||
                (humanChoice === "Scissors" && computerChoice === "Paper")
            ) {
                humanScore++;
                return "You win this round!";
            } 
            else if (
                (humanChoice === "Rock" && computerChoice === "Paper") ||
                (humanChoice === "Paper" && computerChoice === "Scissors") ||
                (humanChoice === "Scissors" && computerChoice === "Rock")
            ) {
                computerScore++;
                return "You lose this round!";
            } 
            else {
                return "Invalid choice! Round skipped.";
            }
        }
        
        
      

      function playGame()
      
        {
            let rounds = 5;
        
            for (let i = 0; i < rounds; i++) {
                const humanSelection = getHumanChoice();
                const computerSelection = getComputerChoice();
                const result = playRound(humanSelection, computerSelection);
                console.log(result);
            }
        
            console.log("Game over!");
            console.log(`Final Scores — Human: ${humanScore}, Computer: ${computerScore}`);
        
            if (humanScore > computerScore) {
                console.log("You won the game! Well done!");
            } else if (humanScore < computerScore) {
                console.log("You lost the game. Better luck next time!");
            } else {
                console.log("It's a tie game!");
            }
        }
    playGame();