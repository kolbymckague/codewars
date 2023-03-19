function minMax(arr){
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    const maxMin = [min, max]
    return maxMin
  }