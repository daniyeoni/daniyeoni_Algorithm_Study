function solution(n, k) {
    var answer = 0;
    var price = 12000;
    var drink = 2000;
    var count = 0;
    //n = 양꼬치 인분
    //k = 음료수 갯수
    
    if((n/10) > 0){
        count = Math.floor(n/10)
        if(k > count){
            answer = (price*n)+((k-count)*drink)
        }
        else
            answer = price*n
        
    }
    else {
        answer = (price*n) + (drink*k)
        
    }
    return answer;    
    
}