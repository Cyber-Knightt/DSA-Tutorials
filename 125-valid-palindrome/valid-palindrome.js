/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    if(str.lemgth == 0) return true;
    let left=0;
    let right = str.length-1;
    
    while(left<right){
      if (str[left] != str[right]) {
        return false;
      }
      left ++;
      right --;
    }
    return true;
};