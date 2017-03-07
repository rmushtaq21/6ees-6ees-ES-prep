class HoneyMakerBee extends Bee {
  constructor(age, job) {
    super();

    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;

    this.makeHoney = () => {
      this.honeyPot += 1;
    }

    this.giveHoney = () => {
      this.honeyPot -= 1;
    }
  }
};
