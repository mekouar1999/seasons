class Card {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    toString() {
        return this.id;
    }
}

module.exports = Card;