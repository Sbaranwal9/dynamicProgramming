const allConstruct = (target, wordBank, m = new Map()) => {
    if(m.has(target)) return m.get(target);
    if(target === '') return [[]];
    let ar = [];
    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const rem = target.slice(word.length);
            const arr = allConstruct(rem, wordBank, m);
            const tarr = arr.map(a => [word, ...a]);
            // never pushes value in same array arr.map(a => a.push(word));
            ar.push(...tarr);
        }
    }
    m.set(target, ar);
    return ar;
}