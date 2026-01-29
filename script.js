
      
      let score = JSON.parse(localStorage.getItem("score")) || {
        wins: 0,
        loose: 0,
        tie: 0,
      };

      refresh();

     
      function refresh() {
        document.querySelector(".js-score").innerHTML =
          `Wins: ${score.wins} Losses: ${score.loose} Tie: ${score.tie}`;
      }

      function playgame(parameter1) {
        const computerMove = pickCompmove();
        let result = "";

        if (parameter1 === "rock") {
          if (computerMove === "rock") {
            result = "Tie";
          } else if (computerMove === "paper") {
            result = "You loose";
          } else {
            result = "You Win";
          }
        } else if (parameter1 === "scissors") {
          if (computerMove === "rock") {
            result = "You loose";
          } else if (computerMove === "paper") {
            result = "You Win";
          } else {
            result = "Tie";
          }
        } else if (parameter1 === "paper") {
          if (computerMove === "rock") {
            result = "You Win";
          } else if (computerMove === "paper") {
            result = "Tie";
          } else {
            result = "You loose";
          }
        }

        if (result === "You Win") {
          score.wins += 1;
        } else if (result === "You loose") {
          score.loose += 1;
        } else {
          score.tie += 1;
        }

        localStorage.setItem("score", JSON.stringify(score));

        refresh();
        document.querySelector(".js-result").innerHTML = result;
        document.querySelector(".js-moves").innerHTML =
          `You picked <img src=" images/${parameter1}.png" class="move1"> Computer picked <img src=" images/${computerMove}.png" class="move1">`;
      }

      function pickCompmove() {
        const randomNumber = Math.random();

        if (randomNumber < 1 / 3) {
          return "rock";
        } else if (randomNumber < 2 / 3) {
          return "paper";
        } else {
          return "scissors";
        }
      }
    