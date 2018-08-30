'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var q = objectB.value;
  for (let i of collectionA) {
    for (let j of q) {
      if (i.key === j) {
        if (i.count >= 3) {
          i.count -= parseInt(i.count / 3);
        }
      }
    }
  }


  return collectionA;
}
