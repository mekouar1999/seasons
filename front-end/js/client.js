class Client {
    constructor() {
        // Récupérer les paramètres eventuels de l'URL
        this.queryString = window.location.search;
        this.urlParams = new URLSearchParams(this.queryString);
        this.player = {
            id: 1,
            username: "",
            socketId: "",
            roomId: this.getParam('room'),
            host: true,
            turn: true,
            selectedDice: 0
        }
        this.game = new Game();


        this.elements();
        this.socket = io();
        this.events = new Events(this);
        this.actions = new Actions(this);
        
        if (this.player.roomId) {
            login();
        }
    }

    elements() {
        this.info = document.getElementById('info');
        this.room = document.getElementById('room');
        this.usernameInput = document.getElementById('username');
        this.linkToShare = document.getElementById('link-to-share');
        this.host = document.getElementById('host');
        this.turn = document.getElementById('turn');
        this.playerId = document.getElementById('player-id');
        this.playerName = document.getElementById('player-name');
        this.status = document.getElementById('status');
        this.playersList = document.getElementById('players-list');
        this.formLogin = document.getElementById('form-login');

        this.pageTitle = document.getElementById('page-title');
        this.cards = document.getElementById('cards');
        this.sourceCards = document.getElementById('source-cards');

        this.toolbar = document.getElementById('toolbar');
        this.playerTool = document.getElementById('t-player');
        this.turnTool = document.getElementById('t-turn');
        this.rollDiceTool = document.getElementById('t-roll-dice');
        this.terminateStageTool = document.getElementById('t-terminate-stage');
        this.playDiceTool = document.getElementById('t-play-dice');
        this.gameMessageTool = document.getElementById('t-game-message');

        this.gameComponent = document.getElementById('game');
        this.pawnSeasons = document.getElementById('pawn-seasons');
        this.pawnSeasons.x0 = 290;
        this.pawnSeasons.y0 = 130;
        this.pawnSeasonsYear = document.getElementById('pawn-seasons-year');
        this.pawnSeasonsYear.x0 = 220;
        this.pawnSeasonsYear.y0 = 280;
        this.seasonsEnd = document.getElementById('seasons-end');
        this.winner = document.getElementById('winner');
    }

    getParam(name) {
        return this.urlParams.get(name);
    }

    on(event, listener) {
        this.socket.on(event, listener);
    }

    emit(event, data) {
        this.socket.emit(event, data);
    }

    setTurn(id) {
        if (this.player.id == id) {
            this.player.turn = true;
        }
        else {
            this.player.turn = false;
        }
        for (let p of this.game.players) {
            if (p.id == id) {
                p.turn = true;
            }
            else {
                p.turn = false;
            }
        }
        this.updateTurn();
    }

    updateTurn() {
        if (this.player.turn) {
            this.turn.innerHTML = "C'est ton tour de jouer";
            this.turnTool.innerHTML = "C'est ton tour de jouer";
        }
        else {
            let p = this.game.players.find(p => p.turn == true);
            this.turnTool.innerHTML = `C'est au tour de <b>${p.username}</b> de jouer`;
        }
    }

    isMyTurn() {
        return this.player.turn;
    }

    selectDice(id) {
        this.game.selectDice(id);
    }

    getDice(id) { // get dice by id
        return this.game.getDice(id);
    }

    dicesNotSelectedCount() {
        return this.game.dicesNotSelectedCount();
    }

    getMySelectedDice() {
        return this.getDice(this.player.selectedDice);
    }

    notSelectedDice() {
        return this.game.notSelectedDice();
    }

    clearDices() {
        this.game.clearDices();
    }
}

const client = new Client();
const actions = client.actions;