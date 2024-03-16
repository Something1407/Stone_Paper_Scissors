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
        // Calling a check function
        checkWinner(this.innerHTML, computerChoice);

        // Changing the pictures
        playerHand.src = `assets/${this.innerHTML}.png`;
        computerHand.src = `assets/${computerChoice}.png`;
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
      alert("Computer Wins The Whole Game");
    }
    else if (pScore == 10) {
      pScore = 0;
      cScore = 0;
      alert("Bhai Jeet Gaiye Party Kab de Raha hai");
    }
    else {
      return 0;
    }
  }


  playMatch();
  startGame();
};
// starting the game
game();
