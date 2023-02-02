import {boardActions, gameBoard, shipActions, ship, createPlayer, gameLoop} from './script.js';



function placePage() {
    const placeMain = document.createElement('div');
    placeMain.setAttribute('id', 'placeMain');

    const headBlock = document.createElement('div');
    headBlock.setAttribute('id', 'headBlock');
    placeMain.appendChild(headBlock);

    const title = document.createElement('div');
    title.setAttribute('id', 'title');
    title.textContent = 'BATTLESHIP';
    headBlock.appendChild(title);

    const commandPlace = document.createElement('div');
    commandPlace.setAttribute('id', 'commandPlace');
    commandPlace.textContent = 'Place your Carrier';
    headBlock.appendChild(commandPlace);

    const axisContainer = document.createElement('div');
    axisContainer.setAttribute('id', 'axisContainer');
    headBlock.appendChild(axisContainer);

    const axisButton = document.createElement('button');
    axisButton.setAttribute('id', 'axisButton');
    axisButton.textContent = `Axis: X`;
    axisContainer.appendChild(axisButton);

    axisButton.addEventListener('click', function() {
        if (axisButton.textContent.includes('X')) {
            axisButton.textContent = 'Axis: Y';
        }
        else if (axisButton.textContent.includes('Y')) {
            axisButton.textContent = 'Axis: X';
        }
    })

    const gameContainer = document.createElement('div');
    gameContainer.setAttribute('id', 'gameContainer');
    placeMain.appendChild(gameContainer);

    const plGraph = document.createElement('div');
    plGraph.setAttribute('id', 'plGraph');
    gameContainer.appendChild(plGraph);

    for (let j=9; j>-1; --j) {
        for (let i=0; i<10; ++i) {
            let cell = document.createElement('div');
            cell.setAttribute('id', `${i}p,${j}p`);
            cell.className = 'cell canhov';
            plGraph.appendChild(cell);
        }
    }

    return placeMain;
    
}


function placeLoop () {
    document.addEventListener('DOMContentLoaded', function() {
        let playerBoard = gameBoard();
        let axisButton = document.getElementById('axisButton');

        let boats = [{Carrier: 5}, {Battleship: 4}, {Cruiser: 3}, {Submarine: 3}, {Destroyer: 2}];
        let commandNames = ['Battleship', 'Cruiser', 'Submarine', 'Destroyer'];
        let bigcont = document.getElementById('plGraph');
        let commandPlace = document.getElementById('commandPlace');
        let queue = [];
        queue.push(boats[0]);

            bigcont.addEventListener('click', function eventHandler(e) {
                console.log(playerBoard.shipsSet.length);
                let boatName = Object.keys(queue[0])[0];
                let boatLength = Object.values(queue[0])[0];
                let begCoord = e.target.id;
                let interim = begCoord.replace(/\[|\]/g,'');
                let interim2 = interim.replace(/\p/g,'').split(',');
                let begCoordNum = [];
                for (const coord of interim2) {
                    let coordNum = Number(coord);
                    begCoordNum.push(coordNum);
                }

                let direction; 

                if (axisButton.textContent.includes('X')) {
                    direction = 'X';
                }

                else if (axisButton.textContent.includes('Y')) {
                    direction = 'Y';
                }


                let placedShip = playerBoard.place(boatLength, begCoordNum, boatName, direction);


                if (!placedShip == false) {
                    let start = placedShip.begCoord;
                    let end = placedShip.endCoord;

                    if (placedShip.direc == 'Y') {
                        let x = start[0];
                        for (let i=start[1]; i>(end[1]-1); --i) {
                            let tile = document.getElementById(`${x}p,${i}p`);
                            tile.classList.add('docked');
                            tile.classList.remove('canhov');
                        }
                        boats.shift();
                        queue.push(boats[0]);
                        queue.shift();
                        commandPlace.textContent = `Place your ${commandNames[0]}`;
                        commandNames.shift();
                        console.log(queue);
                        if (playerBoard.shipsSet.length == 5) {
                            this.removeEventListener('click', eventHandler);
                            return playPage(playerBoard);
                        }
                    }

                    if (placedShip.direc == 'X') {
                        let y = start[1];
                        for (let i=start[0]; i<(end[0]+1); ++i) {
                            let tile = document.getElementById(`${i}p,${y}p`);
                            tile.classList.add('docked');
                            tile.classList.remove('canhov');

                        }
                        boats.shift();
                        queue.push(boats[0]);
                        queue.shift();
                        commandPlace.textContent = `Place your ${commandNames[0]}`;
                        commandNames.shift();
                        console.log(queue);
                        if (playerBoard.shipsSet.length == 5) {
                            this.removeEventListener('click', eventHandler);
                            return playPage(playerBoard);
                        }
                    }
                }
            })
            })
        }


function playPage(playerBoard) {
    let plGraph = document.getElementById('plGraph');
    for (let j=9; j>-1; --j) {
        for (let i=0; i<10; ++i) {
            let cell = document.getElementById(`${i}p,${j}p`);
            cell.classList.remove('canhov')
            ;
        }
    }
    let gameContainer = document.getElementById('gameContainer');
    gameContainer.style.gridTemplateColumns = "30vw 30vw"

    let cpuBoard = gameBoard();

    let axisContainer = document.getElementById('axisContainer');
    let commandPlace = document.getElementById('commandPlace');

    axisContainer.innerHTML = '';
    commandPlace.innerHTML = '';

    const cpuGraph = document.createElement('div');
    cpuGraph.setAttribute('id', 'cpuGraph');
    gameContainer.appendChild(cpuGraph);

    for (let j=9; j>-1; --j) {
        for (let i=0; i<10; ++i) {
            let cell = document.createElement('div');
            cell.setAttribute('id', `${i}c,${j}c`);
            cell.className = 'cell canhov';
            cpuGraph.appendChild(cell);
        }
    }

    let boats = [{Carrier: 5}, {Battleship: 4}, {Cruiser: 3}, {Submarine: 3}, {Destroyer: 2}];
    let queue = [];
    queue.push(boats[0]);


    while (cpuBoard.shipsSet.length < 5) {
        let maxcoord = 9;
        let num1 = Math.floor(Math.random()*(maxcoord+1));
        let num2 = Math.floor(Math.random()*(maxcoord+1));
        let begCoord = [num1, num2];
        console.log(begCoord);

        let dirArr = ['X','Y'];
        let maxdir = 1;
        let dirnum = Math.floor(Math.random()*(maxdir+1));
        console.log(dirnum);

        let direc = dirArr[dirnum].replace(/\[|\]/g,'');
        console.log(direc);

        let boatName = Object.keys(queue[0])[0];
        let boatLength = Object.values(queue[0])[0];

        let placedShip = cpuBoard.place(boatLength, begCoord, boatName, direc);

        if (!placedShip == false) {

                    boats.shift();
                    queue.push(boats[0]);
                    queue.shift();
                    console.log(queue);
        }

            
        }

        return playLoop(playerBoard, cpuBoard)
    }

    function playLoop(playerBoard, cpuBoard) {
        let p1 = createPlayer('human', playerBoard);
        let p2 = createPlayer('computer', cpuBoard);

        let headBlock = document.getElementById('headBlock');

        let gameResult = document.createElement('div');
        gameResult.setAttribute('id', 'gameResult');
        headBlock.appendChild(gameResult);

        let restartContainer = document.createElement('div');
        restartContainer.setAttribute('id', 'restartContainer');
        headBlock.appendChild(restartContainer);
        

        let cpuGraph = document.getElementById('cpuGraph');
        cpuGraph.addEventListener('click', function graphHandler(e) {
            let rawcoord = e.target.id;
            let interim = rawcoord.replace(/\D/g,'').split('');
            let actcoord = [];
            for (const coord of interim) {
                let coordNum = Number(coord);
                actcoord.push(coordNum);
            }

            if (cpuBoard[actcoord].marked == null) {
            let loopResult = gameLoop(actcoord, p1, p2);

            if (loopResult == 'sunk') {
                let pSunk = p1.board.status;
                let cSunk = p2.board.status;
                this.removeEventListener('click', graphHandler);

                if (pSunk == 'sunk') {
                    gameResult.textContent = 'The enemy has won!'
                }
                if (cSunk == 'sunk') {
                    gameResult.textContent = 'You have won!'
                }                

                let restart = document.createElement('button');
                restart.setAttribute('id', 'restart');
                restart.textContent = 'Play Again';
                restartContainer.appendChild(restart);

                restart.addEventListener('click', function() {
                    location.reload();
                })
                return;
            }
            }

            
        })
   
    }




export {placePage, placeLoop}