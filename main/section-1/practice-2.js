'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  var r = [];
  var q = collectionB[0];
  for (let i of collectionA) {
    for (let j of q) {
      if (i === j) {
        r.push(i);
      }
    }
  }
  return r;
}
