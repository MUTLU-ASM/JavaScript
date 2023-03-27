new Promise((resolve, reject) => {
    //! işlem bitmiş ve başarılı ise
    resolve()
    
    //! işlem hatalı ise
    reject()

})
.then(data=>{ //! işlem başarılı dönerse çalışır
    console.log(data)
})
.catch(data=>{  //! işlem başarısız dönerse çalışır
    console.log(data)
})
.finally(()=>{  //! Her durumda çalışır.
    console.log("bitti")
})


//* -----------------------------------    

const prom1=new Promise(resolve=>setTimeout(resolve,1000,"Asım Mutlu"))
const prom2=new Promise(resolve=>setTimeout(resolve,800,"prototurk.com"))
const prom3=new Promise((resolve,reject)=>setTimeout(reject,1000,"asım.net"))

Promise.all() //!  hepsi resolve olursa çalıştırır.

Promise.all([prom1,prom2,prom3])
    .then(([data1,data2,data3])=>console.log(data1))
    .catch(err=>console.log(err))

//* -----------------------------------    

Promise.race() //! ilk sonuçlanan (resolve ya da reject)

Promise.race([prom1,prom2,prom3])
    .then(response=>console.log(response))
    .catch(err=>console.log(err))

//* -----------------------------------

Promise.allSettled() //! hepsi tamamlandığında

Promise.allSettled([prom1,prom2,prom3])
    .then(response=>console.log(response))
    .catch(err=>console.log(err))

//* -----------------------------------

Promise.any() //! ilk resolve olan

Promise.any([prom1,prom2,prom3])
    .then(response=>console.log(response))
    .catch(err=>console.log(err))

//* -----------------------------------

fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
.then(data=>data.json)
.then(data=>console.log(data))

async function hello(){ //! async ile promise döner.
    // return new Promise(resolve=> resolve("hello world"));
    return "hello world"
}

const text = await hello() //! await : bir süre bekletmek içindir.await async ile beraber çalışır.
console.log(text)
