let sum_left = 0;
let sum_right = 0;
let i=0;

function get_sum_of_building_numbers(begin_no,end_no,limit) {
    let sum = 0;
    for (i = begin_no; i < end_no && sum < limit; sum += i,i++) ;
    return [sum, i-1];
}

for (let N=2; N<1_000_000; N+=1){
    let [sum_left,left_index] = get_sum_of_building_numbers(0,N,N**2);
    let [sum_right,M] = get_sum_of_building_numbers(N+1,N**2,sum_left)
    if (sum_right === sum_left){
        console.log(`N=${N}, M=${M}`);
    }
}
