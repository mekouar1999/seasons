class Dice {
    constructor(id, color, ...action) {
        this.id = id;
        this.color = color;
        this.action = action;
        this.selected = false;
    }
}

module.exports = Dice;