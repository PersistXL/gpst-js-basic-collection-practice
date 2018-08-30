'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  var r=[];
  for(let i of collectionA){
    for(let j of collectionB){
          if(i===j){
             r.push(i)
          }
    }
  }

  return r;
}
