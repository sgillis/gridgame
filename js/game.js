function Game(){
    this.max_range = 3;
    this.range = [0, 1, 2, 3];
    this.players = [
        [0, 0],
        [3, 3]
    ];
    this.player_to_move = 0;
    this.last_moves = [-1, -1];

    this.movePlayer = function($event){
        // Move can be
        //  8
        // 4 6
        //  0
        var move = -1;
        if(this.player_to_move == 0){
            if($event.keyCode == 119){
                // w
                if(this.players[0][1] > 0){
                    move = 0;
                }
            } else if($event.keyCode == 97){
                // a
                if(this.players[0][0] > 0){
                    move = 4;
                }
            } else if($event.keyCode == 115){
                // s
                if(this.players[0][1] < this.max_range){
                    move = 8;
                }
            } else if($event.keyCode == 100){
                // d
                if(this.players[0][0] < this.max_range){
                    move = 6;
                }
            }
        } else if(this.player_to_move == 1){
            if($event.keyCode == 105){
                // w
                if(this.players[1][1] > 0){
                    move = 0;
                }
            } else if($event.keyCode == 106){
                // a
                if(this.players[1][0] > 0){
                    move = 4;
                }
            } else if($event.keyCode == 107){
                // s
                if(this.players[1][1] < this.max_range){
                    move = 8;
                }
            } else if($event.keyCode == 108){
                // d
                if(this.players[1][0] < this.max_range){
                    move = 6;
                }
            }
        }
        if(move > -1){
            // TODO fix this
            this.last_moves[this.player_to_move] = move;
            if(move == 0){
                this.players[this.player_to_move][1] -= 1;
            } else if(move == 4){
                this.players[this.player_to_move][0] -= 1;
            } else if(move == 8){
                this.players[this.player_to_move][1] += 1;
            } else if(move == 6){
                this.players[this.player_to_move][0] += 1;
            }
            this.player_to_move = (this.player_to_move + 1) % 2;
        }
    };

    this.containsPlayer = function(player_num, x, y){
        return this.players[player_num][0] == x && this.players[player_num][1] == y;
    };

    this.updatePlayerLocation = function(x, y){
        this.players[0][0] = x;
        this.players[0][1] = y;
    };
}
