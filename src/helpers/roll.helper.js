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

// 랜덤 뽑기
let rollRandom = (gameCount = 5) => {
    
    let rows = [];
    
    for (var i = 0; i < gameCount; i++) {
        rows.push(_getNumbers(() => {
            return randomRange(1, 45);
        }));
    }
    
    return rows;
};

// 가중치 뽑기
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

// 상위 25개 번호 중 랜덤 뽑기
let rollTopWeight = (gameCount = 5) => {
    
    let rows = [];
    let weightList = [];
    let sortableList = [];
    const maxNumber = (winsNumber.length < 25)? winsNumber.length : 25;

    for(let item in winsNumber) {
        sortableList.push([item, winsNumber[item]]);
    }

    // descending
    sortableList.sort(function(a, b) {
        return b[1] - a[1];
    });

    for(let i = 0; i<maxNumber; i++ ) {
        weightList.push(sortableList[i][0]);
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
    rollWeight,
    rollTopWeight
};