// memoization

const grid = (m, n, hm = new Map()) => {
    if (hm.has(m + ',' + n)) return hm.get(m + ',' + n);
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    hm.set(m + ',' + n, gridTraveler(m - 1, n, hm) + gridTraveler(m, n - 1, hm));
    return hm.get(m + ',' + n);
}

// tabulation

gridTab = (m, n) => {
    const a = Array(m + 1)
        .fill()
        .map(_ => Array(n + 1).fill(0));
    a[1][1] = 1;
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const c = a[i][j];
            if(j+1 <= n) a[i][j + 1] += c; 
            if(i+1 <= m) a[i + 1][j] += c; 
        }
    }
    return a[m][n];
    // console.log(a);
}

console.log(grid(1, 1));
console.log(grid(2, 3));
console.log(grid(3, 2));
console.log(grid(3, 3));
console.log(grid(18, 18));

console.log(gridTab(1, 1));
console.log(gridTab(2, 3));
console.log(gridTab(3, 2));
console.log(gridTab(3, 3));
console.log(gridTab(18, 18));