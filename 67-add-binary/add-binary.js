/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry = 0;
    let alength = a.length-1;
    let blength = b.length-1;
    let result = '';
    while(alength>=0 || blength>=0){
      let abit = alength>=0 ? parseInt(a[alength]):0;
      let bbit = blength>=0 ? parseInt(b[blength]):0;

      let sum = abit+bbit+carry;
      result = (sum%2)+result;
      carry = Math.floor(sum/2)
      
      alength--;
      blength--;
    }
    if (carry > 0) {
        result = carry + result;
    }
    return result;
};