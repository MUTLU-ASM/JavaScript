// TODO : RegExp constructor
//regex : bilinmeyeni bulmak
//* i = büyük küçük har duyarsız yapar.
//* ig = eşleşen herşeyi getirir.


let username="asim mutlu"

let pattern = "love"
let flag="gi"
let regEx=new RegExp(pattern,flag)
let regex=/love/gi

//!----------------------------------------------------------------------------------

let word = /salak/i
let comment =prompt("yorumunu yaz") 

if(word.test(comment)){
    alert("Sen salaksın")
}
else{
    alert("hmmm")
}

//!----------------------------------------------------------------------------------

let string="I love javascript and i love prototurk"
string.match(/love/ig)
string.search(/love/ig) //! ilk bulduğunun indexini döndürür.
let duzenleme = string.replace(/(J|j)avascript/g,"C#") //! parantez içindeki ya küçük j yada büyük j ye göre ara ve değiştir demektir.
console.log(duzenleme)

//!----------------------------------------------------------------------------------

let str = "Ben 30 yasindayim ve 1993 yilinda dogdum"
str.match(/[0-9]/g) //! [0-9] 0 dan 9 a kadar olan rakamları getirir.
//? (/\d/g) diyerek sayılara ulaşılabilir.
//? Bunu (/\D/g) diyerek harflere ulaşılabilir.

//!----------------------------------------------------------------------------------

let name = "1asim";

console.log(/^[a-z]+$/.test(name)) //! harfle başlayıp harfle bitmesi.

str.match(/\d{2,4}/) //! 2 ile 4 sayılarını getir.

let date="12-02-2020"

console.log(date.match(/(?<gun>\d{2})-(?<ay>\d{2})-(?<yil>\d{4})/)) //! gruplama