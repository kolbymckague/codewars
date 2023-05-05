function addLength(str){
    return str.split(' ').map(function(v){return v+' '+v.length})
  }