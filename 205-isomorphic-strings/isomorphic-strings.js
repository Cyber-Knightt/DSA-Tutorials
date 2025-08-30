/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;
    let mapST = {}; // s -> t
    let mapTS = {}; // t -> s
    for (let i = 0; i < s.length; i++) {
        let c1 = s[i];
        let c2 = t[i];
        if (mapST[c1] && mapST[c1] !== c2) return false;
        if (mapTS[c2] && mapTS[c2] !== c1) return false;
        mapST[c1] = c2;
        mapTS[c2] = c1;
    }
    return true;
};