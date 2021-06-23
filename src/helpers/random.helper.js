let randomRange = (min, max) => {
    return parseInt(Math.random() * (max - min) + min);
};

let randomWeight = (weightList) => {
    return weightList[randomRange(0, weightList.length)];
};

export {
    randomRange,
    randomWeight
};