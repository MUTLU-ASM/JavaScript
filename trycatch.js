try{
    //Hata şüpheli kod
}
catch(err){
    //hata meydana geldiğinde yazılacak kod
}
finally{
    //Hata mesajı yazma ve hata olup olmaksızın çalışır.
}


try{
    let firstName = "tayfun"
    let lastName = "erbilen"
    let fullName = firstName + " " + surname //! surname tanımlamadık
    throw "oylesine hata" //! hata fırlatma
}
catch(err){
    console.log(err.message) //! hata mesajını döner,isim olarak e, err, error verilebilir.
    console.log("Bir hata var!!!!!!")
}
finally{
    //Hata mesajı yazma ve hata olup olmaksızın çalışır.
}