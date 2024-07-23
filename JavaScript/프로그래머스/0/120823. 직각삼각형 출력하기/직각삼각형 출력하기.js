const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {

    for(let i = 0; i<line; i++){
        console.log('*'.repeat(i+1))
    }
    
    //repeat (문자열을 주어진 횟수만큼 반복)
})