
let shipActions = {
    hit() {
        if (this.marks < this.length) {
        return this.marks += 1;
        }
    },
    isSunk() {
        if (this.marks == this.length) {
            this.sunk = true;
        }
        else if (this.marks < this.length) {
            this.sunk  = false;
        }
        return this.sunk;
    }
 }

function ship(length, begCo, type, direc) {
    let realShip = Object.create(shipActions);
    realShip.length = length;
    realShip.sunk = false;
    realShip.marks = 0;
    realShip.begCoord = begCo;
    realShip.type = type;
    realShip.direc = direc;

    if (realShip.direc == 'Y') {
    realShip.endCoord = [realShip.begCoord[0],realShip.begCoord[1]-length+1];
    }
    else if (realShip.direc == 'X') {
    realShip.endCoord = [realShip.begCoord[0]+length-1,realShip.begCoord[1]];
    }
  
    return realShip;
}

let boardActions = {
    build() {
        let boardSize = 10;
        for (let i=0; i<boardSize; ++i) {
            for (let j=0; j<boardSize; ++j) {
                let square = [i,j];
                this[square] = {};
                let properties = this[square];
                properties.marked = null;
                properties.docked = false;
                properties.shipID = null;
            }
        }
        return this;
    }
}

function gameBoard() {
    let board = Object.create(boardActions);
    board.build();
    board.shipsSet = [];
    board.status = 'floating';
    board.plType = null;

    board.place = function(length, begCo, type, direc) {
        let newShip = ship(length, begCo, type, direc);
        
        if ((newShip.endCoord[0]>9) || (newShip.endCoord[1]>9)) {
            return false;
        }

        if ((newShip.endCoord[0]<0) || (newShip.endCoord[1]<0)) {
            return false;
        }


        let start = newShip.begCoord;
        let end = newShip.endCoord;

        if (newShip.direc == 'Y') {
            let x = start[0];

            for (let i=start[1]; i>(end[1]-1); --i) {
                let square = [x,i];
                let tile = this[square];
                if (tile.docked == true) {
                    return false;
                }
            }

            for (let i=start[1]; i>(end[1]-1); --i) {
                let square = [x,i]
                let tile = this[square];
                tile.docked = true;
                tile.shipID = newShip.type;
            }
        }
        
        if (newShip.direc == 'X') {
            let y = start[1];

            for (let i=start[0]; i<(end[0]+1); ++i) {
                let square = [i,y];
                let tile = this[square];
                console.log(this);
                if (tile.docked == true) {
                    return false;
                }
            }

            for (let i=start[0]; i<(end[0]+1); ++i) {
                let square = [i,y]
                let tile = this[square];
                tile.docked = true;
                tile.shipID = newShip.type;
            }
        }

        this.shipsSet.push(newShip);

        return newShip;
    }

    board.receiveAttack = function(coord) {
        let target = this[coord];
        if (target.docked == true) {
            target.marked = 'hit';
            let name = target.shipID;
            let fleet = this.shipsSet;

            for (let i=0; i< fleet.length; ++i) {
                if (fleet[i].type == name) {
                    fleet[i].hit();
                    fleet[i].isSunk();
                }
            }
        }

        if (target.docked == false) {
            target.marked = 'miss';
        }

        return target.marked;
    }

    board.setSunk = function() {
        let count = 0;
        let fleet = this.shipsSet;
        for (let i=0; i< fleet.length; ++i) {
            if (fleet[i].sunk == true) {
                count += 1;
            }
        }
        if (count == 5) {
            this.status = 'sunk';
        }

        return this.status;
    }

    return board;
}

function createPlayer(type, board) {
    let player = {};
    player.type = type;
    player.board = board;
    player.moves = [];
    let possMoves = [[-1,-1],[-1,0],[-1,1],[1,-1],[1,0],[1,1]];


    player.compAttack = function(gameBoard) {
        if (this.moves.length > 0) {
            let lastMove = this.moves[this.moves.length-1];
            let lastcoord = Object.keys(lastMove)[0];
            let coordarr = lastcoord.split(',');
            let coordnum = [];
            for (const coord of coordarr) {
                let coordfilt = Number(coord);
                coordnum.push(coordfilt);
            }
            let lastStatus = Object.values(lastMove)[0];
            if (lastStatus == 'hit') {
                let adjMoves = [];
                for (const poss of possMoves) {
                    let newMove = [];
                    let newX = coordnum[0] + poss[0];
                    let newY = coordnum[1] + poss[1];
                    newMove.push(newX);
                    newMove.push(newY);
                    adjMoves.push(newMove);
                }
                let legalMoves = [];
                for (const adj of adjMoves) {
                    if ((0 <= adj[0] && adj[0] <= 9) && (0 <= adj[1] && adj[1] <= 9)) {
                        if (gameBoard[adj].marked == null) {
                            legalMoves.push(adj);
                        }
                    }
                }
                if (legalMoves.length > 0) {
                let chosInd = Math.floor(Math.random()*(legalMoves.length));
                let chosFin = legalMoves[chosInd];
                let smartMove = gameBoard.receiveAttack(chosFin);
                let pubSmart = {[chosFin]:smartMove};
                this.moves.push(pubSmart);
                return smartMove;
                }
            }
        }

        let boardSize = 10;
        let unMarked = [];
        for (let i=0; i<boardSize; ++i) {
            for (let j=0; j<boardSize; ++j) {
                let square = [i,j];
                let tile = gameBoard[square];
                if (tile.marked == null) {
                    unMarked.push(square);
                }
            }
        }
        let length = unMarked.length;
        let index = Math.floor(Math.random()*length);
        let chosen = unMarked[index];
        let status = gameBoard.receiveAttack(chosen);
        let pubStat = {[chosen]:status};
        this.moves.push(pubStat);
        return status;
    }

    return player;
}

function gameLoop (coord, p1, p2) {

    let cAtStat = p2.board.receiveAttack(coord);

    let targetid = `${coord[0]}c,${coord[1]}c`;
    let targetcell = document.getElementById(targetid);

    if (cAtStat == 'hit') {
        targetcell.style.backgroundColor = '#ff6961';
        targetcell.classList.remove('canhov');
        let sunkStatus = p2.board.setSunk();
        if (sunkStatus == 'sunk') {
            return sunkStatus;
        }
    }

    if (cAtStat == 'miss') {
        targetcell.style.backgroundColor = '#77DD77';
        targetcell.classList.remove('canhov');
    }

    let pAtStat = p2.compAttack(p1.board);
    let latestMove = p2.moves[p2.moves.length-1];
    let latestcoord = Object.keys(latestMove)[0];
    let coordarr = latestcoord.split(',');
    let coordnum = [];
    for (const coord of coordarr) {
        let coordfilt = Number(coord);
        coordnum.push(coordfilt);
    }
    let latestid = `${coordnum[0]}p,${coordnum[1]}p`;
    let latestCell = document.getElementById(latestid);

    if (pAtStat == 'hit') {
        latestCell.style.backgroundColor = '#ff6961';
        let sunkStatus = p1.board.setSunk();
        if (sunkStatus == 'sunk') {
            return sunkStatus;
        }
    }

    if (pAtStat == 'miss') {
        latestCell.style.backgroundColor = '#77DD77';
    }

    return 'floating';
}


export{shipActions, ship, boardActions, gameBoard, createPlayer, gameLoop}