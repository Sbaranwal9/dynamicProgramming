const permutation = (s, pre) => {
    if(s.length === 0) console.log(pre);
    else{
        for(let i = 0; i < s.length; i++){
            let rem = s.substring(0, i) + s.substring(i+1);
            permutation(rem, pre + s[i]);
        }
    }
}

permutation("hia", "");