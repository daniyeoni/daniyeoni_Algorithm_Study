function solution(n) {
    var answer = 0;
    var count = 0;
    for (let i =0; i <= n; i++){
        if (n % i === 0){
            count++
        }
        answer = count
    }
    return answer;
}