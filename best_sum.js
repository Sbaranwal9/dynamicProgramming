const bestSum = (targetNum, numbers, m = new Map()) => {
    if(m.has(targetNum)) return m.get(targetNum);
    if(targetNum === 0) return [];
    if(targetNum < 0) return null;
    let v = null;
    for(let num of numbers){
        const rem = targetNum - num;
        const ar = bestSum(rem, numbers, m);
        // console.log(rem, ar);
        if(ar !== null){
            const a = [...ar, num]; // always need a new copy 
            // console.log("a updated ",a);
            if(v === null || v.length > a.length){
                v = a;
            }
        }
    }
    // console.log(targetNum, v);
    m.set(targetNum, v);
    return v;
}