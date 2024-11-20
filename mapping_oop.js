const mainMap = [];
class Square {
    color;
    isHighlighted;
    isHint;
    isPiece;
    id;
}
for (let i = 8; i > 0; i--) {
    const isRowEven = i % 2 == 0 ? true : false;
    const rowArray = [];
    for (let j = 97; j < 105; j++) {
        const isElementEven = j % 2 == 0 ? true : false;
        const fileName = String.fromCharCode(j);
        const id = fileName + i;
        const square = new Square();
        square.id = id;
        if(!isRowEven && !isElementEven){
            square.color = '#769656';
            square.color = 'dark';
        }
        if(isRowEven && !isElementEven){
            square.color = '#EEEED2';
            square.color = 'light';
        }
        if(!isRowEven && isElementEven){
            square.color = '#EEEED2';
            square.color = 'light';
        }
        if(isRowEven && isElementEven){
            square.color = '#769656';
            square.color = 'dark';
        }
        rowArray.push(square);
    }
    mainMap.push(rowArray);
}
import * as silicon from './renderHtml.11js';
silicon.renderUI(mainMap);