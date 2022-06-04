class Events {
    constructor(client) {
        this.client = client;

        client.on('connection-ok', (msg) => this.connectionOk(msg));
        client.on('join-room', player => this.joinRoom(player));
        client.on('start-game', players => this.startGame(players));
        client.on('random-cards', cards => this.receiveCards(cards));
        client.on('request-dices-ok', dices => this.receiveDices(dices));
        client.on('dice-selected', data => this.diceSelected(data));
        client.on('terminate-stage', info => this.terminateStage(info));
        client.on('next-dices', data => this.nextDices(data));
        client.on('request-card-ok', (card) => this.receiveCard(card));
        client.on('end-party', (winner) => this.endParty(winner));
    }

    connectionOk(msg) {
        this.client.info.innerHTML = msg;
        this.client.status.innerHTML = 'Connexion Bien établie';
    }

    joinRoom(player) {
        this.client.player.id = player.id;
        this.client.player.host = player.host;
        this.client.player.turn = player.turn;
        console.log('>>>>> joinRoom (player) : ', this.client.player);
        this.client.player.roomId = player.roomId;
    
        this.client.room.innerHTML = player.roomId;
        if (player.host) {
            this.client.linkToShare.innerHTML = `${window.location.href}?room=${player.roomId}`;
        }
        else {
            this.client.linkToShare.innerHTML = '';
        }

        this.client.playerId.innerHTML = player.id;
        this.client.playerName.innerHTML = player.username;
        document.getElementById('player').innerHTML = player.username;
        this.client.host.innerHTML = player.host;
        this.client.turn.innerHTML = player.turn;
        this.client.status.innerHTML = "En attente d'un autre joueur!";
        this.client.playersList.innerHTML = '?';
        home();

        this.client.playerTool.innerHTML = 'Bienvenue ' + player.username;
        this.client.turnTool.innerHTML = "En attente d'un autre joueur!";
    }

    startGame(players) {
        this.client.game.players = players;
        console.log('>>>>> startGame (player) : ', this.client.player);
        this.client.status.innerHTML = 'Jeu démarré...';
        this.client.playersList.innerHTML = players.map(p => p.username).reduce((pv, cv) => pv + ', ' + cv);
        this.client.updateTurn();
        /*
        if (this.client.player.turn) {
            this.client.turn.innerHTML = "C'est ton tour de jouer";
            this.client.turnTool.innerHTML = "C'est ton tour de jouer";
        }
        else {
            let p = players.find(p => p.turn == true);
            this.client.turnTool.innerHTML = `C'est au tour de <b>${p.username}</b> de jouer`;
        }
        */
    }

    receiveCards(cards) {
        console.log('>>>>> receiveCards (player) : ', this.client.player);
        this.client.game.setCards(cards);
        this.client.pageTitle.style.display = 'none';
        this.client.cards.style.display = 'block';
        this.client.sourceCards.style.display = 'block';
        showStatus();
        this.client.game.renderCards();
    }

    receiveDices(dices) {
        dicesSound.play();
        console.log(dices);
        this.client.game.setDices(dices);
        this.client.cards.style.display = 'none';
        this.client.gameComponent.style.display = 'block';
        this.client.game.renderDices(dices);
        this.client.game.renderHandCards(); //this.client.game.renderYearCards();

        this.client.playDiceTool.style.display = 'none';
        this.client.gameMessageTool.style.display = 'block';
        putPawn({year: 1, month: 1});
    }

    diceSelected(data) {
        console.log('diceSelected : ', data)
        document.getElementById('dice-' + data.selectedDice).style.display = 'none';
        this.client.setTurn(data.turn);
        
        client.selectDice(data.selectedDice);
        if (client.dicesNotSelectedCount() == 1) {
            let d = this.client.notSelectedDice();
            message('Reste dé N° ' + d.dice.id, 'green');
            /*
            if (this.client.isMyTurn()) {
                client.terminateStageTool.style.display = 'block';
            }
            else {
                client.playDiceTool.style.display = 'block';
            }*/
        }
    }

    terminateStage(info) {
        message('Le Marqueur avance de ' + info.marker + ' mois', 'green', 10000);
        client.terminateStageTool.style.display = 'none';
        client.playDiceTool.style.display = 'none';
        putPawn(info);
        if (client.game.year < info.year && info.year <= 3) {
            client.game.setYear(info.year);
            client.game.renderHandCards();//client.game.renderYearCards();
        }
    }

    nextDices(data) {
        dicesSound.play();
        client.clearDices();
        client.game.setDices(data.dices);
        client.game.renderDices(data.dices);
        client.setTurn(data.turn);
    }

    receiveCard(card) {
        message('Carte Piochée', 'green', 5000);
        client.game.addCardToHand(card);
        client.game.renderHandCards();
        cardSelectedSound.play();
    }

    endParty(winner) {
        client.winner.innerHTML = 'Vainqueur \'' + winner.username + '\' avec : ' + winner.result.crystals + ' points';
        client.seasonsEnd.style.display = 'block';
    }
}

