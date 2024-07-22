class GameLogic {
  constructor(
    cards,
    setCards,
    score,
    setScore,
    highScore,
    setHighScore,
    setGameStarted,
  ) {
    this.cards = cards;
    this.setCards = setCards;
    this.score = score;
    this.setScore = setScore;
    this.highScore = highScore;
    this.setHighScore = setHighScore;
    this.setGameStarted = setGameStarted;
  }

  handleClick(key) {
    this.updateScore(key);
    const tempCards = this.cards.map((card) => {
      if (card.key === key) {
        card.clicked = true;
      }
      return card;
    });
    this.setCards(tempCards);
    this.randomArrayOrder();
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

  updateScore(key) {
    if (this.score + 1 === this.cards.length) {
      alert("You won! 12/12 right");
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
    alert(
      `Game Over! ${this.score + 1}/${this.cards.length} answers correcet!`,
    );
    if (this.score + 1 > this.highScore) {
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
