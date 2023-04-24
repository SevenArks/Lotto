let randomRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
};

let randomWeight = (weightList) => {
    return weightList[randomRange(0, weightList.length)];
};

export {
    randomRange,
    randomWeight
};