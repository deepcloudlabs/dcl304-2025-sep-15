function get_sum_of_building_numbers(begin_no, end_no, limit) {
    let sum = 0, i;
    for (i = begin_no; i < end_no && sum < limit; i++) {
        sum += i;
    }
    return [sum, i - 1];
}

function test_building_no(N) {
    let [sum_left] = get_sum_of_building_numbers(0, N, N ** 2);
    let [sum_right, M] = get_sum_of_building_numbers(N + 1, N ** 2, sum_left)
    return [sum_right === sum_left, M]
}

for (let N = 2; N < 100_000; N += 1) {
    let [lives_at_the_building, M] = test_building_no(N);
    if (lives_at_the_building)
        console.log(`The mathematician lives at the building #${N}. There are ${M} buildings in the street!`);
}
