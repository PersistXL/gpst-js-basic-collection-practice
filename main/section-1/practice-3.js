'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  var r = [];
  var q = objectB.value;
  for (let i of collectionA) {
    for (let j of q) {
      if (i === j) {
        r.push(i);
      }
    }
  }
  return r;
}
