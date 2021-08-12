
function convertCamelName(name){
    let camelName = ''

    for(let i=0, newSpace=false; i<name.length; i++){
        if(name[i]===' '){
            newSpace = true;
            continue;
        }
        if(newSpace){
            camelName+=name[i].toUpperCase();
            newSpace = false;
        }else{
            camelName+=name[i].toLowerCase();
        }
    }
    return camelName;
}

const simpleCamel = (text,spliter=' ') => text.split(spliter)
    .map((word,wi)=>word.split('') // [['M','a','c',...],['A','i','r'],['M','1']]
        .map((c,ci)=>wi>0&&ci===0?c.toUpperCase():c.toLowerCase()) // [['m','a','c',...],['A',...],...]
        .join(''))
    .join('');

console.log(convertCamelName('Macbook Air M1'));
console.log(simpleCamel('Macbook Air M1'));