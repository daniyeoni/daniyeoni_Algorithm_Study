function solution(array) {  
    array.sort((a,b)=> a-b)
    
    var num = Math.floor((array.length)/2)
    var answer = array[num]
    return answer;
    
}