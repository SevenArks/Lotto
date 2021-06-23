import winsNumber from "@/config/winsNumber.json";
import { randomRange, randomWeight } from "@/helpers/random.helper.js";

let _getNumbers = (customAction) => {
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
};

let rollRandom = (gameCount = 5) => {
    
    let rows = [];
    
    for (var i = 0; i < gameCount; i++) {
        rows.push(_getNumbers(() => {
            return randomRange(1, 45);
        }));
    }
    
    return rows;
};

let rollWeight = (gameCount = 5) => {
    
    let rows = [];
    let weightList = [];

    for(let item in winsNumber) {
        for(let i = 0; i<winsNumber[item]; i++ ) {
            weightList.push(item);
        }
    }

    for (let i = 0; i < gameCount; i++) {
        rows.push(_getNumbers(() => {
            return randomWeight(weightList);
        }));
    }
    
    return rows;
};

export {
    rollRandom,
    rollWeight
};