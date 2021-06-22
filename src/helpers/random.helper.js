function randomRange(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

function randomWeight(input) {
    var array = [];
    for(var item in input) {
        for( var i=0; i<input[item]; i++ ) {
            array.push(item);
        }
    }

    return array[randomRange(0, array.length)];
}

export {
    randomRange,
    randomWeight
};