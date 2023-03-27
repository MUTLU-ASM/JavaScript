//* Bir function veya özellik static ise class'a özgüdür
//* değilse nesneye özgüdür.

class Matematik{
    static topla(a,b){
        console.log(a+b)
    }
    cikar(a,b){
        console.log(a-b)
    }
    carp(a,b){
        console.log(a*b)
    }
    bol(a,b){
        console.log(a/b)
    }
}

const mat = new Matematik();
mat.topla(2,5) //!  static tanım kabul etmez
mat.bol(12,2)

//! Nesne oluşturarak static e erişemeyiz.Class ismi üzerinden erişilir
Matematik.topla(10,7)