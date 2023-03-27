// TODO : getElementsByTagName etiketleri kapsar

const h1 = document.getElementsByTagName("h1");

//? 3 şekilde döndürüp yazdirabiliriz.
/*

//! 1.yazım
for(let i = 0; i<h1.length ; i++){
    console.log(h1[i])
}

//! 2.yazım
[...h1].forEach(element => {
    console.log(element)
});

//! 3.yazım
for(let el of h1){
    console.log(el)
}

*/

// TODO : getElementsByClassName class'lari kapsar

document.getElementsByClassName("title-1");


// TODO : getElementById tek bir id'i kapsar

const title = document.getElementById("title");

// TODO : querySelector içerisinde css seçicisini kapsar

document.querySelector(".title + #title");

// TODO : querySelectorAll NodeList döndürür.

document.querySelectorAll(".title"); 

// TODO : SetAttribute şekil,renk vb. eklemeler.

title.setAttribute("style","color:blue; background-color:yellow") //* Bu şekil style eklemeleri yapılabilir.
//! veya
title.style.color="black"; //* Bu şekilde de özellik ekleme alternatifi vardır.

//!-----------------------------------------------------------------------------------

title.setAttribute("title","test baslik")
//! veya 
title.title="test baslik"

//!-----------------------------------------------------------------------------------

title.setAttribute("class","YeniClassEkleme")
//! veya 
title.className="YeniClassEkleme"

//!-----------------------------------------------------------------------------------

title.classList.add("EkstraClass")    //* Class ların üzerine ekler. direk className diye eklersek var olanları silip yenisini ekler.
title.classList.remove("EkstraClass") //* içerisindeki class'ı siler.
title.classList.toggle("EkstraClass") //* Varsa sil yoksa ekleme işlemidir.

//!-----------------------------------------------------------------------------------

title.textContent="Yeni değer"  //* içerisindeki text i değiştirir.

title.innerHTML="Yeni <br> değer </br>"  //* HTML etiketi kullanılacaksa innerHTML kullanılır.

//!-----------------------------------------------------------------------------------

// TODO : createElement var olmayan element oluşturma.

//* döngüler ile birden fazla yazdırabiliriz.

for(let i = 1; i<3; i++){

    let yeniElement = document.createElement("h1")

    yeniElement.className="test"
    yeniElement.style.color="purple"
    yeniElement.textContent="Javascript ile eklendi " + i

    document.body.prepend(yeniElement); //! HTML e aktarma  . En başa ekler
    document.body.append(yeniElement); //! HTML e aktarma . Sona ekler

}

const allElements = document.querySelectorAll("h1.test")

for(const h1 of allElements){
    h1.remove() //* hepsini siler 
    //! veya
    // document.body.removeChild(h1) //* hepsini siler
}

//!-----------------------------------------------------------------------------------

// TODO : Event Listeners
//*onclick, onchange, onmouseover, onmouseout, onkeydown, onkeyup, onload

const button = document.getElementById("btn");

//* addEventListener : olay dinleyici

button.addEventListener("click",e=>{
    console.log(e)
})

//*Button 2

function clickHandle(e){
    console.log(e.id)
}

//! double click : iki kere tıklanırsa

button.addEventListener("dblclick",e=>{
    console.log(e)
})

//! mouseenter : üzerine gelinince çalışır.
//! mousemove : üzerinde hareket edince çalışır
//! mouseleave : üzerinden ayrıldığında çalışır.
