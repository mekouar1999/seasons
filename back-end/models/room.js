class Room {
    constructor(max) {
        this.id = this.generateId();
        this.players = [];
        if (max == undefined) max = 2;
        this.max = max;
        this.dices = [];
        this.seasons = ['blue', 'green', 'yellow', 'red'];
        this.year = 1;
        this.month = 1;
        this.seasonIndex = 0;
        this.terminateState = [];
    }

    generateId() {
        return Math.random().toString(36).substring(2);
    }

    add(player) {
       
        this.players.push(player);
        player.roomId = this.id;
        player.id = this.players.length;
        player.ready = false;
    }

    isFull() {
        return (this.players.length >= this.max);
    }

    size() {
        return this.players.length;
    }

    currentSeason() {
        return this.seasons[this.seasonIndex];
    }

    nextSeason() {
        this.seasonIndex = (this.seasonIndex + 1) % 4;
        return this.seasons[this.seasonIndex];
    }

    get(index) {
        return this.players[index];
    }

    getPlayerById(id) {
        return this.players[id - 1];
    }

    setReady(playerId, state) {
        this.players[playerId - 1].ready = state;
    }

    allReady() {
        for(let player of this.players) {
            if (!player.ready) return false;
        }
        return true;
    }

    terminate(id) {
        this.terminateState.push(id);
    }

    allTerminate() {
        return (this.terminateState.length >= this.players.length);
    }

    resetTerminate() {
        this.terminateState = [];
    }

    applyMarker(marker) {
        this.month += marker;
        if (this.month > 12) {
            this.year += 1;
            this.month = this.month - 12;
        }
        this.seasonIndex = Math.floor( (this.month - 1) / 3 );
    }

    currentTurn() {
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].turn) {
                return i;
            }
        }
        return 0;
    }

    nextTurn() {
        let i = this.currentTurn();
        let next = (i + 1) % this.players.length;
        this.players[i].turn = false;
        this.players[next].turn = true;
        return next;
    }

    winner() {
        let w = 0;
        let score = this.players[w].result.crystals;
        for(let i = 1; i < this.players.length; i++) {
            if (this.players[i].result.crystals > score) {
               w = i;
               score = this.players[w].result.crystals;
            }
        }
        return this.players[w];
    }
}

module.exports = Room;