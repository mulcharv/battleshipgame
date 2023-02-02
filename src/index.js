import {placeLoop, placePage} from './placemodule.js';
import './style.css';


function component() {
    const main = document.createElement('div');
    main.setAttribute('id', 'main');


    const page = document.createElement('div');
    page.setAttribute('id', 'page');
    main.appendChild(page);

    page.appendChild(placePage());
    placeLoop()

    return main;
}

document.body.appendChild(component())