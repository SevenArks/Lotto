function randomRange(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

export {
    randomRange
};