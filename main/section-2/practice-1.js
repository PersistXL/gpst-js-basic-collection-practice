'use strict';

module.exports = function countSameElements(collection) {
  var r = [];
  var h = {};
  for (let i of collection) {
    h[i] === undefined ? h[i] = 1 : h[i]++;
  }
  for (let j in h) {
    r.push({
      key: j,
      count: h[j]
    })
  }
  return r;
}
