function solution(n) {
    var result = 0;
    result = n/7
    
    if(n<=7){
        return 1
    }
    else {
        result = Math.ceil(result)
        return result
    }
    
}