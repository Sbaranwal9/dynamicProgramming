//memoization

const fib = (n, m=new Map()) => {
    if (n <= 2) return 1;
    if(!m.has(n))
        m.set(n,fib(n - 1,m) + fib(n - 2,m));
    return m.get(n);
}