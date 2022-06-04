const express = require('express');
const http = require('http');
const SocketService = require('./services/socket-service');
const RoomService = require('./services/room-service');
const CardService = require('./services/card-service')
const DiceService = require('./services/dice-service')

class Controller {
    constructor(port) {
        if (port == undefined) port = 8080;
        this.port = port;
        this.app = express();
        this.server = http.createServer(this.app);

        this.roomService = new RoomService(2);
        this.cardService = new CardService();
        this.diceService = new DiceService();
        this.socketService = new SocketService(this.server, this.roomService, this.cardService, this.diceService);

        this.config();
        this.init();
    }

    start() {
        this.server.listen(this.port, () => {
            console.log(`Listening on http://localhost:${this.port}/`);
        })
    }

    config() {
        this.app.use(express.static('front-end'));
        this.views = {root : __dirname + '/../front-end/views/'};
    }

    init() {
        this.view('/', 'seasons.html');
    }

    view(name, target) {
        this.app.get(name, (req, res) => {
            res.sendFile(target, this.views);
        })
    }
}

module.exports = Controller;

