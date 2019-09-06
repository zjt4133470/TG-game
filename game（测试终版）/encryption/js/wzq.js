var TRANSVERSE = 14;
var VERTICAL = 14;
var LEFT = 1;
var RIGHT = 2;
var TOP = 3;
var BOTTOM = 4;
var LEFT_TOP = 5;
var LEFT_BOTTOM = 6;
var RIGHT_TOP = 7;
var RIGHT_BOTTOM = 8;
var Chess = function () {
    var owner = '';
    var victory = false;
    this.getOwner = function () {
        return owner;
    };
    this.setOwner = function (value) {
        owner = value;
    };
    this.getVictory = function () {
        return victory;
    }
    this.setVictory = function (value) {
        victory = value;
    }
}
var Board = function () {
    var chessBoard = [];
    var isGameOver = false;
    this.getChess = function (point) {
        var x = point.x, y = point.y;
        return chessBoard[y][x];
    }
    this.setChess = function (chess, point) {
        var x = point.x, y = point.y;
        chessBoard[y][x] = chess;
    }
    this.setVictory = function (points) {
        for (var i = 0; i < points.length; i++) {
            for (var j = 0; j < points[i].length; j++) {
                var chess = this.getChess(points[i][j]);
                chess.setVictory(true);
            }
        }
    }
    this.getAvaiablePoints = function () {
        var avaiable = new Array;
        for (var y = 0; y <= VERTICAL; y++) {
            for (var x = 0; x <= TRANSVERSE; x++) {
                if (chessBoard[y][x]) continue;
                var point = {x: x, y: y};
                avaiable.push(point);
            }
        }
        return avaiable;
    }
    this.getMap = function () {
        var map = {};
        for (var y = 0; y <= VERTICAL; y++) {
            for (var x = 0; x <= TRANSVERSE; x++) {
                var chess = chessBoard[y][x];
                var value = '';
                if (chess) {
                    value = chess.getOwner();
                    if (chess.getVictory()) value += '_star';
                }
                else {
                    value = '';
                }
                map[x + ',' + y] = value;
            }
        }
        return map;
    }
    this.gameOver = function () {
        return isGameOver = true;
    }
    this.isGameOver = function () {
        return isGameOver;
    }
    this.getNextPoint = function (point, direction) {
        var next = {x: point.x, y: point.y};
        switch (direction) {
            case LEFT :
                next.x -= 1;
                break;
            case RIGHT:
                next.x += 1;
                break;
            case TOP:
                next.y -= 1;
                break;
            case BOTTOM:
                next.y += 1;
                break;
            case LEFT_TOP:
                next.x -= 1 , next.y -= 1;
                break;
            case RIGHT_TOP:
                next.x += 1 , next.y -= 1;
                break;
            case LEFT_BOTTOM:
                next.x -= 1 , next.y += 1;
                break;
            case RIGHT_BOTTOM:
                next.x += 1 , next.y += 1;
                break;
            default :
                alert('方向错误');
        }
        return next;
    }
    var initialize = function () {
        for (var i = 0; i <= VERTICAL; i++) chessBoard.push([]);
    }
    initialize();
}
var Compute = function (role) {
    var directions = [LEFT, TOP, RIGHT, BOTTOM, LEFT_TOP, LEFT_BOTTOM, RIGHT_TOP, RIGHT_BOTTOM];
    var score = 0;
    var self = this;
    this._computeScore = function (direction) {
        throw new Error('未实现');
    }
    this._convertToPattern = function (chesslist) {
        return role.convertToPattern(chesslist)
    }
    this.compute = function (point) {
        score = 0;
        for (var i = 0, direction; direction = directions[i++];) {
            score += this._computeScore(point, direction);
        }
    }
    this.getScore = function (refPoint) {
        return score;
    }
}
var Five = function (role) {
    Compute.call(this, role);
    var computeScore1 = function (refPoint, direction) {
        var predefined = 'IIII';
        var chesslist = role.find(refPoint, direction, 4);
        var pattern = role.convertToPattern(chesslist);
        if (predefined == pattern) return true;
        return false;
    }
    var computeScore2 = function (refPoint, direction) {
        var prev = role.find(refPoint, direction, 2);
        var next = role.find(refPoint, role.reverseDirection(direction), 2);
        var prevPattern = role.convertToPattern(prev);
        var nextPattern = role.convertToPattern(next);
        if (prevPattern == 'II' && nextPattern == 'II') return true;
        return false;
    }
    var computeScore3 = function (refPoint, direction) {
        var prev = role.find(refPoint, direction, 3);
        var next = role.find(refPoint, role.reverseDirection(direction), 1);
        var prevPattern = role.convertToPattern(prev);
        var nextPattern = role.convertToPattern(next);
        if (prevPattern == 'III' && nextPattern == 'I') return true;
        return false;
    }
    this._computeScore = function (refPoint, direction) {
        if (computeScore1(refPoint, direction) || computeScore2(refPoint, direction) || computeScore3(refPoint, direction))
            return 100000;
        else return 0;
    }
}
var Four_Live = function (role) {
    Compute.call(this, role);
    this._computeScore = function (refPoint, direction) {
        var score = 0;
        var prev = role.find(refPoint, direction, 4);
        var next = role.find(refPoint, role.reverseDirection(direction), 1);
        var prevPattern = this._convertToPattern(prev);
        var nextPattern = this._convertToPattern(next);
        if (prevPattern == 'III0' && nextPattern == '0') score = 10000;
        return score;
    }
}
var Four_Live1 = function (role) {
    Compute.call(this, role);
    this._computeScore = function (refPoint, direction) {
        var prev = role.find(refPoint, direction, 3);
        var next = role.find(refPoint, role.reverseDirection(direction), 2);
        var prevPattern = this._convertToPattern(prev);
        var nextPattern = this._convertToPattern(next);
        if (prevPattern == 'II0' && nextPattern == 'I0') return 10000;
        else return 0;
    }
}
var Tree_Live = function (role) {
    Compute.call(this, role);
    this._computeScore = function (refPoint, direction) {
        var score = 0;
        var prev = role.find(refPoint, direction, 3);
        var next = role.find(refPoint, role.reverseDirection(direction), 2);
        var prevPattern = this._convertToPattern(prev);
        var nextPattern = this._convertToPattern(next);
        if (prevPattern == 'II0' && nextPattern == '00')
            score += 1000;
        return score;
    }
}
var Tree_Live1 = function (role) {
    Compute.call(this, role);
    this._computeScore = function (refPoint, direction) {
        var prev = role.find(refPoint, direction, 2);
        var next = role.find(refPoint, role.reverseDirection(direction), 3);
        var prevPattern = this._convertToPattern(prev);
        var nextPattern = this._convertToPattern(next);
        if (prevPattern == 'I0' && nextPattern == 'I00')
            return 1000
        else return 0;
    }
}
var Two_Live = function (role) {
    Compute.call(this, role);
    this._computeScore = function (refPoint, direction) {
        var prev = role.find(refPoint, direction, 3);
        var next = role.find(refPoint, role.reverseDirection(direction), 2);
        var prevPattern = this._convertToPattern(prev);
        var nextPattern = this._convertToPattern(next);
        if (prevPattern == 'I00' && nextPattern == '00') return 100;
        else return 0;
    }
}
var One_Live = function (role) {
    Compute.call(this, role);
    this._computeScore = function (refPoint, direction) {
        var prev = role.find(refPoint, direction, 3);
        var next = role.find(refPoint, role.reverseDirection(direction), 3);
        var prevPattern = this._convertToPattern(prev);
        var nextPattern = this._convertToPattern(next);
        if (prevPattern == '000' && nextPattern == '000') return 10;
        else return 0;
    }
}
var Four_End = function (role) {
    Compute.call(this, role);
    this._computeScore = function (refPoint, direction) {
        var prev = role.find(refPoint, direction, 3);
        var next = role.find(refPoint, role.reverseDirection(direction), 1);
        var prevPattern = this._convertToPattern(prev);
        var nextPattern = this._convertToPattern(next);
        if (prevPattern == 'III' && nextPattern == '0') return 150;
        else return 0;
    }
}
var Role = function (board) {
    var computers = [];
    var self = this;
    var isVictory = false;
    this.isVictory = function () {
        return isVictory;
    }
    // this.gold=function () {
    //     return 10
    // }
    var getScore = function (point) {
        var score = 0;
        for (var i = 0, computer; computer = computers[i++];) {
            computer.compute(point);
            score += computer.getScore();
        }
        var result = {score: score, point: point};
        return result;
    }
    var getScoreList = function () {
        var result = [];
        var avaiablePoints = board.getAvaiablePoints();
        for (var i = 0, point; point = avaiablePoints[i++];) {
            result.push(getScore(point));
        }
        return result;
    }
    this.getCode = function () {
        throw new Error('未实现');
    }
    this.getPeak = function () {
        var scoreInfo = getScoreList();
        scoreInfo.sort(function (a, b) {
            return b.score - a.score;
        });
        return scoreInfo[0];
    }
    this.convertToPattern = function (chesslist) {
        var pattern = '';
        if (!chesslist) return '';
        for (var i = 0; i < chesslist.length; i++) {
            var chess = chesslist[i];
            if (chess == undefined) pattern += '0';
            else if (chess.getOwner() == this.getCode()) pattern += 'I';
            else pattern += 'Y';
        }
        return pattern;
    }
    this.reverseDirection = function (direction) {
        switch (direction) {
            case LEFT :
                return RIGHT;
            case RIGHT :
                return LEFT;
            case TOP :
                return BOTTOM;
            case BOTTOM :
                return TOP;
            case LEFT_TOP :
                return RIGHT_BOTTOM;
            case RIGHT_BOTTOM :
                return LEFT_TOP;
            case RIGHT_TOP :
                return LEFT_BOTTOM;
            case LEFT_BOTTOM :
                return RIGHT_TOP;
            default :
                alert('方向错误');
        }
    }
    this._checkGameOver = function (point) {
        var leftRight = findVictory(point, LEFT);
        var topBottom = findVictory(point, TOP);
        var leftTopRightBottom = findVictory(point, LEFT_TOP);
        var rightTopLeftBottom = findVictory(point, RIGHT_TOP);
        var array = [leftRight, topBottom, leftTopRightBottom, rightTopLeftBottom];
        var victory = [];
        for (var i = 0; i < array.length; i++) {
            if (array[i].length >= 5) victory.push(array[i]);
        }
        if (victory.length > 0) {
            board.gameOver();
            board.setVictory(victory);
            isVictory = true;
        }
        if (board.getAvaiablePoints().length == 0) board.gameOver();
    }
    var isLicitPoint = function (point) {
        return point.x >= 0 && point.y >= 0 && point.x <= TRANSVERSE && point.y <= VERTICAL
            && board.getChess(point) && board.getChess(point).getOwner() == self.getCode()
    }
    var findVictory = function (refPoint, direction) {
        var reverse = self.reverseDirection(direction);
        var result = [];
        var nextPoint;
        var currPoint = {x: refPoint.x, y: refPoint.y};
        while (true) {
            nextPoint = board.getNextPoint(currPoint, direction);
            if (!isLicitPoint(nextPoint)) break;
            currPoint = {x: nextPoint.x, y: nextPoint.y};
        }
        while (true) {
            result.push(currPoint);
            nextPoint = board.getNextPoint(currPoint, reverse);
            if (!isLicitPoint(nextPoint)) break;
            currPoint = {x: nextPoint.x, y: nextPoint.y};
        }
        return result;
    }
    this.find = function (point, direction, deep) {
        var refPoint = {x: point.x, y: point.y};
        var result = new Array;
        var index = 1;
        var nextPoint;
        while (index <= deep) {
            nextPoint = board.getNextPoint(refPoint, direction);
            if (nextPoint.x < 0 || nextPoint.y < 0 ||
                nextPoint.x > TRANSVERSE || nextPoint.y > VERTICAL) return null;
            var chess = board.getChess(nextPoint);
            if (chess) chess.point = {x: nextPoint.x, y: nextPoint.y};
            result.push(chess);
            refPoint = nextPoint;
            index++;
        }
        return result;
    }
    var initialize = function () {
        computers.push(new Five(self));
        computers.push(new Four_Live(self));
        computers.push(new Tree_Live(self));
        computers.push(new Four_Live1(self));
        computers.push(new Tree_Live1(self));
        computers.push(new Two_Live(self));
        computers.push(new One_Live(self));
        computers.push(new Four_End(self));
    }
    initialize();
}
var Machine = function (board, rival) {
    Role.call(this, board);
    this.setChess = function () {
        if (board.isGameOver()) return;
        var myPeak = this.getPeak();
        var rivalPeak = rival.getPeak();
        var peak;
        if (myPeak.score >= rivalPeak.score) peak = myPeak;
        else peak = rivalPeak;
        var chess = new Chess();
        chess.setOwner(this.getCode());
        board.setChess(chess, peak.point);
        this._checkGameOver(peak.point);
    }
    this.getCode = function () {
        return 'machine';
    }
}
var Person = function (board, rival) {
    Role.call(this, board);
    this.setChess = function (x, y) {
        if (board.isGameOver()) return;
        var point = new Object;
        point.x = x;
        point.y = y;
        var chess = new Chess()
        chess.setOwner(this.getCode());
        board.setChess(chess, point);
        this._checkGameOver(point);
    }
    this.getCode = function () {
        return 'person';
    }
}
var UIBase = function () {
    var self = this;
    this._id = '$UI' + (++UIBase.index);
    this._globalKey = "";
    this.getHTML = function () {
        return "";
    }
    var setGlobalKey = function () {
        var magic = '$UI_Items';
        self._globalKey = 'window.' + magic + '.' + self._id;
        window[magic] = window[magic] || {};
        window[magic][self._id] = self;
    }
    var formatHTML = function (html) {
        html = html.replace(/\$\$/g, self._globalKey);
        html = html.replace(/&&/g, self._id);
        return html;
    }
    var initUIBase = function () {
        setGlobalKey();
    }
    this.renderHTML = function () {
        return formatHTML(this.getHTML());
    }
    this.getDOM = function () {
        var dom = document.getElementById(this._id)
        return dom;
    }
    initUIBase();
}
UIBase.index = 0;
var ChessUI = function (board, placeholder) {
    UIBase.call(this);
    this.setChess = function () {
    }
    this.getHTML = function () {
        var html = '';
        var map = board.getMap();
        for (var key in map) {
            var onclick = '';
            var className = map[key];
            if (className == '') onclick = '$$._setChess(' + key + ')';
            html += '<div onclick="' + onclick + '" class="' + className + '"></div>';
        }
        return html;
    }
    this.draw = function () {
        var html = this.renderHTML();
        document.getElementById(placeholder).innerHTML = html;
    }
    this._setChess = function (x, y) {
        this.setChess(x, y);
    }
    this.draw();
}

function getMSIEVersion() {
    var regex = /MSIE([^;]+)/;
    var userAgent = navigator.userAgent;
    var result = regex.exec(userAgent);
    if (result) return parseInt(result[1]);
}

function initGame() {
    $(".board").css({
        backgroundImage: "none",
        background:"#fff"
    });
    $(".ipt").css({
        display: "none"
    });
    if($(".ipt").attr('abc')==1){
        prompt1("500", "2000", false, "很遗憾，没有获得金币");
        // var gold_key = localStorage.getItem("gold_key");
        // var gold_keys = Number(gold_key);
        // gold_key = gold_keys + 10;
        // localStorage.setItem("gold_key", gold_key);
        // $(".gold_key").html(gold_key);
        // console.log(gold_keys)
    }else if(($(".ipt").attr('abc')==0)){
        prompt1("500", "2000", true, "恭喜你获得50金币");
        var gold_key = localStorage.getItem("gold_key");
        var gold_keys = Number(gold_key);
        gold_key = gold_keys + 50;
        localStorage.setItem("gold_key", gold_key);
    }else {

    }
    var version = getMSIEVersion();
    if (version && version <= 8) {
        alert('请使用非IE浏览器(ie9、10除外)进行游戏(google chrome 、firefox等 )');
        return;
    }
    var board = new Board();
    var person = new Person(board);
    var machine = new Machine(board, person);
    var chessUI = new ChessUI(board, 'board');
    chessUI.setChess = function (x, y) {
        person.setChess(x, y);
        machine.setChess();
        chessUI.draw();
        if (board.isGameOver()) {
            if (person.isVictory()) {
                prompt("500", "2000", true, "您获得了胜利");
                $(".ipt").css({
                    display: "block"
                }).attr("abc","0");
            }
            // alert('您获得了胜利')
            else if (machine.isVictory()) {
                prompt("500", "2000", false, "机器获得了胜利");
                $(".ipt").css({
                    display: "block"
                }).attr("abc","1");
            }
            // alert('机器获得了胜利');
            else {
                prompt("500", "2000", false, "游戏结束，胜负未分");
                $(".ipt").css({
                    display: "block"
                });

            }
            // alert('游戏结束，胜负未分');
        }
    }
    if (Math.floor(Math.random() * 10) % 2) {
// alert('机器执棋');
        prompt("500", "2000", false, "机器执棋");
        machine.setChess();
        chessUI.draw();
    }
    else {
// alert('您执棋');
        prompt("500", "2000", true, "您执棋");
    }
}
