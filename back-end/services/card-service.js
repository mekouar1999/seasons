const Card = require('../models/card');

class CardService {
    constructor() {
        this.cards = [];
        for (let i = 1; i <= 50; i++) {
            this.cards.push(new Card(i));
        }
        this.randomize();
    }

    randomize() {
        this.dist = [...this.cards];
        for (let i = 0; i < 50; i++) {
            let c1 = Math.floor(Math.random() * 50);
            let c2 = Math.floor(Math.random() * 50);
            console.log('c1 = ' + c1 + ', c2 = ' + c2);
            let tmp = this.dist[c1];
            this.dist[c1] = this.dist[c2];
            this.dist[c2] = tmp;
        }
        console.log(">>> " + this.dist);
    }

    get(count) {
        if (count == undefined) count = 1;
        if (count <= 0 || count > this.dist.length) count = 1;
        let t = [];
        for (let i = 0; i < count; i++) {
            t.push(this.dist.pop());
        }
        return t;
    }
}

module.exports = CardService;