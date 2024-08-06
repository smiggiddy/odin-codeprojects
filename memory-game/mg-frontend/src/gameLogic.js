class GameLogic {
  constructor(
    cards,
    setCards,
    score,
    setScore,
    highScore,
    setHighScore,
    setGameStarted,
    setMessage,
    setButtonText,
  ) {
    this.cards = cards;
    this.setCards = setCards;
    this.score = score;
    this.setScore = setScore;
    this.highScore = highScore;
    this.setHighScore = setHighScore;
    this.setGameStarted = setGameStarted;
    this.setMessage = setMessage;
    this.setButtonText = setButtonText;
  }

  handleClick(key) {
    this.checkClickResult(key);

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => card.classList.add("flip", "card-back", "hidden"));

    const tempCards = this.cards.map((card) => {
      if (card.key === key) {
        card.clicked = true;
      }
      return card;
    });
    this.setCards(tempCards);
    this.randomArrayOrder();
    setTimeout(() => {
      cards.forEach((card) =>
        card.classList.remove("flip", "card-back", "hidden"),
      );
    }, 1000);
  }

  randomArrayOrder() {
    const randomArr = [...this.cards];

    let len = randomArr.length,
      t,
      i;

    while (len) {
      i = Math.floor(Math.random() * len--);
      t = randomArr[len];
      randomArr[len] = randomArr[i];
      randomArr[i] = t;
    }
    this.setCards(randomArr);
  }

  checkClick(key) {
    const cardClicked = this.cards.filter(
      (item) => item.key === key && item.clicked === true,
    );

    return cardClicked.length > 0;
  }

  checkClickResult(key) {
    if (this.score + 1 === this.cards.length) {
      this.setMessage("You won!\n12/12 right");
      this.setButtonText("Play again?");
      this.resetGame();
      return;
    }

    // go through game
    if (!this.checkClick(key)) {
      this.setScore(this.score + 1);
    } else {
      this.handleLoss();
    }
  }
  handleLoss() {
    this.setMessage(
      `Game Over!\n${this.score}/${this.cards.length} answers correct!`,
    );
    this.setButtonText("Play again?");
    if (this.score > this.highScore) {
      this.setHighScore(this.score);
    }
    this.resetGame();
  }

  resetGame() {
    // reset state
    this.score = 0;
    this.setScore(this.score);
    this.setGameStarted(false);
  }
}

export { GameLogic };
