// TODO : Document write ile cıktı verme. 

// document.write("Hello World")
// document.write("Asım Mutlu")
// document.write(55)

//!----------------------------------------------------------------------------------
// TODO : Console log metodunu kullanılırız.

// console.log("Hello World");
// console.log("Asım Mutlu");
// console.log(3.53);
// console.log(true);
// console.log({name:"Asim",surName:"Mutlu"});

// let a=5 , b=10;
// console.log("iki sayının toplamı : ",a+b);

// console.clear(); // !console ekranını temizlemeye yarar.
//!----------------------------------------------------------------------------------
// TODO : Alert(Uyarı) popup ile çıktı verme işlemleri.

// console.log(document.location.host);

// alert("Merhaba");
// let a=5 , b=10;
// alert("İki sayının toplamı : "+(a+b));

// alert("F5 tuşuna lütfen basmayınız");


/* 
    ! ----- SCOPE (KAPSAM) ----
    *->Global Scope : En geniş , her yerden erişilebilen scope türüdür.
    *->Function Scope : Sadece Function içinde erişilebilen dışında erişilmeyen scope türüdür.
    *->Block Scope : Function içerisine if,while,for gibi döngülerin içerisinde tanımlanan değişkenlerin sadece döngü içerisinde erişilir.

*/
//!----------------------------------------------------------------------------------
// TODO : Global Scope

//  var a = 5 ; // ->Global Scope

// function method1(){
//     console.log(a);
// }
// if(true){
//     method1();
// }
//!----------------------------------------------------------------------------------
// TODO : Function Scope

// function method2(){
//     var sayi=10;
//     console.log(sayi);
// }

// method2();
//!----------------------------------------------------------------------------------
// TODO : Block Scope

// function method3(){
//     if(true){
//         let b =10;
//     }
// }
// method3()

// ! Var - Let - Const
//!----------------------------------------------------------------------------------
// TODO :  Değişken nedir ? 

/*
    * var/let/const degiskenIsmi = deger;
    let sayi = 10;
*/

// ! var : function scope tur.Ram bellekte çok yer kaplar.Kullanılması tavsiye edilmez.

// function selamVer(){
//     var selam = "Herkese selam";
//     if(true){
//         var b = 5;
//     }
//     console.log(selam);
//     console.log(b);
// }
// selamVer();

// ! let te tekrar aynı değişken tanımı yapılamaz
//* let a = 5 , a = 6; Kabul edilemez.
// ! var da tekrar aynı değişken tanımı yapılabilir.
//* var a = 5 , a = 6; Kabul edilir.
// ! const da değişken değişimi yapılamaz sabittir.Yeni Bir değer atılamaz.
//* const a = 5 , a = 6; Kabul edilemez.


// TODO :  Veri tipleri
/*
1-String
2-Number
3-Boolean
4-Null
5-Unfefined
6-Object
7-Function
*/

// typeOf ile veri tipini görebiliriz.
// IntParse,Number,+ : string tipini number'a çevir.

// let name = "string";//!String
// let number = 2;     //!Number
// let bl = ture;      //!Boolean
// let bos = null;     //!Null
// let un = undefined; //!Unfefined
// let names = {       //!object
//     isim : "Samet",
//     soyad : "Kaya"
// }                   
// function customer(){//!Function       
//     let a=5;
//     console.log(a);
// }
// customer();

// let rakamlar = [1,2,3];//!Array
//!----------------------------------------------------------------------------------
// TODO :  Aritmetik Operatörler

/*  
//*      (=) atama operatörü önemli !
?         + , - , * , / , % , ++ , -- , ** 
?   (==) : eşittir. (===) : hem tipleri hemde değerlerinin eşit olup olmadıklarını kontrol eder. 

*/

// let not1 = 60;
// let not2 = 70;
// console.log(not1+not2)   //! Çıktı => 130 number tipi ile çıkar. işlem önceliğine dikkat edilmesi lazımdır.


// let sayi1 = "5"; 
// let sayi2 = 2;
// console.log(sayi1+sayi2) //!   Çıktı => 5 2 bu çıktıyı alma sebebimiz string+number olmasıdır 
                            //!   bu iki değer toplanmaz birleştirir. 

// ++,-- Bir bir artırma ,Bir bir azaltma olarak kullanılır.
// ** Bir sayinin üstünü almaktır.

//*   Alternatif olarak
//?   += , -= , *= , /= , %= , **= (sağdaki sayıyı sola atarak devam eder.)

//!----------------------------------------------------------------------------------
//    TODO :  Mantıksal Operatörler
//?   && : ve , || : veya , ! : değil
//!----------------------------------------------------------------------------------
//    TODO :  Karşılaştırma Operatörleri
//?   == : eşit , != : eşit değil mi , < : küçük mü , > : büyük mü , <= : küçük eşit mi , >= : büyük eşit mi
//!----------------------------------------------------------------------------------
//    TODO : Diyalog kutuları
//?   -Alert , -Prompt , -Confirm

//alert('Hoşgeldiniz')               //! Kullanıcıya gösterilen mesaj kutusu.
//prompt('Lütfen bir değer giriniz') //! Kullanıcıdan mesaj kutusu ile değer alırız. Bir değişkene atarak değeri tutabiliriz.Alınan dedğerler string alınır.
//confirm('Silmek istermisiniz')     //! Kullanıcıdan Tamam veya İptal butonları ile true,false değerler döndürür.
//!----------------------------------------------------------------------------------
//    TODO : Koşul yapıları

// let not = 65;

// if(not>50){
//     console.log("Geçtiniz , notunuz : " + not);
// }
// else{
//     console.log("Kaldınız , notunuz : " + not);
// }

// let yas = Number(prompt("Yaşınız :")); //! Number kullanmalıyız ki prompt'tan gelen değer string'tir.Number'a çevirmemiz gerekir.
// if(yas>=18){
//     alert("Ehliyet alabilir.");
// }
// else{
//     alert("Ehliyet alamaz")
// }

// ? if , else if , else yapısı

// let secilenYol = Number(prompt("Lütfen yol seçiniz ?" , "1 , 2 , 3 yollarından hangisi?"));
// if(secilenYol==1)
//     alert("Mutluluk yolu")
// else if(secilenYol==2)
//     alert("Huzur yolu")
// else if(secilenYol==3)
//     alert("Zor yol")
// else
//     alert("Kötü yol")
//!----------------------------------------------------------------------------------
// TODO : Çoklu if kullanmak

// let ad = prompt("İsminizi giriniz : ");
// let tc = prompt("Tc Kimli giriniz : ");
// kontrolEt(ad,tc);

// function kontrolEt(ad,tc){
//     if(ad!==""){
//         if(tc.length==11){
//             console.log("isim ve tc problemsiz girildi");
//         }
//         else{
//             console.log("Lütfen tc nizi 11 karakter olarak giriniz");
//         }
//     }
//     else{
//         console.log("Lütfen isim alanını boş bırakmayınız!!")
//     }
// }
//!----------------------------------------------------------------------------------
// TODO : Switch - Case 

/* Switch ifadesi hangi case'i izleyen sabitle çakışıyorsa, programın kontrolü o case'i izleyen kısma geçer. 
Bu case'den sonraki deyimler de kontrol edilmeden çalıştırılır.
case sabitlerinden hiçbiri ifade ile uyuşmuyorsa, programın akışı default'u izleyen kısıma geçer.*/

// let sayi = prompt("Lütfen 1-5 arasında bir rakam giriniz.")
// switch(sayi){
//     case 1 : console.log("Girilen değer 1'dir."); 
//             break;
//     case 2 : console.log("Girilen değer 2'dir."); 
//             break;
//     case 3 : console.log("Girilen değer 3'dir."); 
//             break;
//     case 4 : console.log("Girilen değer 4'dir."); 
//             break;
//     case 5 : console.log("Girilen değer 5'dir."); 
//             break;
//     default : console.log("Lütfen 1-5 arasında rakam giriniz!!!");
//             break;
// }        

//!----------------------------------------------------------------------------------
// TODO : Tür dönüşümleri

//* string , numbers , booleans , undefined and null.
//* object , function

//? string veri tipinden number veri tipine dönüştürmek.

// let a= 5 , b="10";

//* Number()

// console.log(a + Number(b));    //! normalde number string ifade toplanınca birleştirir fakat burada b nin türünü number yapınca toplandı.

//* parseInt() ile de yapabiliriz.

// console.log(a + parseInt(b));  //! Virgülden sonrasını yazmaz (5,1 -> 5)

//* parseFloat()

// console.log(a + parseFloat(b)); //! Virgülden sonrasını yazar (5,1 -> 5,1)

//? number veri tipinden string veri tipine dönüştürmek.

// let x= 5 , y="10";

// console.log(a.toString() +","+ b); //* çıktı => 5,10

//!----------------------------------------------------------------------------------

// TODO : Döngüler

//? FOR Döngüsü

//* 1 den 10 a kadar yazdırma.
// for(let i=1; i<=10; i++){
//     console.log(i);
// }

//? WHILE Döngüsü

// let sayac=0;
// while(sayac<=10){
//     console.log(sayac);
//     sayac++ //! artırılma yapılmassa sonsuz döngüye girer.
// }

//? DO WHILE Döngüsü
//* Burada do bloğundaki işlemi bir kere çalıştır sonra while döngüsüne gir demektir.

// let sayac=0;
// do{
//     console.log(sayac);
//     sayac++;
// }
// while(sayac<=10);

//!----------------------------------------------------------------------------------

// TODO : Break ve Continue

//? Break:Döngüden çıkmak için kullanılır.

// let sayac = 0;

// while(sayac<10){
//     console.log(sayac);
//     if(sayac==8){
//         break;  //! 8 de döngüden çıkar.
//     }
//     sayac++;
// }

//? Continue : Dögüden eşleşen veya verilen aralığı atlamaya yarar.Bir kere kırar devam ettirir.

// let sayac = 0;

// while(sayac<10){
//     sayac++;
//     if(sayac==8){
//         continue;  //! 8'i döngüden çıkar.
//     }
//     console.log(sayac);
// }

// TODO : Örnek

//? Çarpım Tablosu

// for(let i = 0; i<=10; i++){
//     document.writeln(i+" ile çarpam tablosu <br>")
//     for(let x = 0; x<=10; x++){
//         document.writeln(`${x} * ${i} : ${x*i} <br>`)
//     }
// }

//? Asal sayı bulma

// let sayi = Number(prompt("Lütfen bir sayı giriniz : "));
// let sonuc=true;
// for(let i=2; i<=Math.floor(sayi/2); i++){
//     if(sayi%i==0){
//         sonuc=false;
//         break;
//     }
// }
// if(sonuc){
//     alert(sayi+ " asaldır.")
// }
// else{
//     alert(sayi+ " asal değildir.")
// }

//? Faktöriyel hesaplama

// let sayi = Number(prompt("Bir sayı giriniz : "))
// let carpim=1;
// for(let i=1; i<=sayi; i++){
//     carpim=carpim*i;
// }
// alert("Sonuc : " + carpim);

//? 153 - 370 - 407 sayısı armstrong

// let sayi=prompt("Sayı giriniz : ");
// let toplam=0;
// for(let i=0; i<sayi.length; i++){
//     let rakam = sayi.charAt(i);
//     toplam += rakam*rakam*rakam;
// }

// Number(sayi)==toplam ? alert("Armstrong sayısıdır.") : alert("Armstrong sayısı değildir.");


//!----------------------------------------------------------------------------------

// TODO : Metotlar

//? ------Parametresiz ve geriye değer döndürmeyen metot tanımlamak

// function yazdir(){
//     //*kodlar yazılır.
// }

// yazdir(); //*bu şekil fonksiyon çağrılır.

// //örnek
// function topla(){
//     console.log(5+8)
// }
// topla();

// //? ------Parametreli metot tanımlamak

// function yazdir1(sayi){
//     //*kodlar yazılır.
// }

// yazdir1(5); //*bu şekil fonksiyon çağrılır.

//?örnek
// function topla1(sayi1,sayi2){
//     console.log(sayi1 + " ve " + sayi2)
// }
// topla1(5,7);

//?örnek
// let yas =Number(prompt("Lütfen yaşınızı giriniz : "));
// kontrolEt(yas)
// function kontrolEt(deger=18){
//    deger>=18?console.log("Ehliyet alabilir."):console.log("Ehliyet alamaz.");
// }

// //? ------Geriye değer döndüren metot tanımlamak.return : geriye döndürmek

// let donenDeger= carp(5);
// console.log(donenDeger)

// function carp(sayi){
//     let sonuc = sayi*sayi*sayi;
//     return sonuc;
// }

// //* Bir cümledeki kelime sayısını bulma

// let metin = "Şuanda javascript eğitimi almaktayım"

// let harf = prompt("Harfi giriniz : ")

// console.log("Harf sayısı : "+bul(harf));

// function bul(deger='a'){
//     let toplam=0;
//     for(let i= 0; i<metin.length; i++){
//         if(metin.charAt(i).toLowerCase()===deger.toLowerCase()){
//             toplam+=1
//         }
//     }
//     return toplam;
// }


// //* Mükemmel sayı
// //6 = 1,2,3,6 = 12 = 6*2

// isPerfectNumber(6);

// function isPerfectNumber(number){
//     let count=0;
//     for(let i=2; i<=number/2;i++){  
//         if(number%i==0){
//             count+=i;
//         }
//     }
//     count+=number+1;
    
//     count==number*2?console.log(`Girilen ${number} değeri mükemmel sayıdır.`):console.log(`Girilen ${number} değeri mükemmel sayı değildir.`);
// }
//!----------------------------------------------------------------------------------
// TODO : DİZİLER (ARRAY)

//*karışık değer tipleri tutabilir.

// let sayilar = [0,true,2,"Ali",4,"?",6,7,"s",9];

// sayilar[8]="y" //! dizi içerisindedki elemanı değiştirir.

// sayilar.length(); //! dizi sayısına ulaşılır.

// sayilar[sayilar.length-1]; //! son elamana ulaşılır.


//? Foreach

// let isimler=["Ali","Enes","Mehmet","Suat","Kerem"];

// isimler.forEach(function(isim){
//     console.log(isim);
// });

// for(let name of isimler)
// {
//     console.log(" - " + name)
// }


//? Dizi metotları

/*

push     : dizinin sonuna eleman ekler , ayrıca dizinin uzunluğunu döner.
unshift  : dizinin başına eleman ekler , eleman sayısını geriye döner.

pop      : dizinin sonundan eleman siler , eleman sayısını döner.
shift    : dizinin başından eleman siler , eleman sayısını döner.

splice(index,incdex) : eleman eklemek ve silmek için kullanılır.

toString : diziyi stringe çevirebiliriz.
join     : diziyi stringe çevirir . Farkı ise araya eleman ekleyebiliriz.

concat   : dizileri birleştirmek için kullanılır.
slice    : diziyi istenilen yerden bölüp yeni bir dizi oluşturmak.
lenght   : dizi uzunluğunu verir.
reverse  : dizinin elemanlarını ters çevirmek.
split    : belirli bir ifadeye göre bölüp diziye çevirmek.
indexOf  : eleman index numarasını verir.
includes : verilen elemanı içeriyor mu ona bakar.

*/


//? ürün arama uygulaması

// let urun1={
//     isim:"ACER swift",
//     kategori:"Teknoloji",
//     fiyat: 6.219
// }
// let urun2={
//     isim:"ACER nitro",
//     kategori:"Teknoloji",
//     fiyat: 15.400
// }
// let urun3={
//     isim:"ACER gaming",
//     kategori:"Teknoloji",
//     fiyat: 13.999
// }
// let urun4={
//     isim:"LENOVO V15",
//     kategori:"Teknoloji",
//     fiyat: 10.999
// }
// let urun5={
//     isim:"LENOVO Ideapad",
//     kategori:"Teknoloji",
//     fiyat: 4.515
// }

// let urunler=[urun1,urun2,urun3,urun4,urun5]
// let filtreliUrunler = [];
// let kullaniciUrunIsmi=prompt("Bir ürün ismi giriniz : ","Acer,Lenovo")

// getFiltreliUrunler(urunler);
// setFiltreliUrunler(filtreliUrunler);

// function getFiltreliUrunler(urunler){
//     urunler.forEach(function(urun){
//         if(urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(),0)){
//             filtreliUrunler.push(urun);
//         }
//     });
// }

// function setFiltreliUrunler(urunler){
// for(let urun of urunler){
//     console.log(`| ${urun.isim} | ${urun.fiyat} | ${urun.kategori}`)
//     }
// };

//? örnek kitap bulma

// let kitap1={isim:"Her şeyi Düşünme" , yazar : "Anne Bogel", fiyat : 25, raf:"1.5.Raf"}
// let kitap2={isim:"İiki şehrin hikayesi" , yazar : "Charles dickens", fiyat : 50 , raf:"2.3.Raf"}
// let kitap3={isim:"İnsan ne ile yaşar" , yazar : "Tolstoy", fiyat : 34, raf:"3.4.Raf"}
// let kitap4={isim:"Zafer sızlanarak kazanılmaz" , yazar : "Haluk tatar", fiyat : 45, raf:"4.1.Raf"}
// let kitap5={isim:"Şeker Portakalı" , yazar : "Jose mauro de vasconcelos", fiyat : 22, raf:"5.3.Raf"}

// let kitaplar=[kitap1,kitap2,kitap3,kitap4,kitap5];

// let raf11={kod :"1.1.Raf" , goster : false}
// let raf12={kod :"1.2.Raf" , goster : false}
// let raf13={kod :"1.3.Raf" , goster : false}
// let raf14={kod :"1.4.Raf" , goster : false}
// let raf15={kod :"1.5.Raf" , goster : false}

// let raf21={kod :"2.1.Raf" , goster : false}
// let raf22={kod :"2.2.Raf" , goster : false}
// let raf23={kod :"2.3.Raf" , goster : false}
// let raf24={kod :"2.4.Raf" , goster : false}
// let raf25={kod :"2.5.Raf" , goster : false}

// let raf31={kod :"3.1.Raf" , goster : false}
// let raf32={kod :"3.2.Raf" , goster : false}
// let raf33={kod :"3.3.Raf" , goster : false}
// let raf34={kod :"3.4.Raf" , goster : false}
// let raf35={kod :"3.5.Raf" , goster : false}

// let raf41={kod :"4.1.Raf" , goster : false}
// let raf42={kod :"4.2.Raf" , goster : false}
// let raf43={kod :"4.3.Raf" , goster : false}
// let raf44={kod :"4.4.Raf" , goster : false}
// let raf45={kod :"4.5.Raf" , goster : false}

// let raf51={kod :"5.1.Raf" , goster : false}
// let raf52={kod :"5.2.Raf" , goster : false}
// let raf53={kod :"5.3.Raf" , goster : false}
// let raf54={kod :"5.4.Raf" , goster : false}
// let raf55={kod :"5.5.Raf" , goster : false}

// let raflar = [
//     [raf51,raf52,raf53,raf54,raf55],
//     [raf41,raf42,raf43,raf44,raf45],
//     [raf31,raf32,raf33,raf34,raf35],
//     [raf21,raf22,raf23,raf24,raf25],
//     [raf11,raf12,raf13,raf14,raf15]
// ]


// function rafOlustur(){
//     console.clear();
//     let satir="";
//     for(let i=0 ; i<raflar.length; i++){
//         for(let j=0 ; j<5; j++){
//             satir+="|"+(raflar[i][j].goster ? raflar[i][j].kod : "---")
//         }
//         console.log(satir);
//         console.log("-------------------")
//         satir="";
//     }
// }

// function kodBul(kitapIsmi){
//     let rafKodu=null;
//     for(let kitap of kitaplar){
//         if(kitap.isim.toUpperCase().includes(kitapIsmi.toUpperCase(),0)){
//             rafKodu=kitap.raf
//         }
//     }
//     return rafKodu;
// }

// function raftaGoster(rafKod){
//     for(let i=0 ; i<raflar.length; i++){
//         for(let j=0; j<5; j++){
//             if(raflar[i][j].kod==rafKod){
//                 raflar[i][j].goster=true;
//                 break;
//             }
//         }
//     }
// }


// rafOlustur();

// let kitapIsmi=prompt("Lütfen kitap ismi giriniz.");
// let rafKod=kodBul(kitapIsmi);

// if(rafKod!=null){
//    raftaGoster(rafKod);
//    rafOlustur();
// }
// else{
//     alert("Girdiğiniz Kitap bulunamadı.")
// }
//!----------------------------------------------------------------------------------
// TODO : String Sınıfının Metotları
//? charAt() , concat() , indexof() , lastindexof() , toUpperCase() , toLowerCase() , trim() , splice()
//? substring() , replace() , split() , valueof() , startwith() , endswith() .

// let kurs = "Modern Web Geliştirme Kursu"
// let tarih = "2022"
// kurs.charAt(5)         //! istenilen index numarasını alır.
// kurs.concat(" ",tarih) //! İkisini birleştirir.
// kurs.indexOf("o")      //! harfin indexini döner.
// kurs.lastIndexOf("K")  //! harfin kelimenin indexini döner.
// kurs.toUpperCase()     //! tüm alfabetiği büyük harf yapar.
// kurs.toLowerCase()     //! tüm alfabetiği küçük harfe çevir.
// kurs.trim()            //! space leri temizler
// kurs.slice(7,10)       //! 7 den başla 10 indexe kadar al "Web" döner dilimleme görevini yapar.
// kurs.substring(7,10)   //! slice ile aynısıdr.
// kurs.replace("Modern","Güncel") //! Değiştirme görevi görür.
// kurs.split(" ")        //! Kelimeleri boşluğa göre ayırdı.Parantez içindeki değere göre ayırır.
// kurs.valueOf()         //!
// kurs.startsWith("M")   //! Başlangıç neyle başlar kontrol yapar.
// kurs.endsWith("Kursu") //! Sonu neyle bitiyor kontrol eder.

//!----------------------------------------------------------------------------------
// TODO : Math Sınıfı Metotları

//? Floor , ceil , round , max , min , random , abs , sqrt , pow , PI

// let a = 3.15

// Math.floor(a)   //! Alta Yuvarlar
// Math.ceil(a)    //! Üste yuvarlar
// Math.round(a)   //! En yakın sayıya yuvarlar.

// Math.max(1,2,4,)//! En büyük sayıyı döner
// Math.min(1,5,8) //! En küçük değeri döner

// Math.abs(-12)   //! Mutlak değerine döner
// Math.sqrt(9)    //! Karekökünü alır.
// Math.pow(2,7)   //! üstünü alır.
// Math.PI         //! 3.14

// Math.random()*100 //! 0-1 arasında değer döndürür.Değerle çarpıp o değer arasında üretebiliriz.
//!----------------------------------------------------------------------------------
// TODO : Date kullanımı

// let tarih = new Date() //! Şuanki tarihi verir
// tarih.getFullYear()    //! Şuanki yılı alır
// tarih.getMonth()       //! Şuanki ayı verir.
// tarih.getDate()        //! Şuanki tarihi gösterir.
// tarih.getDay()         //! Şuanki günü gösterir.

// tarih.toLocaleDateString() //! 10.03.2023 şeklinde verir
// tarih.toLocaleTimeString() //! saati verir. 12:52:00
// tarih.toLocaleString()     //! ikisini birlikte verir. 

// //?Set metot yeni değer atama

// tarih.setDate(24) //! günü değişir.
//!----------------------------------------------------------------------------------
// TODO : Değer ve Referans Tipler

//? Primitive (ilkel) Veri Türleri
//* String , Number , Boolean , Undefined , Null , Symbol

//? Reference (ilkel olmayan) Veri Türleri
//* Object , Array , Function
