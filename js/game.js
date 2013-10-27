function Game(){
    // --------------------
    // Initialize variables
    // --------------------

    this.max_range = 3;
    this.range = [0, 1, 2, 3];
    // this.players = [
    //     [0, 0],
    //     [3, 3]
    // ];
    this.players = randomPositions(this.max_range);
    this.player_to_move = 0;
    this.last_moves = [-1, -1];

    this.gameMessage = 'P1 to move';

    // --------------
    // Game functions
    // --------------

    this.getKey = function($event){
        // Get move
        // Move can be
        //  0
        // 1 3
        //  2
        // 
        // The keyCodes variable contains the keys coupled to the moves as
        // [keyCode: 0, keyCode: 1, keyCode: 2, keyCode: 3]
        if(this.player_to_move == 0){
            var keyCodes = [119, 97, 115, 100];
        } else {
            var keyCodes = [105, 106, 107, 108];
        }
        return keyCodes.indexOf($event.keyCode);
    }

    this.movePlayer = function($event){
        var move = this.getKey($event)
        // Make move
        if(move == 0){
            this.players[this.player_to_move][1] -= 1;
        } else if(move == 1){
            this.players[this.player_to_move][0] -= 1;
        } else if(move == 2){
            this.players[this.player_to_move][1] += 1;
        } else if(move == 3){
            this.players[this.player_to_move][0] += 1;
        }

        // Update game status if a move was made
        if(move > -1){
            this.updateGameStatus(move);
        }
    };

    this.updateGameStatus = function(move){
        // Check game status
        if(this.player_to_move == 0){
            this.gameMessage = 'P2 to move';
            if(move == this.last_moves[0]){
                this.gameMessage = 'P2 wins';
            } else if(this.players[0].compare(this.players[1])){
                this.gameMessage = 'P1 wins';
            }
        } else {
            this.gameMessage = 'P1 to move';
            if(move == this.last_moves[1]){
                this.gameMessage = 'P1 wins';
            } else if(this.players[0].compare(this.players[1])){
                this.gameMessage = 'P2 wins';
            }
        }

        // Update last_moves en player_to_move
        if(this.player_to_move == 0){
            this.last_moves = [move, this.last_moves[1]];
        } else {
            this.last_moves = [this.last_moves[0], move];
        }
        this.player_to_move = (this.player_to_move + 1) % 2;

        // Check if someone won
        if(this.gameMessage.indexOf('wins') > -1){
            this.reset();
        }
    };

    this.containsPlayer = function(player_num, x, y){
        return this.players[player_num][0] == x && this.players[player_num][1] == y;
    };

    this.reset = function(){
        this.players = randomPositions(this.max_range);
        this.last_moves = [-1, -1];
        this.player_to_move = 0;
    }
}
