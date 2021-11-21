const howSum = (targetNum, numbers, m = new Map()) => {
    if(targetNum === 0) return [];
    if(targetNum < 0) return null;
    for(let num of numbers){
        const rem = targetNum - num;
        if(!m.has(rem))
            m.set(rem, howSum(rem, numbers, m));
        if(m.get(rem) !== null) {
            return [...m.get(rem), num];
        }
    }
    return null;
}