const canSum = (targetSum, numbers, m = new Map()) => {
    if (m.has(targetSum)) return m.get(targetSum);
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;
    for (let num of numbers) {
        const remaining = targetSum - num;
        if (canSum(remaining, numbers, m)) {
            m.set(targetSum, true);
            return true;
        }
    }
    m.set(targetSum, false);
    return false;
}

const canSumTab = (targetSum, numbers) => {
    const a = Array(targetSum + 1).fill(false);
    a[0] = true;
    for (let i = 0; i < targetSum; i++) {
        if (a[i] === true) {
            for (let j of numbers) {
                if (i + j <= targetSum) {
                    a[i + j] = true;
                }
            }
        }
    }
    return a[targetSum];
}

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));

console.log(canSumTab(7, [2, 3]));
console.log(canSumTab(7, [5, 3, 4, 7]));
console.log(canSumTab(7, [2, 4]));
console.log(canSumTab(8, [2, 3, 5]));
console.log(canSumTab(300, [7, 14]));

// true
// true
// false
// true
// false