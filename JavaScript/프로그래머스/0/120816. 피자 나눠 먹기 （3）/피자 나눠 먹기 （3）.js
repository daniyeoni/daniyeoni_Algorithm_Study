function solution(slice, n) {
    var result = 0;
    var answer = 0;
    
    if (n <= slice){
        return 1
        
    }
    else {
        if(n % slice != 0){
            result = n/slice
            answer = Math.ceil(result)
            return answer
        }
        else {
            result = n/slice
            return result
        }
        
    }
    
}