'use strict';
const renderUI = function(squares){
    
    const mainContainer  =  document.querySelector('.main-container');
    squares.forEach(element => {
        let rank = document.createElement("div");
        rank.classList.add('rank-style');
        mainContainer.appendChild(rank);
        element.forEach(el =>{
            const square = document.createElement('div');
            square.style.backgroundColor = square.color;
            el.renderedHtml  = square;
            console.log(el)
            square.classList.add(`color-${el.color}`);
            square.classList.add('square-common');
            rank.appendChild(square);
        });
    });
    console.log(mainContainer);
}
export {renderUI};        