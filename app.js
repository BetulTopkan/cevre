let adresBtn = document.querySelector(".adress");
console.log(adresBtn);

adresBtn.addEventListener("click", function () {
  let adresBilgi = document.querySelector(".adress-bilgi");
  console.log(adresBilgi);

  // Eğer adresBilgi görünürse, gizle; görünmüyorsa göster
  if (adresBilgi.style.display === "block") {
    adresBilgi.style.display = "none";
  } else {
    adresBilgi.style.display = "block";
  }
});



let telefonBtn = document.querySelector(".telefonSpan");
console.log(telefonBtn);

telefonBtn.addEventListener("click", function () { 
    let telefonBilgi = document.querySelector(".telefon-bilgi");
    console.log(telefonBilgi);
    
    // Eğer telefonBilgi görünürse, gizle; görünmüyorsa göster
    if (telefonBilgi.style.display === "block") {
        telefonBilgi.style.display = "none";
    } else {
        telefonBilgi.style.display = "block";
    }
})
