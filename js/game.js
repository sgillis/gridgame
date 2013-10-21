function Game(){
    this.max_range = 3;
    this.range = [0, 1, 2, 3];
    this.players = [
        [0, 0],
        [3, 3]
    ];

    this.movePlayer = function($event){
        if($event.keyCode == 119){
            // w
            if(this.players[0][1] > 0){
                this.players[0][1] -= 1
            }
        } else if($event.keyCode == 97){
            // a
            if(this.players[0][0] > 0){
                this.players[0][0] -= 1
            }
        } else if($event.keyCode == 115){
            // s
            if(this.players[0][1] < this.max_range){
                this.players[0][1] += 1
            }
        } else if($event.keyCode == 100){
            // d
            if(this.players[0][0] < this.max_range){
                this.players[0][0] += 1
            }
        }
    }

    this.containsPlayer = function(player_num, x, y){
        return this.players[player_num][0] == x && this.players[player_num][1] == y;
    }

    this.updatePlayerLocation = function(x, y){
        this.players[0][0] = x;
        this.players[0][1] = y;
    }
}
