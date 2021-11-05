gridTraveler = (m, n, hm = new Map()) => {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    if (!hm.has(m + ',' + n))
        hm.set(m + ',' + n, gridTraveler(m - 1, n, hm) + gridTraveler(m, n - 1, hm));
    return hm.get(m + ',' + n);   
}