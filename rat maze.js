const findPath = (m, n) => {
   function findHelp(i, j, visited, str, res) {
      if (i < 0 || i > n - 1 || j < 0 || j > n - 1) return;
      if (visited[i][j] === 1) return;
      if (m[i][j] === 0) return;
      if (i === n - 1 && j === n - 1) {
         res.push(str);
         return;
      }
      visited[i][j] = 1;
      findHelp(i, j + 1, visited, str + 'R', res);
      findHelp(i + 1, j, visited, str + 'D', res);
      findHelp(i - 1, j, visited, str + 'U', res);
      findHelp(i, j - 1, visited, str + 'L', res);
      visited[i][j] = 0;
   }
   const visited = Array(n)
      .fill()
      .map(_ => Array(n).fill(0));
   let res = [];
   findHelp(0, 0, visited, '', res);
   res.sort();
   return res;
}

// const m = [[1, 0, 0, 0],
//          [1, 1, 0, 1], 
//          [1, 1, 0, 0],
//          [0, 1, 1, 1]]
// DDRDRR DRDDRR
