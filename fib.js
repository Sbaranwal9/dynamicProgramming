// memoization

const fib = (n, m=new Map()) => {
    if(m.has(n)) return m.get(n);
    if (n <= 2) return 1;
    m.set(n,fib(n - 1,m) + fib(n - 2,m));
    return m.get(n);
}


// tabulation

const fibTab = (n) => {
    const a = Array(n+1).fill(0);
    a[1] = 1;
    for(let i = 2; i <= n; i++){
        a[i] = a[i-1]+a[i-2];
    }
    return a[n];
}

fib(6);
fib(7);
fib(8);
fib(50);

fibTab(6);
fibTab(7);
fibTab(8);
fibTab(50);