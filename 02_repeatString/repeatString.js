const repeatString = function(world, time) {
    if(time < 0) return "ERROR";
    let string = '';
    for(let i = 0; i < time; i++){
        string += world
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
