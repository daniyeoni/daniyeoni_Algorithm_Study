function solution(price) {
    var result = 0;
    if(price >= 500000){
        result = Math.floor(price*0.8)
        
    }
    else if(price>=300000){
        result = Math.floor(price*0.9)
        
    }
    else if(price >= 100000){
        result = Math.floor(price*0.95)
        
    }
    else{
        return price
    }
    return result;
}