console.log("something");



const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    let playButton = document.querySelector(".intro button");
    let gameIntro = document.querySelector(".intro");
    let match = document.querySelector(".match");

    // Initialize the Game
    playButton.addEventListener("click", () => {
      gameIntro.classList.add("fadeOut");
      match.classList.add("fadeIn");
      match.classList.remove("fadeOut");
      document.querySelector(".player-score").style.color = "red";
      document.querySelector(".computer-score").style.color = "cyan";
    });
  };
  // play match
  let playMatch = () => {
    let options = document.querySelectorAll(".option button");
    let playerHand = document.querySelector(".player-hand");
    let computerHand = document.querySelector(".computer-hand");

    let computerOptions = ["rock", "paper", "scissor"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        // Computer's Turn
        let computerNumber = Math.floor(Math.random() * 3);
        let computerChoice = computerOptions[computerNumber];

        document.querySelector(".player-hand").style.animation = "shakePlayer 1s ease-in-out";
        document.querySelector(".computer-hand").style.animation = "shakeComputer 1s ease-in-out";
        setTimeout(() => {
          // Calling a check function
          checkWinner(this.innerHTML, computerChoice);
          // Changing the pictures
          playerHand.src = `assets/${this.innerHTML}.png`;
          computerHand.src = `assets/${computerChoice}.png`;
          document.querySelector(".player-hand").style.animation = "";
          document.querySelector(".computer-hand").style.animation = "";
        }, 1000);
      });
    });
  };
  let checkWinner = (playerChoice, computerChoice) => {
    let winner = document.querySelector(".winner");
    // we are running function if it will be tie
    if (playerChoice === computerChoice) {
      winner.innerHTML = "Tie! Hojaiye Aur ek Bar ? ⚔️"
      return 0;
    }
    if (playerChoice === "rock" && computerChoice === "scissor") {
      winner.innerHTML = "👏 Bhai Jeet Gaye Taliyan! 😃"
      pScore++;
      updateScore();

    }
    else if (playerChoice === "scissor" && computerChoice === "paper") {
      winner.innerHTML = "👏 Bhai Jeet Gaye Taliyan! 😃"
      pScore++;
      updateScore();
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
      winner.innerHTML = "👏 Bhai Jeet Gaye Taliyan! 😃"
      pScore++;
      updateScore();

    }
    else {
      winner.innerHTML = "Opps Computer Wins! koi bat Nahi Agli Bar Jitoge 🥲"
      cScore++;
      updateScore();
    }
  }
  let updateScore = () => {
    let playerScore = document.querySelector(".player-score p");
    let computerScore = document.querySelector(".computer-score p");
    playerScore.innerHTML = pScore;
    computerScore.innerHTML = cScore;
    if (cScore == 10) {
      pScore = 0;
      cScore = 0;
      // alert("Computer Wins The Whole Game")
      document.querySelector(".computerWins").style.zIndex = "1"
      let computerWins = document.querySelector(".computerWins button");
      computerWins.addEventListener("click", () => {
        location.reload();
      })

    }
    else if (pScore == 10) {
      pScore = 0;
      cScore = 0;
      // alert("Bhai Jeet Gaiye Party Kab de Raha hai");
      document.querySelector(".playerWins").style.zIndex = "1"
      let playerWins = document.querySelector(".playerWins button");
      playerWins.addEventListener("click", () => {
        location.reload();
      })

    }
    else {
      return 0;
    }
  }


  playMatch();
  startGame();
};
// starting the game
let playerName = prompt("Enter your name: ");
document.querySelector(".player-score h2").innerHTML = playerName;
game();

