let chessBoard = document.getElementById("chessboard");
let grid_size = 8;
let player_turn = 1;
let computer = 0;
let select = 0;
let last_x = -1;
let gameOver = 0;
let last_y = -1;
let move_color = "#472F47"; 
let player_one_col = "#EDC745";//white 
let player_two_col = "#494535";//black
let grid_fill = [
    ["&#9820;","&#9822;","&#9821;","&#9819;","&#9818;","&#9821;","&#9822;","&#9820;"],
    ["&#9823;","&#9823;","&#9823;","&#9823;","&#9823;","&#9823;","&#9823;","&#9823;"],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["&#9817;","&#9817;","&#9817;","&#9817;","&#9817;","&#9817;","&#9817;","&#9817;"],
    ["&#9814;","&#9816;","&#9815;","&#9813;","&#9812;","&#9815;","&#9816;","&#9814;"]
];
let board = new Array(grid_size);
let selected = new Array(grid_size);
for (let i = 0; i < grid_size; ++i) board[i] = new Array(grid_size);
for (let i = 0; i < grid_size; ++i) selected[i] = new Array(grid_size);
let p = 0;
for (let i = 0; i < grid_size; ++i) {
    for (let j = 0; j < grid_size; ++j) {
        board[i][j] = p;
        p++;
    }
}
let values = new Array(grid_size * grid_size);
let grid = new Array(grid_size);
for (let i = 0; i < grid_size; ++i) grid[i] = new Array(grid_size);
for (let i = 0; i < grid_size; ++i) {
    for (let j = 0; j < grid_size; ++j) {
        if (i == 0 || i == 1) grid[i][j] = 2;
        else if (i == grid_size - 1 || i == grid_size - 2) grid[i][j] = 1;
        else grid[i][j] = 0;

    }
}
p = 0;
for (let i = 0; i < grid_size; ++i) {
    for (let j = 0; j < grid_size; ++j) {
        values[p] = grid_fill[i][j];
        p++;
    }
} 
let cnt = 0;
for (let i = 0; i < grid_size; ++i) {
    for (let j = 0; j < grid_size; ++j) {
        let value = (cnt % 2 == 0)?"white":"black";
        chessBoard.innerHTML += "<button class = '" + value + "' id = '" + i + "" + j + "' onclick = 'madeMove(" + i + "," + j + ")'>" +  grid_fill[i][j] + "</button>";
        cnt++;
        if (j == grid_size - 1)cnt++;
    }
}
function playWith(val) {
    if (val == 2) computer = 1;
}
function madeMove(i,j) {
    if (gameOver) return ;
    if (select && selected[i][j] == 1) {
        make_change(i, j, last_x, last_y);
        if (game_Over(player_turn, grid)) {
            gameOver = 1;
            popUpMessage(player_turn);
            return ;
        }
        clearAll();
        let king_d = attack_on_opp_king(player_turn);
        if (king_d == 0) {
            let king_p = king_pos(player_turn);
            document.getElementById(king_p[0] + "" + king_p[1]).style.color = "black";
        }
        if (computer) {
            player_turn = (player_turn == 1) ? 2 : 1;
            run_AI(player_turn);
        }
        player_turn = (player_turn == 1)?2 : 1;
        //console.log(player_turn, gameOver); 
        return ;
    }
    if (select) {
        clearAll();
    }
    if (grid[i][j] != player_turn) {
        return ;
    }
    let possible = king_danger(i, j, player_turn, grid); //king danger  
   // console.log("grid: ", grid);
    let pos = board[i][j];
    if (pos == 0 || pos == 7 || pos == 56 || pos == 63) elephant_move(i, j, player_turn, possible);
    if (pos == 1 || pos == 6 || pos == 57 || pos == 62) horse_move(i, j, player_turn, possible);
    if (pos == 2 || pos == 5 || pos == 58 || pos == 61) camel_move(i, j, player_turn, possible);
    if (pos == 3 || pos == 59) king_move(i, j, player_turn, possible);
    if (pos == 4 || pos == 60) queen_move(i, j, player_turn, possible);
    if ((pos >= 8 && pos <= 15) || (pos >= 48 && pos <= 55)) pawn_move(i, j, player_turn, possible);
    last_x = i;
    last_y = j;
}

function display_poss_move(val) {
    for (let i = 0; i < val.length; ++i) {
        let div = document.getElementById(val[i][0] + "" + val[i][1]);
        div.style.backgroundColor = move_color;
        selected[val[i][0]][val[i][1]] = 1;
    }
    select = 1;
}

function make_change(i, j, x, y) {
    //console.log(i, j, x, y);
    let number = 25;    
    //console.log("hello",board[x][y], board[x][y], grid[i][j],grid[x][y]);
    if ((grid[i][j] == 1 && grid[x][y] == 2) || (grid[i][j] == 2 && grid[x][y] == 1)) {
        board[i][j] = board[x][y];
        board[x][y] = number;
        grid[i][j] = grid[x][y];
        grid[x][y] = 0;
    }else {
    //swap the position
        [board[i][j] , board[x][y]] = [board[x][y], board[i][j]];

        //change the position in grid
        [grid[i][j] , grid[x][y]] = [grid[x][y], grid[i][j]];
    }
    //drawing again
    document.getElementById(i + "" + j).innerHTML = values[board[i][j]];
    document.getElementById(x + "" + y).innerHTML = values[board[x][y]];

    //selected cleared
    select = 0;
}


function clearAll() {
    let z = 0;
    select = 0;
    for (let i = 0; i < grid_size; ++i) {
        for (let j = 0; j < grid_size; ++j) {
            let div = document.getElementById(i + "" + j);
            div.innerHTML = values[board[i][j]];
            if (z % 2 == 0) div.style.backgroundColor = player_one_col;
            else div.style.backgroundColor = player_two_col;
            if (j == 7) z++;
            z++;
            selected[i][j] = 0;
        }
    }
}

function clearMove() {

}

function popUpMessage(player) {
    alert("game over " + player + "wins");
}