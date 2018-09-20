function a() {
    let myVar = 1;
    tmp = true;
    function b() {
        tmp = false;
        console.log(myVar);
    }
    b();
    c();
}

function c() {
    console.log(myVar);
}
var myVar = 0;
a();

var button = {
    click : 20,
    clicked: function() {
        console.log(this);
        this.click = 30;
        return this.click;
    }
}
console.log(button.clicked());
console.log(button.click);

var button2 = {
    click : 10,
    clicked: ()=> {
        console.log(this);
        this.click = 15;
        return this;
    }
}
console.log(button2.clicked());
console.log(button2.click);
console.log(button.clicked.bind(button2)());
console.log(button2.click);