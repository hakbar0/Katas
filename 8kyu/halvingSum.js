function halvingSum(n, out=0) {
    if(n < 2) return 1;
      for(let i = 1; i < n; i*=2){
        out += Math.floor(n/i);
      }
    return out;
  }
  