const countConstruct = (target, wordbank, m = new Map()) => {
    if(m.has(target)) return m.get(target);
    if(target === '') return 1;
    let tot = 0;
    for(let word of wordbank){
        if(target.indexOf(word) === 0){
            const rem = target.slice(word.length);
            tot += countConstruct(rem, wordbank, m);
        }
    }
    m.set(target, tot);
    return tot;
}

countConstruct("purple",["purp", "p", "ur", "le", "purpl"])