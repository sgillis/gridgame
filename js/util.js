// Usefull functions

// Array comparison
Array.prototype.compare = function(array){
    if(!array)
        return false;

    if(this.length != array.length)
        return false;

    for(var i=0; i<this.length; i++){
        if (this[i] instanceof Array && array[i] instanceof Array) {
            if (!this[i].compare(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            return false;
        }
    }
    return true;
}

// Generate random player positions
var randomPositions = function(max_range){
    var pos_p1 = [ Math.floor(Math.random()*(max_range+1)),
                   Math.floor(Math.random()*(max_range+1)) ];
    var pos_p2 = [ (pos_p1[0] + Math.floor(Math.random()*(max_range-2)) + 1) % max_range,
                   (pos_p1[1] + Math.floor(Math.random()*(max_range-2)) + 1) % max_range ];
    return [ pos_p1, pos_p2];
}
