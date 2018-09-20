/*function whoAmI1(){
    "use strict";
    return this;
}
function whoAmI2(){
    return this;
}
console.log(whoAmI1());
console.log(whoAmI2());

var ninja1 = {
    whoAmI: function(){
    return this;
    }
};
var ninja2 = {
    whoAmI2: ninja1.whoAmI
};
var identify = ninja2.whoAmI2;
console.log(ninja1.whoAmI() === ninja1); // true;
console.log(ninja2.whoAmI2() === ninja1); // false; 
console.log(identify() === ninja1); //false; 
console.log(ninja1.whoAmI.call(ninja2) === ninja2); // true; 
*/

function Ninja(){
    this.whoAmI = function() {
        return this;
    }
    //this following two are essentially the same if defined inside a function
    //this.whoAmI = function() {
    //    return this;
    //}.bind(this);
    //this.whoAmI = ()=> this;
}
var ninja1 = new Ninja();
var ninja2 = {
    whoAmI2: ninja1.whoAmI
};
console.log(ninja1.whoAmI() === ninja1);
console.log(ninja2.whoAmI2() === ninja2);
console.log(ninja2.whoAmI2());
