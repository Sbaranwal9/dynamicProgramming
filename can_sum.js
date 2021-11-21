canSum = (targetSum, numbers, m = new Map()) => {
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;
    for(let num of numbers){
        const remaining = targetSum - num;
        if(!m.has(remaining))
           m.set(remaining, canSum(remaining, numbers, m));
        if(m.get(remaining)) return true;     
    }
    return false;
}