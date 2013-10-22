function Game(){
    this.max_range = 3;
    this.range = [0, 1, 2, 3];
    this.players = [
        [0, 0],
        [3, 3]
    ];
    this.player_to_move = 0;
    this.last_moves = [-1, -1];

    this.gameMessage = 'P1 to move';

    this.movePlayer = function($event){
        // Get move
        // Move can be
        //  0
        // 4 6
        //  8
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

        // Make move
        if(move > -1){
            if(move == 0){
                this.players[this.player_to_move][1] -= 1;
            } else if(move == 4){
                this.players[this.player_to_move][0] -= 1;
            } else if(move == 8){
                this.players[this.player_to_move][1] += 1;
            } else if(move == 6){
                this.players[this.player_to_move][0] += 1;
            }
        }

        // Check game status
        if(this.player_to_move == 0){
            this.gameMessage = 'P2 to move';
            if(move == this.last_moves[0]){
                this.gameMessage = 'P2 wins';
            } else if(this.players[0] == this.players[1]){
                this.gameMessage = 'P1 wins';
            }
        } else {
            this.gameMessage = 'P1 to move';
            if(move == this.last_moves[1]){
                this.gameMessage = 'P1 wins';
            } else if(this.players[0] == this.players[1]){
                this.gameMessage = 'P2 wins';
            }
        }

        // Check if someone won
        if(this.gameMessage.indexOf('wins') > -1){
            this.reset();
        }

        // Update last_moves en player_to_move
        if(this.player_to_move == 0){
            this.last_moves = [move, this.last_moves[1]];
        } else {
            this.last_moves = [this.last_moves[0], move];
        }
        this.player_to_move = (this.player_to_move + 1) % 2;
    };

    this.containsPlayer = function(player_num, x, y){
        return this.players[player_num][0] == x && this.players[player_num][1] == y;
    };

    this.updatePlayerLocation = function(x, y){
        this.players[0][0] = x;
        this.players[0][1] = y;
    };

    this.reset = function(){
        this.players = [
            [0, 0],
            [3, 3]
        ];
        this.last_moves = [-1, -1];
        this.player_to_move = 0;
    }
}
