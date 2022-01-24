const countConstruct = (target, wordBank, m = new Map()) => {
    if(m.has(target)) return m.get(target);
    if(target === '') return 1;
    let tot = 0;
    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const rem = target.slice(word.length);
            tot += countConstruct(rem, wordBank, m);
        }
    }
    m.set(target, tot);
    return tot;
}

const countConstructTab = (target, wordBank) => {
    const a = Array(target.length + 1).fill(0);
    a[0] = 1;
    for(let i = 0; i <= target.length; i++){
        if(a[i] >= 1){
            for(let word of wordBank){
                if(i + word.length <= target.length && target.slice(i, i + word.length) === word){
                    a[i + word.length] += a[i];
                }
            }
        }
    }
    return a[target.length];
}

console.log(countConstruct("purple",["purp", "p", "ur", "le", "purpl"]))
console.log(countConstructTab("purple",["purp", "p", "ur", "le", "purpl"]))