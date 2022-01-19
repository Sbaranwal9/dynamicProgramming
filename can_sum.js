const canSum = (targetSum, numbers, m = new Map()) => {
    if(m.has(targetSum)) return m.get(targetSum);
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;
    for(let num of numbers){
        const remaining = targetSum - num;
        if(canSum(remaining, numbers, m)) {
            m.set(targetSum, true);
            return true;
        }
    }
    m.set(targetSum, false);
    return false;
}

const canSumTab = (targetSum, numbers) => {
    
}