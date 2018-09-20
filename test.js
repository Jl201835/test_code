/*let obj = function(){
    let i = 0;
    return {
        setI: function(k) {
            i = k;
        },
        getI: function() {
            return i;
        }
    }
};

let x = obj();
x.setI(2);
console.log(x.getI());
*/
let journel = [];
function addEntry (events, squarrel) {
   journel.push({events, squarrel});
}
addEntry (['work', 'touched tree', 'pizza', 'running', 'TV'], false);
console.log(journel);
for (let entry of journel) {
    console.log(entry.events, entry.squarrel);
}

function Person(lastName, firstName) {
    this.lastName = lastName;
    this.firstName = firstName;
}

john = new Person('John', 'Eddy');
console.log(john);
Person.prototype.getFullName = function() {
    console.log(`${this.firstName} ${this.lastName}`);
}
john.getFullName();
console.log(john);
for (let key in john) {
    console.log(john[key]);
}
let a = new String('a');
for (let key in a) {
    console.log(key, a[key]);
}