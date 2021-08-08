
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

class Hello{
    private name!:string;

    constructor(name:string){
        this.name = name;
    }

    getName():string{
        return this.name
    }
}

const Wow = new Hello('hello')
const ww = new Hello(undefined)
console.log(Wow.getName());
console.log(ww.getName())