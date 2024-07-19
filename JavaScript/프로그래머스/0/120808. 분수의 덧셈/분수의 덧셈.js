function solution(numer1, denom1, numer2, denom2) {
    
    var denom = denom1 * denom2
    var numer = (denom1 * numer2)+(denom2 * numer1)
    
    var maxValue = Math.max(denom, numer)
    var minValue = Math.min(denom, numer)
    var vir = 1
    
    for(let i = 2; i<= minValue; i++){
        if((maxValue%i==0)&&(minValue%i==0))
            vir = i
    }
    
    denom = denom/vir
    numer = numer/vir
    
    return [numer, denom]
    
    
    

}