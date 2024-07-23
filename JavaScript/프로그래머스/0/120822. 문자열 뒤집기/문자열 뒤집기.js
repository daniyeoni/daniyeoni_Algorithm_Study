function solution(my_string) {
    var answer = '';
    for(let i = 0; i < my_string.length; i++){
        my_string[i] = my_string[my_string.length-(i)]
        answer = my_string[i] + answer 
        
    }
    return answer;
}