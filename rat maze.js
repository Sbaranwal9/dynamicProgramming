// function findPath(m,n){
//     function findHelp(m,n,i,j){
//         if(i > n || j > n) return null;
//         if(m[i][j]===0) return null;
//         if(i === n && j === n) return [''];
//         let f = [];
//         let a = findHelp(m,n,i+1,j);
//         if(a !== null){
//            a = a.map(x => x+='D');
//            f = [...f,...a]; 
//         }
//         let b = findHelp(m,n,i,j+1);
//         if(b !== null){
//            b = b.map(x => x+='R'); 
//            f = [...f,...b]; 
//         }
//         return f;
//     }
//     let c =  findHelp(m,n-1,0,0);
//     if(c === null) return -1;
//     c = c.map(x => x.split('').reverse().join(''))
//     return c;
// }
// m[][] = {{1, 0, 0, 0},
//          {1, 1, 0, 1}, 
//          {1, 1, 0, 0},
//          {0, 1, 1, 1}}
// DDRDRR DRDDRR



findPath(m,n){
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
    return c;
}