
// const readline = require('readline');



class Life {
    constructor(grid){
        this.grid = grid;
        this.width = grid[0].length;
        this.height = grid.length;
    }

    next(){
        let prevGrid = this.grid.slice();
        let nextGrid = this.grid.slice().map( row => row.map( elem => 0 ))

        for(let y=0; y<this.height; y++){
            for(let x=0; x<this.width; x++){
                let neighb =  this.countNeighb(y, x);
                let sell = this.grid[y][x];
                nextGrid[y][x] = this.chooseIfLiveSell(sell , neighb);

            }
        }
        this.grid = nextGrid.slice();
    }


    chooseIfLiveSell(sell, neighb){
        if(neighb === 3 && sell == 0 ){
            return 1
        }else if(sell == 1 && (neighb===2 || neighb === 3) ){
            return 1
        }
        return 0;
    }

    countX(x){
        if (x < 0) {return this.width-1};
        if(x >= this.width ) return 0;
        return x;

    }

    countNeighb(y, x){
        let prev = this.grid[y-1] || this.grid[this.height-1];
        let next = this.grid[y+1] || this.grid[0];
        let sum = 0;
        let count = [
            [ prev[this.countX(x-1)], prev[x], prev[this.countX(x+1)] ],
            [ this.grid[y][this.countX(x-1)], this.grid[y][this.countX(x+1)] ],
            [ next[this.countX(x-1)], next[x], next[this.countX(x+1)] ]
        ];
        count.forEach(row => {
            row.forEach( elem => sum += +!!elem)
        })
        return sum;
    }


    toStr(){
        return this.grid.map( row => row.join(' ') ).join('\n')
            .replace(/0/g, ' ')
            .replace(/1/g, '#');
    }
}

let glider = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];


let life = new Life(
    createGrid(30)
);

// setInterval(  ()=>{
//     readline.cursorTo(process.stdout, 0, 0);
//     readline.clearScreenDown(process.stdout);
//     process.stdout.write(life.toStr())
//     life.next()
// }, 500 )


function createGrid(num){
    let grid = [];
    for (let i=0; i<num; i++){
        grid.push([]);
        for(let j=0; j<num; j++){
            grid[i][j] = Math.random() > 0.7 ? 1 : 0;
        }
    }
    return grid;
}

function updateDOM(){
    let game = document.querySelector('.game')
    console.log('game')
}

updateDOM()

// console.log(createGrid(10))












// countNeighb(y, x){
//     let prev = this.grid[y-1] || this.grid[this.height-1];
//     let next = this.grid[y+1] || this.grid[0];
//     let sum = 0;
//     let count = [
//         [ prev[this.countX(x-1)], prev[x], prev[this.countX(x+1)] ],
//         [ this.grid[y][this.countX(x-1)], this.grid[y][this.countX(x+1)] ],
//         [ next[this.countX(x-1)], next[x], next[this.countX(x+1)] ]
//     ];
//     count.forEach(row => {
//         row.forEach( elem => sum += +!!elem)
//     })
//     return sum;
//
//     let prev = this.grid[y-1] || [];
//     let next = this.grid[y+1] || [];
//     let sum = 0;
//     let count = [
//         [ prev[x-1], prev[x], prev[x+1] ],
//         [ this.grid[y][x-1], this.grid[y][x+1] ],
//         [ next[x-1], next[x], next[x+1] ]
//     ];
//     count.forEach(row => {
//         row.forEach( elem => sum += +!!elem)
//     })
//     return sum;
// }













