
var pawnEvalWhite =
[
    [0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0],
    [5.0,  5.0,  5.0,  5.0,  5.0,  5.0,  5.0,  5.0],
    [1.0,  1.0,  2.0,  3.0,  3.0,  2.0,  1.0,  1.0],
    [0.5,  0.5,  1.0,  2.5,  2.5,  1.0,  0.5,  0.5],
    [0.0,  0.0,  0.0,  2.0,  2.0,  0.0,  0.0,  0.0],
    [0.5, -0.5, -1.0,  0.0,  0.0, -1.0, -0.5,  0.5],
    [0.5,  1.0, 1.0,  -2.0, -2.0,  1.0,  1.0,  0.5],
    [0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0]
];
var pawnEvalBlack = pawnEvalWhite.slice().reverse();

var kingEvalWhite = [

    [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [ -2.0, -3.0, -3.0, -4.0, -4.0, -3.0, -3.0, -2.0],
    [ -1.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -1.0],
    [  2.0,  2.0,  0.0,  0.0,  0.0,  0.0,  2.0,  2.0 ],
    [  2.0,  3.0,  1.0,  0.0,  0.0,  1.0,  3.0,  2.0 ]
];
var kingEvalBlack = kingEvalWhite.slice().reverse();
var rookEvalWhite = [
    [  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0],
    [  0.5,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [  0.0,   0.0, 0.0,  0.5,  0.5,  0.0,  0.0,  0.0]
];
var rookEvalBlack = rookEvalWhite.slice().reverse();
var bishopEvalWhite = [
    [ -2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0],
    [ -1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -1.0],
    [ -1.0,  0.0,  0.5,  1.0,  1.0,  0.5,  0.0, -1.0],
    [ -1.0,  0.5,  0.5,  1.0,  1.0,  0.5,  0.5, -1.0],
    [ -1.0,  0.0,  1.0,  1.0,  1.0,  1.0,  0.0, -1.0],
    [ -1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0, -1.0],
    [ -1.0,  0.5,  0.0,  0.0,  0.0,  0.0,  0.5, -1.0],
    [ -2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0]
];
var bishopEvalBlack = bishopEvalWhite.slice().reverse();
var knightEval =
    [
        [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0],
        [-4.0, -2.0,  0.0,  0.0,  0.0,  0.0, -2.0, -4.0],
        [-3.0,  0.0,  1.0,  1.5,  1.5,  1.0,  0.0, -3.0],
        [-3.0,  0.5,  1.5,  2.0,  2.0,  1.5,  0.5, -3.0],
        [-3.0,  0.0,  1.5,  2.0,  2.0,  1.5,  0.0, -3.0],
        [-3.0,  0.5,  1.0,  1.5,  1.5,  1.0,  0.5, -3.0],
        [-4.0, -2.0,  0.0,  0.5,  0.5,  0.0, -2.0, -4.0],
        [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0]
];
var evalQueen = [
    [ -2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0],
    [ -1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -1.0],
    [ -1.0,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -1.0],
    [ -0.5,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -0.5],
    [  0.0,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -0.5],
    [ -1.0,  0.5,  0.5,  0.5,  0.5,  0.5,  0.0, -1.0],
    [ -1.0,  0.0,  0.5,  0.0,  0.0,  0.0,  0.0, -1.0],
    [ -2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0]
];
let curr_move;
let d = 9999;
let counting = 0;
let DEPTH = 2;
function run_AI(player) {
    //IN this case i know the player so I will use min value since black goes second and black one is the AI 
    curr_move = player;
    let curr_board = make_all_move(player, grid);
  ///all valid move
    let maxm = -d;
    let from_x = 0;
    let from_y = 0;
    let to_x = 0;
    let to_y = 0;
    for (let i = 0; i < curr_board.length; ++i) {
        let a = curr_board[i][0], b = curr_board[i][1], c = curr_board[i][2], d = curr_board[i][3];
        let aa = grid[a][b];
        let bb = grid[c][d];
        grid[c][d] = grid[a][b];
        grid[a][b] = 0;
        let y = minimax(DEPTH, grid, -d,  d, 0);
        if (y >= maxm) {
            maxm = y;
            from_x = a, from_y = b, to_x = c, to_y = d;
        }
        grid[a][b] = aa;
        grid[c][d] = bb;
    }
    if (maxm == -d) {
        gameOver = 1;
        popUpMessage(player);
        return ;
    }
    //console.log(grid)
    ///make the move and do the things needed
    make_change(to_x, to_y, from_x, from_y);
    // if (game_Over(player, grid)) {
    //     gameOver = 1;
    //     popUpMessage(player);
    //     return ;
    // }
    console.log(to_x, to_y, from_x, from_y);
    clearAll();
}

function minimax(depth, move_board, min_white_val, max_black_val, curr_move) {
    if (depth === 0) {
        return -value_on_board(move_board, curr_move);
    }
    counting++;
    if (curr_move) {
        let bestmove = -9999;
        let curr_board = make_all_move(2, move_board);
        for (let i = 0; i < curr_board.length; ++i) {
            let a = curr_board[i][0] , b = curr_board[i][1], c = curr_board[i][2], d = curr_board[i][3];
            let aa = grid[a][b];
            let bb = grid[c][d];
            grid[c][d] = grid[a][b];
            grid[a][b] = 0;
            bestmove = Math.max(bestmove, minimax(depth - 1, grid, min_white_val, max_black_val, (curr_move == 0)));
            max_black_val = Math.max(max_black_val, bestmove);
            grid[a][b] = aa;
            grid[c][d] = bb;
            if (max_black_val <= min_white_val) {
                return  bestmove;
            }
        }
        return bestmove;
    }else {
        let bestmove = 9999;
       let curr_board = make_all_move(1, move_board);
       for (let i = 0; i < curr_board.length; ++i) {
           let a = curr_board[i][0], b = curr_board[i][1], c = curr_board[i][2], d = curr_board[i][3];
           let aa = grid[a][b];
           let bb = grid[c][d];
           grid[c][d] = grid[a][b];
           grid[a][b] = 0;
           bestmove = Math.min(bestmove, minimax(depth - 1, grid, min_white_val, max_black_val, (curr_move == 0)));
           //change it to intial state
           grid[a][b] = aa;
           grid[c][d] = bb;
           min_white_val = Math.min(min_white_val, bestmove);
           if (max_black_val <= min_white_val) {
               return bestmove;
           }
       }
       return bestmove;
    }
}


function is_game_over(curr_board, opp) {
    //getting the king pos
    let a = king_pos(opp);
    let b = king_pos(((opp == 1)? 2 : 1));
    let opp_king_pos_x = a[0];
    let opp_king_pos_y = a[1];
    let player_king_pos_x = b[0];
    let player_king_pos_y = b[1];

    //i,  j , player, possible, 1
    let value = king_move(opp_king_pos_x, opp_king_pos_y, opp, grid, 1);
    for (let i = 0; i < value.length; ++i) {
        if (opp_king_pos_x == player_king_pos_x && opp_king_pos_y == player_king_pos_y) {
            return 1;
        }
    }
    return 0;
}


function value_on_board(curr_board, move) {
    let score_sum = 0;
    for (let y = 0; y < 8; ++y) {
        for (let x = 0; x < 8; ++x) {
            score_sum += peace_value(curr_board[x][y], move, x, y);
        }
    }
    return score_sum;
}

function peace_value(pos, move, x, y) {
    let score_sum = 0;
    let isWhite = 0;    
    if (pos === 0 || pos === 7 || pos === 56 || pos === 63) {
        if (pos === 56 || pos === 63) isWhite = 1;
        score_sum += 50 + ( isWhite ? rookEvalWhite[y][x] : rookEvalBlack[y][x]);
    }
    if (pos === 1 || pos === 6 || pos === 57 || pos === 62) {
        score_sum += 30 + knightEval[y][x];
    }
    if (pos === 2 || pos === 5 || pos === 58 || pos === 61) {
        if (pos === 58 || pos === 61)isWhite = 1;
        score_sum += 30 + ( isWhite ? bishopEvalWhite[y][x] : bishopEvalBlack[y][x]);
    }
    if (pos === 3 || pos === 59) {
        if (pos === 59)isWhite = 1;
        score_sum += 900 + ( isWhite ? kingEvalWhite[y][x] : kingEvalBlack[y][x]);
    }
    if (pos === 4 || pos === 60) {
        score_sum += 90 + evalQueen[y][x];
    }
    if ((pos >= 8 && pos <= 15) || (pos >= 48 && pos <= 55)) {
        if (pos >= 48 && pos <= 55) isWhite = 1;
        score_sum += 10 + (isWhite ? pawnEvalWhite[y][x] : pawnEvalBlack[y][x]);
    }
    return (move === 0)?score_sum: -score_sum;
}

