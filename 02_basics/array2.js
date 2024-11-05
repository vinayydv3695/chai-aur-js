const trio = [" luffy", "zoro", "sanji"];

const yakuza = ["gin", "katsura", "takasugi"];


// pushing elemets one one array into another array.
trio.push(yakuza);

console.log(trio);
console.log(trio[2][1]);

trio.concat(yakuza)

console.log(trio);

// it will spill everything 
const all hero = =[...trio,   ...yakuza]

console.log(hero)



const naoarr =  [1,2,3[4,5,,6],7,[6,8,5]]


const realarr = naoarr.flat(Infinity)

console.log((realarr))


console.log(Array.isArray("Vinay"))

console.log(Array.from("Vinay"))
// it will give empty array
//
console.log(Array.from(name: " Vinay"))



let socre1 = 100
let socre2 = 160
let socre6 = 2200
let socre3 = 500

console.log(Array.of(socre1, socre2,socre3))









