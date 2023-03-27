// TODO : Callback
const fonksiyon = number=> number**2

function cube(cb,number){
    return cb(number) * number
}
cube(fonksiyon);

// TODO : returning function

const a=s1=>{
    const b=s2=>{
        const c=s3=>{
            return s1+s2+s3
        }
        return c
    }
    return b
}
console.log(a(5)(10)(20))

//!-----------------------------------------------------

// TODO : setInterval = belirlenen saniyede tekrar tekrar çalışması

function sayHello(){
    console.log("Hello")
}
setInterval(sayHello,1000)

// TODO : setTimeOut = belirtilen saniyede başlaması

setTimeout(sayHello,1000)

//? 5 kere yazdır iptal et

const interval=setInterval(sayHello,1000)

const timeout=setTimeout(() => {
    clearInterval(interval)
    console.log("interval iptal edildi")
}, 5000);

setTimeout(() => {
    clearTimeout(timeout)
    console.log("timeout iptal interval devam")
}, 3000);


//!-----------------------------------------------------

// TODO : map  
//* içerik değişimi.modifiye etmek içindir.

let users=[
    {
        id:1,
        name:"Ali",
    },
    {
        id:2,
        name:"hakan",
    },
    {
        id:3,
        name:"murat",
    }
]

users = users.map(user=>{
    if(user.id==2){
        user.name="Aslı"
    }
    return user
})
console.log(users)

//!-----------------------------------------------------

// TODO : filter
//* istediğimiz sonucu filtrelemek içindir
const id=users.filter(user=>user.id==3)
console.log(id)

//!-----------------------------------------------------
// TODO : reduce
const sayilar=[4,5,8,9]

//* acc : aktarilacak sayi total=0 gibi number : dizideki her bir eleman. sondaki 5 ise kaçtan toplamaya başlasın total = 5 gibi.

sayilar.reduce((acc, number) => acc+number,0)

sayilar.reduce(function(acc,number){
    return acc+ number
},5)

//!-----------------------------------------------------

// TODO :  every : her elemanın kontrolu

users.every(user=>user.id==1) //!her elamana bakar şuan çıktısı false 

// TODO : some : en az bir eleman varsa true döner

users.some(user=>user.id==1)

// TODO : find : koşula uyan ilk elemanı getirir.

const currentUser=users.find(user=> user.id==3)
console.log(currentUser)

// TODO :  findIndex : koşula uyan ilk elemanın indexini getirir.

// TODO :  Sort : Büyükten küçüğe sıralama.

const names=["Mehmet","Ali","Sinan"]
const numaralar =[5,8,1,3,4,10]
names.sort() //! string ifadelerde

numaralar.sort((a,b)=> a-b) //! sayıları küçükten büyüge sıralama
numaralar.sort((a,b)=> a-b) //! sayıları büyükten kücüge sıralama
users.sort((a,b)=> a.id-b.id) //! dizi içerisindeki obje id sini sıralama.
name.sort((a,b)=> a.localeCompare(b)) //! bu şekilde string ifadeleri sıralayabiliriz
     