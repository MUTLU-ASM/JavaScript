//*Veri depoloma ve iletme .Ortak veri formatıdır.

let sampleJSON = `[
    {
        "name":"Tayfun",
        "surname":"Erbilen"
    },
    {
        "name":"Kemal",
        "surname":"Sevinç"
    }
]`

let users = JSON.parse(sampleJSON) //! JSON dan objeye dönüştürme

console.log(users)


let users1 = JSON.parse(sampleJSON,(key,value)=>{
    return key == 'name' ? value.toUpperCase() : value
}) 

console.log(users1)


let categories = [
    {
        name : "css",
        count : 5
    },
    {
        name : "javascript",
        count : 16
    }
]
let categoriesJSON1 = JSON.stringify(categories1) //! Objeden JSON a dönüştürme.
let categoriesJSON = JSON.stringify(categories,["count"],4) //! İstediğimiz değeri göstertebiliriz.
console.log(categoriesJSON)



