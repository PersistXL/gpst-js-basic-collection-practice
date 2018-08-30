'use strict';

module.exports = function countSameElements(collection) {
  let result = [];
  let H = {};
  for (let item of collection) {
    if (item.length === 1) {
      H[item] === undefined ? H[item] = 1 : H[item] += 1;
    } else {
      let grexNum = /\d{1,2}/;  //正则表达式  ：获取两位数以内的数字
      let grexWord = /^\w/;    //正则表达式：   获取首位字母的字母
      let num = item.match(grexNum)   //match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配               
      let word = item.match(grexWord)
      H[word[0]] === undefined ? H[word[0]] = Number(num[0]) : H[word[0]] += Number(num[0]);
    }
  }
  let r = [];
  for (let i in H) {    //遍历对象H 赋值给数组r
    r.push({
      name: i,
      summary: H[i]
    })
  }
  return r;

}
