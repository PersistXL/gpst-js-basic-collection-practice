'use strict';

module.exports = function countSameElements(collection) {
  var r = [];
  var h = {};
  for (let i of collection) {
    if (i.length > 1) {
      let a = i.split("-")
      h[a[0]] === undefined ? h[a[0]] = Number(a[1]) : h[a[0]] = Number(a[1]);
    }
    else {
      h[i] === undefined ? h[i] = 1 : h[i]++;
    }
  }
  for (let j in h) {
    r.push({
      key: j,
      count: h[j]
    })
  }
  return r;
}
