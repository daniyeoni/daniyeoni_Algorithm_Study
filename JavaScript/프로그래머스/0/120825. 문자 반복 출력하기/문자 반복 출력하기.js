function solution(my_string, n) {
    var answer = '';
    var result = '';
    for(let i = 0; i < my_string.length; i++){
        result = my_string.substring(i,i+1)
        for(let v = 0; v < n; v++){
            answer = answer + result
            continue
            
        }
    }
    return answer
}