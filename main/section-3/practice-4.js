'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var r = [];
  var h = {};
  for (let i of collectionA) {
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
  var q = objectB.value;
  for (let i of r) {
    for (let j of q) {
      if (i.key === j) {
        if (i.count >= 3) {
          i.count -= parseInt(i.count / 3);
        }
      }
    }
  }
  return r;
}
