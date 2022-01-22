const canConstruct = (target, wordBank, m = new Map()) => {
    if(m.has(target)) return m.get(target);
    if (target === '') return true;
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const rem = target.slice(word.length);
            if (canConstruct(rem, wordBank, m)) {
                m.set(target, true);
                return true;
            }
        }
    }
    m.set(target, false);
    return false;
}

const canConstructTab = (target, wordBank) => {
    const a = Array(target.length + 1).fill(false);
    a[0] = true;
    for(let i = 0; i <= target.length; i++){
        if(a[i] === true){
            for(let word of wordBank){
                if(i + word.length <= target.length && target.slice(i, i + word.length) === word){
                    a[i + word.length] = true;
                }
            }
        }
    }
    console.log(a)
    return a[target.length];
}

console.log(canConstruct("abcdef",["ab", "abc", "cd", "def", "abcd"]))
console.log(canConstruct("skateboard",["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(canConstruct("enterapotentpot",["a", "p", "ent", "enter", "ot", "o", "t"]))
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]))
// true
// false
// true
// false

console.log(canConstructTab("abcdef",["ab", "abc", "cd", "def", "abcd"]))
console.log(canConstructTab("skateboard",["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(canConstructTab("enterapotentpot",["a", "p", "ent", "enter", "ot", "o", "t"]))
console.log(canConstructTab("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]))