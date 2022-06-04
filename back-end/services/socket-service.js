const Server = require('socket.io');

class SocketService {
    constructor(server, roomService, cardService, diceService) {
        this.server = server;
        this.roomService = roomService;
        this.cardService = cardService;
        this.diceService = diceService;
        this.io = Server(server);
        this.io.on('connection', socket => this.connectionOk(socket));
    }

    connectionOk(socket) {
        console.log('User connected with id = ' + socket.id);
        socket.on('player-data', player => this.newPlayer(socket, player));
        socket.on('request-dices', player => this.requestDices(socket, player));
        socket.on('select-dice', player => this.selectDice(socket, player));
        socket.on('terminate-stage', player => this.terminateStage(socket, player));
        socket.on('request-card', player => this.sendCard(socket, player));
        //this.io.to(socket.id).emit('connection-ok', 'SocketService (Connection Ok) : ' +  socket.id); // ou encore
        socket.emit('connection-ok', 'SocketService (Connection Ok) : ' +  socket.id);
    }

    newPlayer(socket, player) {
        console.log('>>> player data : ', player);
        let room = null;
        if (!player.roomId) {
            room = this.roomService.newPlayer(player);
            //this.io.to(player.socketId).emit('join-room', player);
        }
        else {
            room = this.roomService.join(player);
        }
        if (player.id == 1) {
            player.host = player.turn = true;
        }
        else {
            player.host = player.turn = false;
        }

        socket.emit('join-room', player);
        
        if (room != null) {
            socket.join(room.id);
            if (room.isFull()) {
                console.log('>> Start Game!!!')
                this.io.to(room.id).emit('start-game', room.players);
                
                for (let player of room.players) {
                    let cards = this.cardService.get(9);
                    this.io.to(player.socketId).emit('random-cards', cards);
                    console.log('send cards to : ' + player.username + ' => ' + cards);
                }
            }
        }
    }

    requestDices(socket, player) {

        console.log("### player>>", player);
        let room = this.roomService.room(player.roomId);

        if (player.turn) {
            let color = room.currentSeason();

            let dices = this.diceService.get(room.players.length + 1, color);
            room.dices = dices;
            //this.io.to(player.socketId).emit('request-dices-ok', dices);
            //console.log('send dices to : ' + player.username + ' => ', dices);

            room.setReady(player.id, true);
            console.log('## ' + player.username + '> all ready : ', room.allReady());
        }
        else {
            room.setReady(player.id, true);
            console.log('## ' + player.username + '> all ready : ', room.allReady());
            if (room.allReady()) {
                //this.io.to(player.socketId).emit('request-dices-ok', room.dices);
            }
        }
        if (room.allReady()) {
            for (let p of room.players) {
                console.log('send dices to : ' + p.username + ' => ', room.dices);
                this.io.to(p.socketId).emit('request-dices-ok', room.dices);
            }
        }
    }

    selectDice(socket, player) {
        console.log("### player>>", player);
        let room = this.roomService.room(player.roomId);
        room.getPlayerById(player.id).result = player.result;

        let data = { selectedDice: player.selectedDice, turn: player.id  % room.size() + 1};
        this.io.to(room.id).emit('dice-selected', data);
    }

    terminateStage(socket, player) {
        console.log("### terminateStage>>", player);
        let room = this.roomService.room(player.roomId);
        room.terminate(player.id);
        if (player.notSelectedDice != null) {
            if (room.allTerminate()) {
                room.resetTerminate();
                room.applyMarker(player.notSelectedDice.marker);
                let info = player.notSelectedDice;
                info.year = room.year;
                info.month = room.month;
                info.season = room.currentSeason();
                this.io.to(room.id).emit('terminate-stage', info);
                if (room.year <= 3) { 
                    this.nextDices(room);
                }
                else {
                    this.endParty(room);
                }
            }
        }
    }

    nextDices(room) {
        let color = room.currentSeason();
        let dices = this.diceService.get(room.players.length + 1, color);
        let next = room.nextTurn();
        room.dices = dices;
        this.io.to(room.id).emit('next-dices', {"dices" : room.dices, "turn": room.players[next].id});
        
    }

    sendCard(socket, player) {
        let cards = this.cardService.get(1);
        this.io.to(player.socketId).emit('request-card-ok', cards[0]);
    }

    endParty(room) {
        this.io.to(room.id).emit('end-party', room.winner());
    }
}

module.exports = SocketService;