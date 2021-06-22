import winsNumber from "@/config/winsNumber.json";
import { randomRange, randomWeight } from "@/helpers/random.helper.js";

function _getNumbers(customAction) {
    let numbers = [];
        
    while (numbers.length < 6) {
        let number = customAction();
        
        if (numbers.indexOf(number) == -1)
            numbers.push(number);
    }
    
    numbers.sort((a, b) => {
        return a - b;
    });    

    return numbers;
}

function rollRandom(gameCount = 5) {
    
    let rows = [];
    
    for (var i = 0; i < gameCount; i++) {
        rows.push(_getNumbers(() => {
            return randomRange(1, 45);
        }));
    }
    
    return rows;
}

function rollWeight(gameCount = 5) {
    
    let rows = [];

    for (var i = 0; i < gameCount; i++) {
        rows.push(_getNumbers(() => {
            return randomWeight(winsNumber);
        }));
    }
    
    return rows;
}

export {
    rollRandom,
    rollWeight
};