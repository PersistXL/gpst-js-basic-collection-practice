'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  var r = [];
  var b = [];
  for (let m of collectionA) {
    b.push(m.key)
  }
  var q = objectB.value;
  for (let i of b) {
    for (let j of q) {
      if (i === j) {
        r.push(i);
      }
    }
  }
  return r;
}
