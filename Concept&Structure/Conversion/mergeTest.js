const obj = {
    a: {
        //depth 1
        b: {
            //depth 2
            c: 333, //depth 3
        },
    },
}
const obj2 = {
    a: {
        //depth 1
        b: 222,
    },
}
const clone = { ...obj }

obj.a.b.c = 555
clone.a = 111
console.log(obj, clone)

const clone2 = { ...obj2 }
clone2.a.b = 555
console.log(obj2)
console.log(clone2)

const test = ['a', 'b']
