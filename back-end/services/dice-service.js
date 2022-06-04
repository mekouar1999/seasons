const Dice = require('../models/dice');

class DiceService {
    constructor() {
        this.blue = [];
        this.green = [];
        this.red = [];
        this.yellow = [];
        for (let i = 1; i <= 5; i++) {
            this.blue.push(new Dice(i, "blue", "1", "2", "3", "4", "5", "6"));
            this.green.push(new Dice(i, "green", "1", "2", "3", "4", "5", "6"));
            this.red.push(new Dice(i, "red", "1", "2", "3", "4", "5", "6"));
            this.yellow.push(new Dice(i, "yellow", "1", "2", "3", "4", "5", "6"));
        }
    }

    get(count, color) {
        let t = [];
        for (let i = 0; i < count; i++) {
            let side = Math.floor(Math.random() * 6) + 1;
            t.push({dice : this[color][i], side, selected : false});
        }
        return t;
    }
}

module.exports = DiceService;