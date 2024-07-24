function solution(my_string, letter) {
    var answer = '';
    var string = '';
    
    for (let i = 0; i < my_string.length; i++){
        string = my_string.substring(i, i+1)
        if(string != letter){
            answer = answer + string  
        }
        else
            string.replace('')
    }
    return answer;
}