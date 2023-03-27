//? Destructuring - şeklini bozma
//? Spread - Dağılma , yayma
//? Rest - kalanın tamamı


// TODO : Destructuring

const numbers = [10,12,14]

//! const [ilkedegeri , ikincidegeri ....] = aktarılandizi 
const [number1 , number2] = numbers

console.log(number1) //! 10

const fullStack = [
    ["HTML","CSS","JAVASCRİPT"],
    ["C#","PHYTON","C++"]
]

const [frontend,backend]=fullStack

//* Bir değeri geçmek istersek virgülle boş bırakılabilir.
//! const [, ,backend1]=fullStack

//*Birden fazla değere değisken vermek zor olur o yüzden rest kullanılır.
 const names=["tayfun","mehmet","çınar","selin","kerem"]
 const[myName,myWifeName,myFriendName,...OtherNames]=names //! ...otherNames rest ile geri kalanını diziye atar.

 //? ÖRNEK
 const countries = [
    ["Türkiye","Ankara"],
    ["Norway","Oslo"],
    ["Sweden","Stockholm"]
 ]
 for(const [country,capital] of countries){
    console.log(`Ülke : ${country} , Başkent : ${capital}`)
 }


 //* OBJELERDE

 const user={
    name :"Asım",
    surname:"Mutlu",
    age : 22,
    pets:{
        cats:["Asil"]
    }
 }
 const {age = 25}=user //! değeri boş olursa age = 25 dersek age içerisi boşsa 25 yazdırır.
 const {name,surname :soyad}=user //! surname : soyad . isim değiştirmek için bu şekil yapılır.
 console.log(soyad)

//* diziyi Fonksiyon içerisinde kullanma
//! kullanılabilir benzer

function multiply(number){                 
    return number[0] * number[1]
 }

 //! kullanılabilir benzer

 function multiply([num1,num2]){
    return num1 * num2
 }
 
const number =[10, 10]
 console.log(multiply(number))