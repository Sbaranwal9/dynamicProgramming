const bestSum = (targetNum, numbers, m = new Map()) => {
    if (m.has(targetNum)) return m.get(targetNum);
    if (targetNum === 0) return [];
    if (targetNum < 0) return null;
    let v = null;
    for (let num of numbers) {
        const rem = targetNum - num;
        const ar = bestSum(rem, numbers, m);
        // console.log(rem, ar);
        if (ar !== null) {
            const a = [...ar, num]; // always need a new copy 
            // console.log("a updated ",a);
            if (v === null || v.length > a.length) {
                v = a;
            }
        }
    }
    // console.log(targetNum, v);
    m.set(targetNum, v);
    return v;
}

const bestSumTab = (targetNum, numbers) => {
    const a = Array(targetNum + 1).fill(null);
    a[0] = [];
    for (let i = 0; i <= targetNum; i++) {
        if (a[i] !== null) {
            for (let j of numbers) {
                if (i + j <= targetNum) {
                    const c = [...a[i], j];
                    if (a[i + j] === null) a[i + j] = c;
                    else a[i + j] = c.length < a[i + j].length ? c : a[i + j];
                }
            }
        }
    }
    return a[targetNum];
}

console.log(bestSum(7, [2, 3]));
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(7, [2, 4]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(300, [7, 14]));
console.log(bestSum(100, [1, 2, 5, 25]));

console.log(bestSumTab(7, [2, 3]));
console.log(bestSumTab(7, [5, 3, 4, 7]));
console.log(bestSumTab(7, [2, 4]));
console.log(bestSumTab(8, [2, 3, 5]));
console.log(bestSumTab(300, [7, 14]));
console.log(bestSumTab(100, [1, 2, 5, 25]));