const asylicHelp = (path, c, n) => {
    if(c == n) return [0];
    let a = []
    for(let i in path[c]){
        let x = asylicHelp(path, i, n);
        x = x.map(v => v+path[c][i])
        a.push(x);
    }
    return a;
}

const asylic = (n, m, arr) => {
    const path = {};
    for(let i = 0; i < m; i++){
        const c = {};
        c[arr[i][1]] =  arr[i][2];
        path[arr[i][0]] = {...path[arr[i][0]], ...c};
    }
    const a = asylicHelp(path, 1, n);
    let even = 0;
    let odd = 0;
    a.map(x => {
        if(x % 2 === 0) even++;
        else odd++;
    })
    console.log(even, odd)
}
// asylic(4, 5, [[1,2,6],[2,4,2],[1,3,5],[3,4,2],[1,4,3]])
// 1 2