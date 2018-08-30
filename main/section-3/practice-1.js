'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var q = objectB.value;
  for (let i of collectionA) {
    for (let j of q) {
      if (i.key === j) {
        i.count--;
      }
    }
  }

  return collectionA;
}
