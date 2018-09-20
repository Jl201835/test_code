'use strict'
let avg = (...n) => {
    let total = 0;
    for (let i = 0; i < n.length; i++)
       total += n[i];
    return total/n.length;
};

let spiceUp = (fn, ...n) => {
    return (...m) => {
        return fn.apply(null,n.concat(m));
    }
};

let doAvg = spiceUp(avg, 1,2,3);
console.log(doAvg(4,5,6));

let str1 = 'abcabcabc';
let str2 = 'ab';
let regex = new RegExp(str2,'g');
console.log(str1.match(regex));