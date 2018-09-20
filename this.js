"use strict"
function test() {
    this.rice = true;
    console.log(this.rice);
    console.log(this);
    function testMore() {
        this.rice = false;
        console.log(wheat.rice);
        console.log(this);
    }
    testMore();
    this.testMore0 = function() {
        this.rice = true;
        console.log(wheat.rice);
        console.log(this);
    }
    this.testMore0();
}

//tmp = 'tmp';
//console.log(tmp);
//func = function() {};
let wheat = {};
//test();

test.call(wheat);

/*
function test2() {
    console.log('in test2');
    this.rice = true;
    console.log(this.rice);
    console.log(this);
    this.testMore = ()=> {
       console.log('in testMore');
       this.rice = false;
       console.log(this.rice, wheat.rice);
       console.log(this);
       this.testTest = () => {
           console.log('in testTest');
           this.rice = true;
           console.log(this.rice, wheat.rice);
           console.log(this);
           this.corn = true;
       }
       this.testTest();
       this.testTest2 = function() {
          console.log('in testTest2');
          this.rice = false;
          console.log(this.rice, wheat.rice);
          console.log(this);
          this.corn = false;
       }
       this.testTest2();
       testTest3 = function() {
          console.log('in testTest2');
          this.rice = true;
          console.log(this.rice, wheat.rice);
          console.log(this);
          this.corn = true;
       }
       testTest3();
       testTest4 = ()=>{
           console.log('in testTest4');
           this.rice = true;
           console.log(this.rice,wheat.rice);
           console.log(this);
           this.corn = true;
       }
       testTest4();
    }
    this.testMore();
    testMore2 = () => {
       console.log('in testMore2');
       this.rice = false;
       console.log(this.rice);
       console.log(wheat.rice);
       console.log(this); 
    }
    testMore2();
    testMore3 = function() {
        console.log('in testMore3');
        this.rice = true;
        console.log(this.rice);
        console.log(wheat.rice);
        console.log(this); 
    }
    testMore3();
}
console.log(this);
let wheat = {};
test2.call(wheat);
*/