module.exports = function reverse (n) {
      let a = Math.abs(n).toString();
      return Number(a.split('').reverse().join(''));
}
