// TODO : Map -> key(anahtar) , value (değer)

const map = new Map();

//? SET : anahtar ve value atama. anahtar ve value her çeşiti tutabilir.

// map.set(1,"Enes")
// map.set(true,5)
// map.set([1,2,3],{firstName:"Asım"})

// map.set(34,"İstanbul")
// map.set(35,"İzmir")
// map.set(06,"Ankara")
// map.set(01,"Adana")

//? GET : aldığı keye göre işlem yapar.

// console.log(map.get(6))

//? SİZE : uzunluğu yazar.

// map.size //! 4 yazar

//? DELETE : değeri siler.

// map.delete(34)

//? HAS : varmı yokmu sorgusu

// map.has(35) //! true yazar

//? For of map üzerinde dönmek

// for(let [key,value] of map){ //!Destructing
//     console.log(key,value)
// }

//? Keys 

// map.keys() //! keys'leri döner

//? Map ten array e çevirmek

// const array = Array.from(map)  //! örnek 1

// const array1 = [...map]   //! Örnek 2 

//? Array den Map e çevirmek

// const array2=[ [1,"Ali"],   [2,"Emre"],   [3,"Aslı"] ];
// const myMap = new Map(array2);
 
