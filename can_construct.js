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

canConstruct("abcdef",["ab", "abc", "cd", "def", "abcd"])
canConstruct("skateboard",["bo", "rd", "ate", "t", "ska", "sk", "boar"])
canConstruct("enterapotentpot",["a", "p", "ent", "enter", "ot", "o", "t"])
canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"])