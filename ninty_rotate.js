const rotate_90 = (m, n) => {
    const a = Array(n)
        .fill()
        .map(_ => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            process.stdout.write(`${m[i][j]} `);
        }
        console.log();
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            process.stdout.write(`${m[n - 1 - j][i]} `);
        }
        console.log();
    }

}
rotate_90([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]], 5)
