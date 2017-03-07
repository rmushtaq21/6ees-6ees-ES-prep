class RetiredForagerBee extends ForagerBee {
  constructor(age, color) {
    super();

    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';

    this.forage = () => {
      return 'I am too old, let me play cards instead';
    }

    this.gamble = (treasure) => {
      this.treasureChest.push(treasure);
    }
  }
};
