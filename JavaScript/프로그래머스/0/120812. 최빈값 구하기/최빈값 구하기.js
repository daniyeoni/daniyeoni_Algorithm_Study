function solution(array) {
    const obj = {};
    
    for(let i = 0; i<array.length; i++){
        if(obj[array[i]] === undefined){
            obj[array[i]] = 1;
            continue
        }
        else
            obj[array[i]] += 1
        
    }
    
    // Object.entries => 객체를 배열로 변환하는 함수
    // sort를 사용하여 정렬
    
    const arr = Object.entries(obj).sort((a,b)=>{
        if(a[1]>b[1]){
            return -1;
        }
        if(a[1]<b[1]){
            return 1;
        }
        return 0;
    })
    
    if(arr.length ===1)
        return Number(arr[0][0])
    if(arr[0][1] === arr[1][1])
        return -1
    return Number(arr[0][0]);
}