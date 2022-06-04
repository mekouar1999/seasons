const Room = require('../models/room');

class RoomService {
    constructor(maxRoomSize) {
        if (maxRoomSize == undefined) maxRoomSize = 2;
        this.maxRoomSize = maxRoomSize;
        this.rooms = [];
    }

    newRoom() {
        this.currentRoom = new Room(this.maxRoomSize);
        this.rooms.push(this.currentRoom);
        this.rooms[this.currentRoom.id] = this.currentRoom;
        return this.currentRoom.id;
    }

    room(id) {
        return this.rooms[id];
    }

    newPlayer(player) {
        if (this.currentRoom == undefined) {
            this.newRoom();
        }
        else if (this.currentRoom.isFull()) {
            this.newRoom();
        }
        this.currentRoom.add(player);
        //player.id = this.currentRoom.size();
        return this.currentRoom;
    }

    join(player) {
        let room = this.rooms[player.roomId];
        if (room == undefined) {
            return null;
        }
        /*else if (room.isFull()) {
            return null;
        }*/
        room.add(player);
        //player.id = room.size();
        return room;
    }
}

module.exports = RoomService;