class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  const bstseq = (root) => {
    if(root === null) return [[]]
    const l = bstseq(root.left);
    const r = bstseq(root.right);
    const x = [];
    for(let a of l){
      for(let b of r){
        x.push([...a, ...b])
      }
    }
    for(let a of r){
      for(let b of l){
        x.push([...a, ...b])
      }
    }
    for(let a of x){
      a.unshift(root.val);
    }
    return x;
  };
  
  const a = new Node(3);
  const b = new Node(11);
  const c = new Node(4);
  a.left = b;
  a.right = c;
  
  //       3
  //    /    \
  //   11     4
  
  console.log(bstseq(a)); 

  // const a = new Node(3);
  // const b = new Node(11);
  // const c = new Node(4);
  // const d = new Node(4);
  // const e = new Node(-2);
  // const f = new Node(1);
  
  // a.left = b;
  // a.right = c;
  // b.left = d;
  // b.right = e;
  // c.right = f;
  
  // //       3
  // //    /    \
  // //   11     4
  // //  / \      \
  // // 4   -2     1
  
  // bstseq(a); 
  
  // // const a = new Node(1);
  // // const b = new Node(6);
  // // const c = new Node(0);
  // // const d = new Node(3);
  // // const e = new Node(-6);
  // // const f = new Node(2);
  // // const g = new Node(2);
  // // const h = new Node(2);
  
  // // a.left = b;
  // // a.right = c;
  // // b.left = d;
  // // b.right = e;
  // // c.right = f;
  // // e.left = g;
  // // f.right = h;
  
  // // //      1
  // // //    /   \
  // // //   6     0
  // // //  / \     \
  // // // 3   -6    2
  // // //    /       \
  // // //   2         2
  
  // // bstseq(a); 