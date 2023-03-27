function divCon(x){
    let numValue = 0;
    let strValue = 0;
    
    for(let i = 0; i < x.length; i++) {
      if(typeof(x[i]) === 'string' ) {
        strValue += parseFloat(x[i]);
      } else if(typeof(x[i]) === 'number' ) {
        numValue += x[i];
      }
    }
    return numValue - strValue;
  }