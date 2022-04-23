

let obj = {name:'Jellinek', age:20, mesto: 'taschkent',}


let obj2 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

console.log(obj);
console.log(obj2);

console.log(obj2 === obj);

