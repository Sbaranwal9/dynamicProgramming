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