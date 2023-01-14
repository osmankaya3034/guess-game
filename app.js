let sayi = Math.floor(Math.random() * 100);
let tahmin=document.getElementsByClassName("input")[0];
let sonuc= document.getElementsByClassName("p")[0];
let hak=document.getElementsByClassName("hak")[0];
console.log(sayi);
let altLimit = 0;
let ustLimit = 100;
counter = 0;

let x = document.getElementsByClassName("button")[0];
x.addEventListener("click",()=>{

  if(tahmin.value>100 || tahmin.value<1){    
    sonuc.innerText='1-100 ARASINDA SAYI GIRINIZ.'
    hak.innerHTML++}
   else if (sayi < tahmin.value) {
    ustLimit = tahmin.value;
    sonuc.innerText = `${altLimit} ILE ${ustLimit} ARASINDA SAYI GIRINIZ.`;
    hak.innerHTML++
  } else if (sayi > tahmin.value) {
    altLimit = tahmin.value;
    sonuc.innerText = `${altLimit} ILE ${ustLimit} ARASINDA SAYI GIRINIZ.`;
    hak.innerHTML++
  } else{sonuc.innerText = "KAZANDINIZ. TEBRIKLER";}
  tahmin.value=''
})  