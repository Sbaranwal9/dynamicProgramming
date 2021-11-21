//memoization

const fib = (n, m=new Map()) => {
    if(m.has(n)) return m.get(n);
    if (n <= 2) return 1;
    m.set(n,fib(n - 1,m) + fib(n - 2,m));
    return m.get(n);
}