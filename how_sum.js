const howSum = (targetNum, numbers, m = new Map()) => {
    if(m.has(targetNum)) return m.get(targetNum);
    if(targetNum === 0) return [];
    if(targetNum < 0) return null;
    for(let num of numbers){
        const rem = targetNum - num;
        const a = howSum(rem, numbers, m);
        if(a !== null) {
            a.push(num);
            m.set(targetNum, a);
            return m.get(targetNum);
        }
    }
    m.set(targetNum, null);
    return null;
}

const howSumTab = (targetNum, numbers) => {
    const a = Array(targetNum + 1).fill(null);
    a[0] = [];
    for(let i = 0; i <= targetNum; i++){
        if(a[i] !== null){
            for(let j of numbers){
                if(i + j <= targetNum){
                    a[i+j] = [...a[i], j];
                }
            }
        }
    }
    return a[targetNum];
}


console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));

console.log(howSumTab(7, [2, 3]));
console.log(howSumTab(7, [5, 3, 4, 7]));
console.log(howSumTab(7, [2, 4]));
console.log(howSumTab(8, [2, 3, 5]));
console.log(howSumTab(300, [7, 14]));