function repeatStr (n, s, output ="") {
    for(let i =0; i < n; i++){
    output += s;
    }
    return output;
  }

  //better solution
  return s.repeat(n);