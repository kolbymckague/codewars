function sumDigits(number) {
  
    let result = 0;
   
    let arr = Math.abs(number).toString().split('');
    
    arr.forEach(num => {
        result += parseInt(num);
    })
    
    return result;
    
  }