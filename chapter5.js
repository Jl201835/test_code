function Ninja() {
    var feints = 0;
    this.getFeints = function(){
    return feints;
    };
    this.feint = function(){
    feints++;
    };
}
var ninja1 = new Ninja();
ninja1.feint();
var imposter = {};
imposter.getFeints = ninja1.getFeints;
console.log(imposter.getFeints() === 1);