'use strict';

var chess_models = require('./chess');
var Chessman = chess_models.Chessman;
var ChessmanState = chess_models.ChessmanState;
var Tile = chess_models.Tile;
var Performance = chess_models.Performance;

function Player(id, name) {
    this.id = id;
    this.name = name;
    this.performance = null;
    this.kill = [];
    this.die = [];
}

function GameManager() {
    this.size = 16;
    this.chessmen = [];
    this.chessboard = [];
    this.lastChoose = [];
    this.step = 0;
    this.message = "";
}

GameManager.prototype = {
    setup: function () {
        this.chessmen = [];
        this.chessboard = [];
        this.lastChoose = [];
        this.player1 = new Player(1, "玩家1");
        this.player2 = new Player(2, "玩家2");
        this.message = "";
        this.step = 0;
        this.generateChessmen();
        return this.generateChessboard();
    },

    generateChessmen: function () {
        this.chessmen.push(new Chessman(Tile.ELEPHANT, Performance.GREEN));
        this.chessmen.push(new Chessman(Tile.LION, Performance.GREEN));
        this.chessmen.push(new Chessman(Tile.TIGER, Performance.GREEN));
        this.chessmen.push(new Chessman(Tile.LEOPARD, Performance.GREEN));
        this.chessmen.push(new Chessman(Tile.WOLF, Performance.GREEN));
        this.chessmen.push(new Chessman(Tile.DOG, Performance.GREEN));
        this.chessmen.push(new Chessman(Tile.CAT, Performance.GREEN));
        this.chessmen.push(new Chessman(Tile.MOUSE, Performance.GREEN));

        this.chessmen.push(new Chessman(Tile.ELEPHANT, Performance.RED));
        this.chessmen.push(new Chessman(Tile.LION, Performance.RED));
        this.chessmen.push(new Chessman(Tile.TIGER, Performance.RED));
        this.chessmen.push(new Chessman(Tile.LEOPARD, Performance.RED));
        this.chessmen.push(new Chessman(Tile.WOLF, Performance.RED));
        this.chessmen.push(new Chessman(Tile.DOG, Performance.RED));
        this.chessmen.push(new Chessman(Tile.CAT, Performance.RED));
        this.chessmen.push(new Chessman(Tile.MOUSE, Performance.RED));
        return this.chessmen;
    },

    generateChessboard: function() {
        this.flushChessmen();

        this.chessboard = [];

        var row = [];
        for (var i = 0; i < this.chessmen.length; i++) {
            if (i !== 0 && i % 4 === 0) {
                this.chessboard.push(row);
                row = [];
            }
            //在棋盘中的位置x,y
            this.chessmen[i].setLocation(this.chessboard.length, i);
            //添加到棋盘
            row.push(this.chessmen[i]);
            if (i + 1 === this.chessmen.length)
                this.chessboard.push(row);
        }
        return this.chessboard;
    },
    flushChessmen: function () {
        this.chessmen.sort(function () {
            return 0.5 - Math.random();
        })
    },

    //判断棋盘该位置是否有棋子
    existChessman: function (location) {
        var chess = this.chessboard[location[0]][location[1]];
        return chess !== undefined || chess !== null;
    },

    //是否已经选择了一个棋子
    existChoose: function () {
        return this.lastChoose !== undefined && this.lastChoose.length === 2;
    },

    //记录选择的棋子
    chooseChessman: function (location) {
        var chessman = this.chessboard[location[0]][location[1]];
        if (this.canOperateChessman(chessman)) {
            chessman.setState(ChessmanState.CHOOSE);
            this.lastChoose = location;
        } else {
            this.message = "这不是你的牌";
        }
    },

    //清除记录的 已选择的棋子
    clearChoose: function () {
        this.lastChoose = [];
    },

    cancelChooseChessman: function (location) {
        var chessman = this.chessboard[location[0]][location[1]];
        chessman.setState(ChessmanState.OPEN);
        this.clearChoose();
    },

    openChessman: function (location) {
        var chessman = this.chessboard[location[0]][location[1]];
        chessman.setState(ChessmanState.OPEN);

        //开局第一步
        if (this.step === 0) {
            this.player1.performance = chessman.performance;
            if (chessman.performance === Performance.RED)
                this.player2.performance = Performance.GREEN;
            else if (chessman.performance === Performance.GREEN)
                this.player2.performance = Performance.RED;
        }

        this.step += 1;
        return this.step === 1;
    },

    getCurrentPlayer: function () {
        if (this.step % 2 === 0)
            return this.player1;
        else
            return this.player2;
    },

    player1Turn: function () {
        return this.getCurrentPlayer().id === this.player1.id;
    },

    player2Turn: function () {
        return this.getCurrentPlayer().id === this.player2.id;
    },

    canOperateChessman: function (chessman) {
        return this.getCurrentPlayer().performance === chessman.performance;
    },

    getChessman: function (location) {
        return this.chessboard[location[0]][location[1]];
    },


    canEat: function (attackerLocation, attackLocation) {
        if (this.isNear(attackerLocation, attackLocation)) {
            var attacker = this.getChessman(attackerLocation);
            var attacked = this.getChessman(attackLocation);
            console.log("1-属于:" + attacker.performance + "level: " + attacker.level);
            console.log("2-属于:" + attacked.performance + "level: " + attacked.level);

            if (attacker.isFree() && attacked.isFree()) {
                if (attacker.performance === attacked.performance) {
                    this.message = "自己人!";
                    return false;
                }

                //大象可以吃老鼠，老鼠可以吃大象的情况
                if ((attacker.level === Tile.ELEPHANT && attacked.level === Tile.MOUSE)
                    || (attacker.level === Tile.MOUSE && attacked.level === Tile.ELEPHANT))
                    return true;

                if (attacker.level > attacked.level) {
                    this.message = "快逃吧，人家比你厉害!";
                    return false;
                }
                return true;
            } else {
                this.message = "牌没有翻开!";
                return false;
            }
            // return (attacker.isFree() && attacked.isFree() && attacker.performance !== attacked.performance && attacker.level <= attacked.level);
        } else {
            this.message = "位置不相邻!";
            return false;
        }
    },
    eat: function (attackLocation) {
        var attackerLocation = this.lastChoose;
        if (this.canEat(attackerLocation, attackLocation)) {
            var attacker = this.getChessman(attackerLocation);
            var attacked = this.getChessman(attackLocation);

            if (attacker.level === attacked.level) {
                attacker.setState(ChessmanState.DEAD);
                attacked.setState(ChessmanState.DEAD);

                this.chessboard[attackLocation[0]][attackLocation[1]] = [];
                this.chessboard[attackerLocation[0]][attackerLocation[1]] = [];

                this.player1.die.push(attacker.name);
                this.player1.kill.push(attacked.name);
                this.player2.die.push(attacker.name);
                this.player2.kill.push(attacked.name);
            } else {
                attacker.setState(ChessmanState.OPEN);
                attacker.setLocation(attackLocation[0], attackLocation[1]);
                attacked.setState(ChessmanState.DEAD);

                this.chessboard[attackLocation[0]][attackLocation[1]] = attacker;
                this.chessboard[attackerLocation[0]][attackerLocation[1]] = [];

                if (this.player1Turn()) {
                    this.player1.kill.push(attacked.name);
                    this.player2.die.push(attacked.name);
                } else if (this.player2Turn()){
                    this.player1.die.push(attacked.name);
                    this.player2.kill.push(attacked.name);
                }
            }

            this.clearChoose();
            this.step += 1;

            return true;
        } else {
            return false;
        }
    },

    isNear: function (location1, location2) {
        return (Math.abs(location1[0] - location2[0]) === 1 && location1[1] === location2[1]
            || Math.abs(location1[1] - location2[1]) === 1 && location1[0] === location2[0]);
    },

    moveTo: function (destLocation) {
        var srcLocation = this.lastChoose;
        if (this.isNear(srcLocation, destLocation)) {
            this.chessboard[destLocation[0]][destLocation[1]] = this.getChessman(srcLocation);
            this.chessboard[srcLocation[0]][srcLocation[1]] = [];

            this.getChessman(destLocation).setState(ChessmanState.OPEN);
            this.clearChoose();
            this.step += 1;

            return true;
        } else {
            this.message = "位置不相邻!";
            return false;
        }
    }

};

module.exports = GameManager;
