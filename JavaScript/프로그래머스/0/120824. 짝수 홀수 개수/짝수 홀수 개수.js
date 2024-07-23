function solution(num_list) {
    var answer = [];
    var count_a = 0;
    var count_b = 0;
    for(let i = 0; i < num_list.length; i++){
        if((num_list[i] % 2) == 0){
            count_a ++
            continue
        }
        else
            count_b ++
            continue
    }
    answer = [count_a,count_b]
    return answer;
}