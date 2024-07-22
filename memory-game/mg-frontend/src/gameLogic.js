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
    if (!this.checkClick(key)) {
      this.setScore(this.score + 1);
    } else {
      console.log("Game Over");
      if (this.score + 1 > this.highScore) {
        this.setHighScore(this.score);
      }
      // reset state
      this.score = 0;
      this.setScore(this.score);
      this.setGameStarted(false);
    }
  }
  async fetchCards() {
    const cards = await fetch("http://localhost:8000/cards");
    const jsonCards = await cards.json();

    let gameCards = await jsonCards.map((c) => {
      return { ...c, clicked: false, key: crypto.randomUUID() };
    });

    this.setCards(gameCards);
  }
}

export { GameLogic };
