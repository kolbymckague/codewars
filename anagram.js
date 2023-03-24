var isAnagram = function(test, original) {
    if (test.length !== original.length) return false
    return test.toLowerCase().split('').sort().join() === original.toLowerCase().split('').sort().join()
};
  