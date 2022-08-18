'use strict';

var ChessState = {
    CLOSE: "close",
    OPEN: "open",
    DEAD: "dead",
    CHOOSE: "choose"
};

var Tile = {
    ELEPHANT: 1,
    LION: 2,
    TIGER: 3,
    LEOPARD: 4,
    WOLF: 5,
    DOG: 6,
    CAT: 7,
    MOUSE: 8,
    properties: {
        1: {id: 1, name: "大象",url:"https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/catchess/10.png?sign=54b1daf5b252a109e672530989cfe248&t=1639165910"},
        2: {id: 2, name: "狮子",url:"https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/catchess/8.png?sign=2e457a6cfeca0df4efc5cd3651ffbcca&t=1639165892"},
        3: {id: 3, name: "老虎",url:"https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/catchess/6.png?sign=a42fde54e169f854eaead6ff84e76d61&t=1639165874"},
        4: {id: 4, name: "豹子",url:"https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/catchess/5.png?sign=87d4280eee0402983f5a462073510960&t=1639165858"},
        5: {id: 5, name: "狼",url:"https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/catchess/4.png?sign=f8f8e6e146bcb34cb30b757642d19811&t=1639165834"},
        6: {id: 6, name: "狗",url:"https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/catchess/3.png?sign=ee7e1bbfcfdcaccc90201c24252eeacc&t=1639165815"},
        7: {id: 7, name: "猫",url:"https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/catchess/2.png?sign=19f05709758ccb29d6b4d1faa67a4c42&t=1639165764"},
        8: {id: 8, name: "鼠",url:"https://636c-cloud1-2gz8am4t82a25e05-1308305151.tcb.qcloud.la/catchess/1.png?sign=0a9bf194f4d4467d6393e16fda6cba20&t=1639165732"}
    }
};

var Performance = {
    RED: "red",
    GREEN: "green"
};

function Chessman(tile, performance) {
    this.id = Tile.properties[tile].id;
    this.name = Tile.properties[tile].name;
    this.performance = performance;
    this.level = this.id;
    this.location = [0, 0];
    this.state = ChessState.CLOSE;
    this.show = this.isShow();
}

Chessman.prototype = {

    setLocation: function (x, y) {
        this.location = [x, y];
    },
    getX: function () {
        return this.location[0];
    },
    getY: function () {
        return this.location[1];
    },
    setState: function (state) {
        this.state = state;
        this.show = this.isShow();
    },
    canMove: function () {
        return this.state === ChessState.OPEN;
    },
    isOpen: function () {
        return this.state === ChessState.OPEN;
    },
    isChoose: function () {
        return this.state === ChessState.CHOOSE;
    },
    isClosed: function () {
        return this.state === ChessState.CLOSE;
    },
    isDead: function () {
        return this.state === ChessState.DEAD;
    },
    isShow: function () {
        return this.state === ChessState.OPEN || this.state === ChessState.CHOOSE;
    },
    isFree: function () {
        return this.state === ChessState.OPEN || this.state === ChessState.CHOOSE;
    }

};

module.exports.Chessman = Chessman;
module.exports.ChessmanState= ChessState;
module.exports.Tile= Tile;
module.exports.Performance= Performance;

