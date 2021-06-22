import { randomRange } from "@/helpers/random.helper.js";

function rollRandom(gameCount = 5) {
    
    let rows = [];
    
    for (var i = 0; i < gameCount; i++) {
        let numbers = [];
        
        while (numbers.length < 6) {
            let number = randomRange(1, 45);
            
            if (numbers.indexOf(number) == -1)
            numbers.push(number);
        }
        
        numbers.sort(function(a, b) {
            return a - b;
        });
        
        rows.push(numbers);
    }
    
    return rows;
}

export {
    rollRandom
};