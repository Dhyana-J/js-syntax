const sourceObj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
}

const targetObj = {
    aGroup: {
        a: 1,
        b: 2,
    },
    bGroup: {
        c: 3,
        d: 4,
        e: 5,
    },
}

const groupInfo = {
    aGroup: ['a', 'b'],
    bGroup: ['c', 'd', 'e'],
}

function makeGroup(source, info) {
    const merge = (a, b) => ({ ...a, ...b })
    return Object.keys(info) //['aGroup','bGroup']
        .map((group) => ({
            [group]: info[group] //aGroup : ['a','b']
                .map((k) => ({ [k]: source[k] })) // [{a:1},{b:2}]
                .reduce(merge, {}), //return {a:1,b:2}
        })) //return [{aGroup:{a:1,b:2}},{bGroup:{c:3,d:4,e:5}}]
        .reduce(merge, {}) //return {aGroup:{a:1,b:2},bGroup:{c:3,d:4,e:5}}
}

console.log(makeGroup(sourceObj, groupInfo))
