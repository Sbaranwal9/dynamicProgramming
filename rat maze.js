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

function findPath2(m,n){
   function findHelp(m,n,i,j,ar){
       if(i < 0 || i > n || j < 0 || j > n) return null;
       if(ar[i][j] === 1) return null;
       if(m[i][j]===0) return null;
       if(i === n && j === n) return [''];
       let f = [];
       ar[i][j] = 1;
       let a = findHelp(m,n,i+1,j,ar);
       if(a !== null){
          a = a.map(x => x+='D');
          f = [...f,...a]; 
       }
       let b = findHelp(m,n,i,j+1,ar);
       if(b !== null){
          b = b.map(x => x+='R'); 
          f = [...f,...b]; 
       }
       let c = findHelp(m,n,i-1,j,ar);
       if(c !== null){
          c = c.map(x => x+='U'); 
          f = [...f,...c]; 
       }
       let d = findHelp(m,n,i,j-1,ar);
       if(d !== null){
          d = d.map(x => x+='L'); 
          f = [...f,...d]; 
       }
       ar[i][j] = 0;
       return f;
   }
   const a = Array(n)
   .fill()
   .map(_ => Array(n).fill(0));
   let c =  findHelp(m,n-1,0,0,a);
   if(c === null) return [];
   c = c.map(x => x.split('').reverse().join(''))
   c.sort();
   return c;
} 

// const m = [[1, 0, 0, 0],
//          [1, 1, 0, 1], 
//          [1, 1, 0, 0],
//          [0, 1, 1, 1]]
// DDRDRR DRDDRR
