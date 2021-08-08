// class Car {
//     engine:string;
//     motor:string;
//     wheel:number;
//     color:string;
//     constructor(
//         engine:string,
//         motor:string,
//         wheel:number,
//         color:string
//     ){
//         this.engine=engine;
//         this.motor=motor;
//         this.wheel=wheel;
//         this.color=color;
//     }
//     getInfo(){
//         console.log(this.engine,this.motor,this.wheel,this.color);
//     }
// }
// let test = new Car('v6','none',4,'red');
// test.getInfo()
var Hello = /** @class */ (function () {
    function Hello(name) {
        this.name = name;
    }
    Hello.prototype.getName = function () {
        return this.name;
    };
    return Hello;
}());
var Wow = new Hello('hello');
var ww = new Hello(null);
console.log(Wow.getName());
console.log(ww.getName());
