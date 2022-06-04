class Actions {
    constructor(client) {
        this.client = client;
    }

    sendData() {
        this.client.player.username = this.client.usernameInput.value;
        this.client.player.socketId = this.client.socket.id;
        console.log('send data : ', this.client.player);
        this.client.emit('player-data', this.client.player);
    }

    requestDices() {
        client.rollDiceTool.style.display = 'none';
        client.playDiceTool.style.display = '';
        
        console.log('>>>> requestDices : ', this.client.player)
        this.client.emit('request-dices', this.client.player);
    }

    selectDice(id) {
        
        if (this.client.dicesNotSelectedCount() > 1) {
            if (this.client.player.turn) {
                diceSelectedSound.play();

                message('Dé N° ' + id, 'green', 5000); // mettre l img du dé en question

                this.client.player.selectedDice = id;
                this.client.game.applyDiceEffects(id);
                client.player.result = client.game.result;
                this.client.emit('select-dice', client.player);
                refreshResult();
                client.terminateStageTool.style.display = 'block';

                if (client.game.getDiceInfo(id).card) {
                    client.emit('request-card', this.client.player);
                }
            }
            else {
                message('Ce n\'est pas votre tour!!', 'red', 5000);
                errorSound.play();
            } 
        }
        else {
            errorSound.play();
        }
    }

    invokeCard(index) {
        //if (this.client.player.turn) {
        let card = client.game.handCard(index);
        let invoke = client.game.checkInvokeConstraints(card.id);
        if (invoke.status) {
            cardInvokedSound.play();
            client.game.removeHandCard(index);
            message('Carte invoquée : ' + card.id, 'green', 10000);
            hideCardInfo();
            client.game.invokeCard(card.id);
            refreshResult();
        }
        else {
            message(invoke.message, 'red', 5000);
            errorSound.play();
        }
        /*}
        else {
            message('Ce n\'est pas votre tour!!', 'red', 5000);
            errorSound.play();
        } */
    }

    terminateStage() {
        if (this.client.dicesNotSelectedCount() > 1) {
            this.client.player.notSelectedDice = null;
        }
        else {
            let d = this.client.notSelectedDice();
            let info = getDiceInfo(d.dice.color, d.dice.id, d.side);
            ///message('Le Marqueur avance de ' + info.marker, 'green', 10000);
            this.client.player.notSelectedDice = info;
        }
        this.client.emit('terminate-stage', client.player);

        client.terminateStageTool.style.display = 'none';
        client.playDiceTool.style.display = 'block';
        cleanDashboard();
    }
}