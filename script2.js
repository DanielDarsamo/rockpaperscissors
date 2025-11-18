let computerScore=0; //pc score 
let humanScore=0; // human 

    function getComputerChoice(choice){
        choice=Math.floor(Math.random()*3); // in order to produce 0,1,2 

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
    } // filter of how the user can log different ways of scissors , rock ,paper

        
        function playRound(humanChoice, computerChoice) {
            console.log(`You chose: ${humanChoice}`); // prints the human choice 
            console.log(`Computer chose: ${computerChoice}`); // prints the computer choice 
        
            if (humanChoice === computerChoice) {
                humanScore++;
                computerScore++;
                return "It's a tie!";
            } // conditional for a tie 
            else if (
                (humanChoice === "Rock" && computerChoice === "Scissors") ||
                (humanChoice === "Paper" && computerChoice === "Rock") ||
                (humanChoice === "Scissors" && computerChoice === "Paper")
            ) {
                humanScore++; // point is added to human
                return "You win this round!";
            } // logic case that handles only win cases for human 
            else if (
                (humanChoice === "Rock" && computerChoice === "Paper") ||
                (humanChoice === "Paper" && computerChoice === "Scissors") ||
                (humanChoice === "Scissors" && computerChoice === "Rock")
            ) {
                computerScore++; //point is added to pc 
                return "You lose this round!";
            } // logic case that handles only lost cases for human 
            else {
                return "Invalid choice! Round skipped.";
            } // in case something is not entered properly  ( some mispelling too)
        }
        
        
      

      function playGame()
      
        {
            let rounds = 5;
        
            for (let i = 0; i < rounds; i++) {
                const humanSelection = getHumanChoice();
                const computerSelection = getComputerChoice();
                const result = playRound(humanSelection, computerSelection);
                console.log(result);
            } // loop to handle the 5 rounds of game play 
        
            console.log("Game over!");
            console.log(`Final Scores — Human: ${humanScore}, Computer: ${computerScore}`);
            // human score and computer accumulate here 
            if (humanScore > computerScore) {
                console.log("You won the game! Well done!");
            } else if (humanScore < computerScore) {
                console.log("You lost the game. Better luck next time!");
            } else {
                console.log("It's a tie game!");
            }
        } // coonditional of to see who won , lost , draw 


    playGame(); // call the function 