function solution(n) {
    var answer = 0;
    for(let i = 1; i < n+1; i++){
        if (i%2==0){
            answer = answer+i
            continue
        }
    }
    return answer;
}