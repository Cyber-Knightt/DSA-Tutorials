/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let low  = 1;
    let high = x;
    let result = 1;
    if(x==0) return 0;
    while(low<=high){
      let mid = Math.floor((high+low)/2)      
      if (mid*mid == x) {
        return mid;
      }
      if(mid*mid < x) {
        low = mid+1;
        result = mid;
      }else {
        high = mid-1;
      }
    }
    return result;
};