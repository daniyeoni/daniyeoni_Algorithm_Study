function solution(money) {
    var americano = 5500;
    var i = 0;
    var result = 0;
    
    i = Number.parseInt(money / americano)
    result = money - (americano*i)
    var answer = [i, result];
    
    return answer;
}