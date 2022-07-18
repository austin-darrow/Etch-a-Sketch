let container = document.querySelector('.container');

let columnNum = 32;

for (let i = 1; i <= columnNum; i++) {
    let rowContainer = document.createElement('div');
    rowContainer.classList.add("rowContainer");
    container.appendChild(rowContainer);
    let row = ("row-" + i);
    for (let i = 1; i <= columnNum; i++) {
        let column = ("column-" + i);
        let div = document.createElement('div');
        div.classList.add("grid");
        div.classList.add(column);
        div.classList.add(row);
        rowContainer.appendChild(div);
    }
}

const squares = Array.from(document.querySelectorAll('.grid'));

for (let i=0; i<squares.length; i++) {
    if (squares.length) {
        squares[i].addEventListener('mouseover', function highlightGrids() {
            for (let j=0; j<squares.length; ++j) {
                this.classList.add('hovered');
            }
        })
    }
}