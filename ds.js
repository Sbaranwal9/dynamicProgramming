function findPath(m,n){
    function findHelp(m,n,i,j){
        if(i > n || j > n) return null;
        if(m[i][j]===0) return null;
        if(i === n && j === n) return [''];
        let f = [];
        let a = findHelp(m,n,i+1,j);
        if(a !== null){
           a = a.map(x => x+='D');
           f = [...f,...a]; 
        }
        let b = findHelp(m,n,i,j+1);
        if(b !== null){
           b = b.map(x => x+='R'); 
           f = [...f,...b]; 
        }
        return f;
    }
    let c =  findHelp(m,n-1,0,0);
    if(c === null) return -1;
    c = c.map(x => x.split('').reverse().join(''))
    return c;
}
// m[][] = {{1, 0, 0, 0},
//          {1, 1, 0, 1}, 
//          {1, 1, 0, 0},
//          {0, 1, 1, 1}}
// DDRDRR DRDDRR