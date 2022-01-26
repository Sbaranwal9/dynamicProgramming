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

const allConstructTab = (target, wordBank) => {
    const a = Array(target.length + 1).fill().map(x => []);
    a[0].push([]);
    for(let i = 0; i <= target.length; i++){
        if(a[i].length > 0){
            for(let word of wordBank){
                if(i + word.length <= target.length && target.slice(i, i + word.length) === word){
                    const c = a[i].map(x => [...x, word]);
                    a[i + word.length] = [...a[i + word.length], ...c];
                }
            }
        }
    }
    console.log(a);
    return a[target.length];
}

console.log(allConstruct("purple",["purp", "p", "ur", "le", "purpl"]))
console.log(allConstruct("abcdef",["ab", "abc", "cd", "def", "abcd"]))
console.log(allConstruct("skateboard",["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(allConstruct("enterapotentpot",["a", "p", "ent", "enter", "ot", "o", "t"]))
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]))

console.log(allConstructTab("purple",["purp", "p", "ur", "le", "purpl"]))
console.log(allConstructTab("abcdef",["ab", "abc", "cd", "def", "abcd"]))
console.log(allConstructTab("skateboard",["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(allConstructTab("enterapotentpot",["a", "p", "ent", "enter", "ot", "o", "t"]))