
//camel move
function camel_move(i, j, player, possible, return_on) {
    let change = [];
    let opp = (player == 1)?2 : 1;
    for (let x = 1; Math.max(i + x, j + x) < grid_size; ++x) {
        if (grid[i + x][j + x] != player && possible[i + x][j + x] != 3) change.push([i + x, j + x]);
        if (grid[i + x][j + x] == player || grid[i + x][j + x] == opp) break;
    }
    for (let x = 1; Math.min(i - x, j - x) >= 0; ++x) {
        if (grid[i - x][j - x] != player && possible[i - x][j - x] != 3) change.push([i - x, j - x]);
        if (grid[i - x][j - x] == player || grid[i - x][j - x] == opp) break;
    }
    for (let x = 1; i + x < grid_size && j - x >= 0; ++x) {
        if (grid[i + x][j - x] != player && possible[i + x][j - x] != 3) change.push([i + x, j - x]);
        if (grid[i + x][j - x] == player || grid[i + x][j - x] == opp) break;
    }
    for (let x = 1; i - x >= 0 && j + x < grid_size; ++x) {
        if (grid[i - x][j + x] != player && possible[i - x][j + x] != 3) change.push([i - x, j + x]);
        if (grid[i - x][j + x] == player || grid[i - x][j + x] == opp) break;
    }
    if (return_on) return change;
    display_poss_move(change);
}
 

//elephant move
function elephant_move(i, j, player, possible, return_on) {
    let change = [];
    let opp = (player == 1)?2 : 1;
    for (let x = i + 1; x < grid_size; ++x) {
        if (grid[x][j] != player && possible[x][j] != 3) change.push([x, j]);
        if (grid[x][j] == player || grid[x][j] == opp) break;
    }
    for (let x = i - 1; x >= 0; --x) {
        if (grid[x][j] != player && possible[x][j] != 3) change.push([x, j]);
        if (grid[x][j] == player || grid[x][j] == opp) break;
    }
    for (let x = j + 1; x < grid_size; ++x) {
        if (grid[i][x] != player && possible[i][x] != 3) change.push([i, x]);
        if (grid[i][x] == player || grid[i][x] == opp) break;
    }
    for (let x = j - 1; x >= 0; --x) {
        if (grid[i][x] != player && possible[i][x] != 3) change.push([i, x]);
        if (grid[i][x] == player || grid[i][x] == opp) break;
    }
    if (return_on) return change;
    display_poss_move(change);
}

//horse move
function horse_move(i, j, player, possible, return_on) {
    let change = [];
    let sign = [[1,2],[2,1],[-2,1],[-1,2],[1,-2],[2, -1],[-1,-2],[-2,-1]];
    for (let x = 0; x < 8; ++x) {
        if (i + sign[x][0] >= 0 && i + sign[x][0] < 8 && j + sign[x][1] >= 0 && j + sign[x][1] < 8 &&
            grid[i + sign[x][0]][j + sign[x][1]] != player && possible[i + sign[x][0]][j + sign[x][1]] != 3) {
                change.push([i + sign[x][0], j + sign[x][1]]);
            }
    }
    if (return_on) return change;
    display_poss_move(change);
}

//king move
function king_move(i, j, player, possible, return_on) {
    let change = [];
    for (let x = Math.max(0, i - 1); x <= Math.min(i + 1, 7); ++x) {
        for (let y = Math.max(0, j - 1); y <= Math.min(j + 1, 7); ++y) {
            if (grid[x][y] != player && possible[x][y] != 3) {
                change.push([x, y]);
            }
        }
    } 
    if (return_on) return change;
    display_poss_move(change);
}



//pawn move
function pawn_move(i, j, player, possible, return_on) {
    let change = [];
    //console.log("return on for ", i, " ", j, " ", return_on);
    let  opp = (player == 1)? 2 : 1;
    if (player == 2) {
        if (i < 7) {
            if (i == 1) {
                if (grid[i + 2][j] == 0 && possible[i + 2][j] == 0 && grid[i + 1][j] == 0)change.push([i + 2, j]);
            }
            if (grid[i + 1][j] == 0 && possible[i + 1][j] == 0) change.push([i + 1, j]); 
            if (j - 1 >= 0 && grid[i + 1][j - 1] == opp) change.push([i + 1, j - 1]); 
            if (j + 1 < 8 && grid[i + 1][j + 1] == opp) change.push([i + 1, j + 1]); 
        }
    }else {
        if (i > 0) {
            if (i == 6) {
                if (grid[i - 2][j] == 0 && possible[i - 2][j] == 0 && grid[i - 1][j] == 0 && possible[i - 1][j] == 0)change.push([i - 2, j]);
            }
            if (grid[i - 1][j] == 0 && possible[i - 1][j]  == 0) change.push([i - 1, j]); 
            if (j - 1 >= 0 && grid[i - 1][j - 1] == opp) change.push([i - 1, j - 1]); 
            if (j + 1 < 8 && grid[i - 1][j + 1] == opp) change.push([i - 1, j + 1]); 
        }
    }
    if (return_on) return change;
    display_poss_move(change);
}


//queen moves 
function queen_move(i, j, player, possible, return_on) {
    let change = [];
    let opp = (player == 1)?2 : 1;
    //camel move
    for (let x = 1; Math.max(i + x, j + x) < grid_size; ++x) {
        if (grid[i + x][j + x] != player && possible[i + x][j + x] != 3) change.push([i + x, j + x]);
        if (grid[i + x][j + x] == player || grid[i + x][j + x] == opp) break;
    }
    for (let x = 1; Math.min(i - x, j - x) >= 0; ++x) {
        if (grid[i - x][j - x] != player && possible[i - x][j - x] != 3) change.push([i - x, j - x]);
        if (grid[i - x][j - x] == player || grid[i - x][j - x] == opp) break;
    }
    for (let x = 1; i + x < grid_size && j - x >= 0; ++x) {
        if (grid[i + x][j - x] != player && possible[i + x][j - x] != 3) change.push([i + x, j - x]);
        if (grid[i + x][j - x] == player || grid[i + x][j - x] == opp) break;
    }
    for (let x = 1; i - x >= 0 && j + x < grid_size; ++x) {
        if (grid[i - x][j + x] != player && possible[i - x][j + x] != 3) change.push([i - x, j + x]);
        if (grid[i - x][j + x] == player || grid[i - x][j + x] == opp) break;
    }
    //elephant
    for (let x = i + 1; x < grid_size; ++x) {
        if (grid[x][j] != player && possible[x][j] != 3) change.push([x, j]);
        if (grid[x][j] == player || grid[x][j] == opp) break;
    }
    for (let x = i - 1; x >= 0; --x) {
        if (grid[x][j] != player && possible[x][j] != 3) change.push([x, j]);
        if (grid[x][j] == player || grid[x][j] == opp) break;
    }
    for (let x = j + 1; x < grid_size; ++x) {
        if (grid[i][x] != player && possible[i][x] != 3) change.push([i, x]);
        if (grid[i][x] == player || grid[i][x] == opp) break;
    }
    for (let x = j - 1; x >= 0; --x) {
        if (grid[i][x] != player && possible[i][x] != 3) change.push([i, x]);
        if (grid[i][x] == player || grid[i][x] == opp) break;
    }
    //king move
    for (let x = Math.max(0, i - 1); x <= Math.min(i + 1, 7); ++x) {
        for (let y = Math.max(0, j - 1); y <= Math.min(j + 1, 7); ++y) {
            if (grid[x][y] != player && possible[x][y] != 3) {
                change.push([x, y]);
            }
        }
    } 
    if (return_on) return change;
    display_poss_move(change);
}



function king_danger(i, j, player, possible, return_needed) {
    //console.log(possible);
    
    let new_possible = new Array(8);
    for (let i = 0; i < 8; ++i) new_possible[i] = new Array(8);
    for (let i = 0; i < 8; ++i) {
        for (let j = 0; j < 8; ++j) {
            new_possible[i][j] = 0;
        }
    }
    let d = king_pos(player);
    let king_pos_x = d[0];
    let king_pos_y = d[1];
    let pos = board[i][j];
    let player_move = [];
    if (pos == 0 || pos == 7 || pos == 56 || pos == 63) player_move = elephant_move(i, j, player, possible, 1);
    if (pos == 1 || pos == 6 || pos == 57 || pos == 62) player_move = horse_move(i, j, player, possible, 1);
    if (pos == 2 || pos == 5 || pos == 58 || pos == 61) player_move = camel_move(i, j, player, possible, 1);
    if (pos == 3 || pos == 59) player_move = king_move(i, j, player, possible, 1);
    if (pos == 4 || pos == 60) player_move = queen_move(i, j, player, possible, 1);
    if ((pos >= 8 && pos <= 15) || (pos >= 48 && pos <= 55)) player_move = pawn_move(i, j, player, possible, 1);
    //console.log(player_move);
    
    let is_king = 0;
    let zero = 0;   
    //console.log(player_move);
    if (pos == 3 || pos == 59)is_king =  1;
    for (let x = 0; x < player_move.length; ++x) {
        let a = player_move[x][0];
        let b = player_move[x][1];
        //console.log(a, b);
        let val = grid[a][b];
        grid[i][j] = 0;
        grid[a][b] = player;
        let opp = (player == 1)? 2 : 1;
        let value = make_all_move(opp, grid);
        //console.log("value :" , value);
        //console.log(grid);
        if (is_king) king_pos_x = a, king_pos_y = b;
        let save = 1;
        for (let y = 0; y < value.length; ++y) {
            if (value[y][2] == king_pos_x && value[y][3] == king_pos_y) save = 0;
        }
        //console.log("kingp pos : ", king_pos_x, king_pos_y, )
        if (save == 0) {
            new_possible[a][b] = 3;
            zero++;
        }
        grid[i][j] = player;
        grid[a][b] = val;
    }
    //console.log(new_possible);
    //console.log(zero, player_move.length);
    if (return_needed == 1) {
        if (zero == player_move.length) return 0;
        return 1;
    }
    //possible = new_possible.slice();
    //console.log("new_possible", new_possible);
   // console.log("grid", grid);
    return new_possible;
    // console.log("poss : ",  poss);
    // console.log("grid : ", grid);
}



function make_all_move(player, possible) {
    let values = [];
    for (let i = 0; i < 8; ++i) {
        for (let j = 0; j < 8; ++j) {
            let pos = board[i][j];
            if (grid[i][j] == player) {
                if (pos == 0 || pos == 7 || pos == 56 || pos == 63) {
                    let val = elephant_move(i, j, player, possible, 1);
                    for (let x = 0; x < val.length; ++x) values.push([i, j, val[x][0], val[x][1]]);
                }
                if (pos == 1 || pos == 6 || pos == 57 || pos == 62){
                    let val = horse_move(i, j, player, possible, 1);
                    for (let x = 0; x < val.length; ++x) values.push([i, j, val[x][0], val[x][1]]);
                }
                if (pos == 2 || pos == 5 || pos == 58 || pos == 61){
                    let val = camel_move(i, j, player, possible, 1);
                    for (let x = 0; x < val.length; ++x) values.push([i, j, val[x][0], val[x][1]]);
                }
                if (pos == 3 || pos == 59) {
                    let val = king_move(i, j, player, possible, 1);
                    for (let x = 0; x < val.length; ++x) values.push([i, j, val[x][0], val[x][1]]);
                }
                if (pos == 4 || pos == 60){ 
                    let val = queen_move(i, j, player, possible, 1);
                    for (let x = 0; x < val.length; ++x) values.push([i, j, val[x][0], val[x][1]]);
                }
                if ((pos >= 8 && pos <= 15) || (pos >= 48 && pos <= 55)) {
                    let val = pawn_move(i, j, player, possible, 1);
                    for (let x = 0; x < val.length; ++x) values.push([i, j, val[x][0], val[x][1]]);
                }
            }
        }
    }
    return values;
}

function game_Over(player, possible) {
    let count = 0;
    player = (player == 1)? 2 : 1;
    for (let i = 0; i < 8; ++i) {
        for (let j = 0; j < 8; ++j) {
            if (grid[i][j] == player) {
                count += king_danger(i, j, player, possible, 1);
            }
        }
    }
   // console.log(count);
    if (count == 0) return 1;
    return 0;
}
function attack_on_opp_king(player) {
    let values = make_all_move(player, grid);
    let opp = (player == 1)? 2 : 1;
    let king_p = king_pos(opp);
    let king_danger = 0;
    for (let i = 0; i < values.length; ++i) {
        if (values[i][2] == king_p[0] && values[i][3] == king_p[1]) {
            king_danger = 1;
        }
    }  
    if (king_danger) {
        document.getElementById(king_p[0] + "" + king_p[1]).style.color = "red";
    }
    if (king_danger) return 1;
    return 0; 
}



function king_pos(player) {
    let king_pos_x = 0;
    let king_pos_y = 0;
    for (let i = 0; i < 8; ++i) {
        for (let j = 0; j < 8; ++j) {
            if (player == 2 && board[i][j] == 3) {
                king_pos_x = i;
                king_pos_y = j;
            }
            if (player == 1 && board[i][j] == 59) {
                king_pos_x = i;
                king_pos_y = j;
            }
        }
    }
    return [king_pos_x, king_pos_y];
}