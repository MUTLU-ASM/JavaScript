//* cookies ten sonra güncel olarak session storage ve localstorage kullanılıyor.
//* veri tutma
//* local : her zaman ulaşılabilir.
//* sessioon : o anki veriyi tutar kapatılıp açılırsa silinir.
//* anahtar ve değer string olmak zorunda


localStorage.setItem("name","asım") //! locale ekleme
console.log(
    localStorage.getItem("name") //! key ile erişme
)
localStorage.removeItem("name") //! bu keyi siler
localStorage.key(0) //! keyleri döner


let name =["tayfun","ahmet","samet"]
const user ={
    name:"Asım",
    surname:"mutlu"
}
localStorage.setItem("name",names)
localStorage.setItem("user",user) //! object yazar boyle olmaz
localStorage.setItem("user",JSON.stringify(user)) //! string ve format belli

console.log(
    JSON.parse(localStorage.getItem(user)) //! parse ile string i objeye geri çevirme 
)

//! Örnek -------------------------------------------------

const basket = JSON.parse(localStorage.getItem("basket")) || []
const products = [
    {
        id:1,
        title:"mackbook pro 2021",
        price:40_000
    },
    {
        id:2,
        title:"Keychron k6",
        price:100
    },
    {
        id:3,
        title:"nuphy halo65",
        price:140
    }
]

function saveToStorage(){
    localStorage.setItem("basket",JSON.stringify(basket));
}

function addBasket(productId){
    const basketIndex=basket.findIndex(b=>b.productId==productId)
    if(item){
        if(basketItem>-1 ){
            basket[basketIndex]={
                ...basket[basketIndex],
                amount:basket[basketIndex].amount+1
            }
        }
        else{
            basket.push({
                productId,
                amount : 1
            })
            
        }
    }
    saveToStorage()
}

function removeBasket(productId){
    const item=basket.find(p=>p.productId==productId)
    if(item==amount==1){
        basket=basket.filter(p=>p.productId!=productId)
    }
    else{
        basket=basket.map(i=>{
            if(i.productId==productId){
                i.amount-=1
            }
            return i
        })
    }
    saveToStorage()
}

function totalPrice(){
    return basket.reduce((prev,productId)=>{
        const product =products.find(p=>p.id==productId)
        return prev +=(product.price*basket.amount)
    },0)
}

addBasket(2)
addBasket(3)
console.log(basket)
removeBasket(3)
console.log(basket)