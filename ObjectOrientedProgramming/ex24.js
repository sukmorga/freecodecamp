function Bird() {
    let weight = 15;

    this.getWeight = () => {
        return weight;
    }
}

let duck = new Bird();
duck.getWeight()