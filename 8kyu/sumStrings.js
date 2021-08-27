function sumStr(a,b) {
    if(a === "" && b === "") return '0'; 
    if(a === "") a = "0";
    if(b ==="") b = "0";
    return (parseInt(a) + parseInt(b)).toString();
  }

//better solution
  function sumStr(a,b) {
    return (Number(a) + Number(b)).toString();
  }