const removeFromArray = function(array) {
    const newArray = [];
    
    array.forEach(element => {
        if(!newArray.includes(element)){
            newArray.push(element);
        }
    });
    array =  newArray;
    return array;
};



// Do not edit below this line
module.exports = removeFromArray;
