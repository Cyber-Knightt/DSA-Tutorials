/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const parts = path.split('/');
    const stack = [];

    for (let part of parts) {
        if (part === '' || part === '.') {
            continue; // ignore empty or current directory
        } else if (part === '..') {
            stack.pop(); // go up one directory
        } else {
            stack.push(part); // valid directory name
        }
    }
    return '/' + stack.join('/')
};