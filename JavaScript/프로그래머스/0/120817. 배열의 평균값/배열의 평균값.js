function solution(numbers) {
    var result = 0;
    var answer = 0;
    for(let i = 0; i<numbers.length; i++){
        result += numbers[i]
    }
    answer = result/(numbers.length)
    return answer;

}