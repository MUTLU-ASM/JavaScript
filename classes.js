class Insan{ //! sınıf
  
    constructor(isim,soyisim,yas,maas){  //!Yapıcı metot
        this.isim = isim,
        this.soyisim = soyisim,
        this.yas = yas,
        this.maas = maas
    }

    bilgileriGoster(){
        console.log(`isim : ${this.isim} , soyisim : ${this.soyisim} , Yaş : ${this.yas} , Maaş : ${this.maas}`)
    }
}

//*Nesne oluşturmak
const insan = new Insan("Enes","Mutlu",23,10000);
insan.bilgileriGoster();