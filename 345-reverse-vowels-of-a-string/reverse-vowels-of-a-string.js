/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let arr = s.split(""); // convert string to array for swapping
    let left = 0, right = arr.length - 1;

    while (left < right) {
        // move left pointer until vowel
        while (left < right && !vowels.has(arr[left])) {
            left++;
        }
        // move right pointer until vowel
        while (left < right && !vowels.has(arr[right])) {
            right--;
        }

        // swap vowels
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    return arr.join("");
};