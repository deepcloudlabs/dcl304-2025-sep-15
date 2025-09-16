// 15:10
// 3-digits
// 1 , ... , N-1 , N , N+1 , ... , M
// Write a js program to print N and M values!
// N=204, M=288
let sum_left = 0;
let sum_right = 0;
let i=0;
for (let N=2; N<100_000; N+=1){
    sum_left = 0;
    for (i = 1; i < N; sum_left += i,i++);
    sum_right = 0;
    for (sum_right=0,i=N+1;sum_right < sum_left;sum_right+=i,++i);
    if (sum_right === sum_left){
        console.log(`N=${N}, M=${i-1}`);
        //break;
    }
}
