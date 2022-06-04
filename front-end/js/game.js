class Game {
    static cardsPath = '../images/cards/';
    static dicesPath = '../images/dices/';
    static cardsType = '.png';
    static dicesType = '.png';

    constructor() {
        this.cards = {}
        this.dices = {}
        this.year = 1;
        this.month = 1;
        this.result = {
            fire: 0,
            water: 0,
            land: 0,
            air: 0,
            invocation: 0,
            crystals: 0
        }
        this.cards.invoked = [];
    }

    setCards(cards) {
        this.cards = cards;
        this.cards.selected = 0;
        for (let i = 0; i < cards.length; i++) {
            this.cards[i].selected = false;
        }
        this.cards.dist = {year : 1, card : 1};
        this.cards.year = [[], [], []];
        this.cards.invoked = [];
    }

    selectCard(index) {
        this.cards[index].selected = true;
        this.cards.selected++;
        this.cards.year[this.cards.dist.year - 1].push(this.cards[index]);

        this.cards.hand = this.cards.year[0];
    }

    nextYear() {
        this.year++;
        if (this.year <= 3) {
            let h1 = this.cards.hand;
            let h2 = this.cards.year[this.year - 1];
            this.cards.hand = [...h1, ...h2];
        }
    }

    setYear(year) {
        if (year > this.year) {
            this.year = year;
            let h1 = this.cards.hand;
            let h2 = this.cards.year[this.year - 1];
            this.cards.hand = [...h1, ...h2];
        }
    }

    addCardToHand(card) {
        this.cards.hand.push(card);
    }

    isCardSelected(index) {
        return (this.cards[index].selected == true);
    }

    nextCard() {
        if (this.cards.dist.card < 3) {
            this.cards.dist.card++;
        }
        else {
            this.cards.dist.year++;
            this.cards.dist.card = 1;
        }
    }

    card(index) {
        return this.cards[index];
    }

    cardsCount() {
        return this.cards.length;
    }

    selectedCards() {
        return this.cards.selected;
    }

    remainingCards() {
        return this.cards.length - this.cards.selected;
    }

    renderCard(index) {
        let element = document.getElementById('s' + index);
        element.innerHTML = '<img src="' + Game.cardsPath + this.cards[index].id + Game.cardsType + '" onclick="selectCard(' + index + ')" />';
    }

    renderCards() {
        for (let i = 0; i < this.cards.length; i++) {
            this.renderCard(i);
        }
    }

    renderSelectedCard(index) {
        let element = document.getElementById('s' + this.cards.dist.year + this.cards.dist.card);
        element.innerHTML = '<img src="' + Game.cardsPath + this.cards[index].id + Game.cardsType + '" />';
    
        document.getElementById('s' + index).innerHTML = '';
    }

    renderYearCards() {
        let s = '';
        for (let card of this.cards.year[this.year - 1]) {
            let src = Game.cardsPath + card.id + Game.cardsType;
            s += '<div><img src="' + src + '" /></div>';
        }
        document.getElementById('hand-cards').innerHTML = s;
    }

    resetCards() {

    }
/*****************************************************************************************/
    renderHandCards() {
        let s = '';
        for (let index = 0; index < this.cards.hand.length; index++) {
            let card = this.cards.hand[index];
            let src = Game.cardsPath + card.id + Game.cardsType;
            s += '<div><img src="' + src + '"' 
                + ' onclick="actions.invokeCard(' + index + ')"'
                + ' onmouseover="showCardInfo(event, ' + index + ')" '
                + ' onmouseout="hideCardInfo()" /></div>';
        }
        document.getElementById('hand-cards').innerHTML = s;
    }

    handCard(index) {
        return this.cards.hand[index];
    }

    removeHandCard(index) {
        let card = this.cards.hand.splice(index, 1)[0];
        this.cards.invoked.push(card);
        this.renderHandCards();
        this.renderInvokedCards();
        return card;
    }

/*****************************************************************************************/
    renderInvokedCards() {
        let s = '';
        for (let card of this.cards.invoked) {
            let src = Game.cardsPath + card.id + Game.cardsType;
            console.log('>> ' + src)
            s += '<div><img src="' + src + '" /></div>';
        }
        document.getElementById('invoked-cards').innerHTML = s;
    }


/*****************************************************************************************/

    setDices(dices) {
        this.dices = dices;
        this.dices.selected = 0;
    }

    static getDiceSource(color, id, side) {
        return Game.dicesPath + color + '/' + id + '-' + side + Game.dicesType;
    }

    renderDices() {
        let s = '';
        for (let d of this.dices) {
            let src = Game.dicesPath + d.dice.color + '/' + d.dice.id + '-' + d.side + Game.dicesType;
            s += '<div><img src="' + src + '" id="dice-' + d.dice.id  
                + '" onclick="actions.selectDice(' + d.dice.id 
                + ')" onmouseover="showDiceInfo(event, ' + d.dice.id + ')" '
                + ' onmouseout="hideTipBox()" /></div>';
        }
        document.getElementById('dices').innerHTML = s;
    }

    renderDice(id, target) {
        let d = this.getDice(id);
        let src = Game.dicesPath + d.dice.color + '/' + d.dice.id + '-' + d.side + Game.dicesType;
        document.getElementById(target).innerHTML = '<img src="' + src + '" onmouseover="showDiceInfo(event, ' + id + ')" onmouseout="hideTipBox()" />';
    }

    clearDices() {
        document.getElementById('dices').innerHTML = '';
    }

    getDice(id) { // get dice by id
        for (let d of this.dices) {
            if (d.dice.id == id) return d;
        }
        return null;
    }

    getDiceInfo(id) {
        let d = this.getDice(id);
        return getDiceInfo(d.dice.color, d.dice.id, d.side);
    }

    selectDice(id) {
        this.dices.selected++;
        this.getDice(id).selected = true;
    }

    dicesNotSelectedCount() {
        return (this.dices.length - this.dices.selected);
    }

    notSelectedDice() {
        for (let dice of this.dices) {
            if (!dice.selected) return dice;
        }
        return null;
    }
    /********************************************/
    toInt(data) {
        let x = parseInt(data);
        if (!x) x = 0;
        return x;
    }

    applyDiceEffects(id) {
        let d = this.getDice(id);
        let info = getDiceInfo(d.dice.color, d.dice.id, d.side);
        
        this.result.fire += this.toInt(info.fire);
        this.result.water += this.toInt(info.water);
        this.result.land += this.toInt(info.land);
        this.result.air += this.toInt(info.air);
        this.result.crystals += this.toInt(info.crystals);
        this.result.invocation += this.toInt(info.invocation);

        this.result.crystallize = info.crystallize;
        this.result.diceId = id;
    }

    crystallize(element) {
        this.result.crystals += 1;
        this.result[element] -= 1;
    }

    checkInvokeConstraints(cardId) {
        const props = ['fire', 'water', 'land', 'air', 'crystals'];
        if (this.result.invocation > 0) {
            let infos = getCardInfo(cardId);
            for (let prop of props) {
                if (this.result[prop] < infos[prop]) {
                    return {status: false, message: cardsInfo.properties[prop] + ' : insuffisant!!'}
                }
            }
            return {status: true, message: 'Vous pouvez invoker cette carte!'}
        }
        else {
            return {status: false, message : 'Il vous faut au moins 1 point d\'invocation!!'} 
        }
    }

    invokeCard(cardId) {
        const props = ['fire', 'water', 'land', 'air', 'crystals'];
        this.result.invocation--;
        let infos = getCardInfo(cardId);
        for (let prop of props) {
            this.result[prop] -= infos[prop];
        }
    }
}