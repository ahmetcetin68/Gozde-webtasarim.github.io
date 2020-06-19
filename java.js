var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); 
}
function validate(form){
    var adi = form.adi.value;
    var soyadi = form.soyadi.value;
    var hata = [];
  
    if (!uzunlukkontrol(adi,2,10)) {
        hata.push("Adınızı Girin En az 2 en fazla 10 karakter\n");
    }
  
    if (!uzunlukkontrol(soyadi,2,10)) {
        hata.push("Soyadınızı Girin En az 2 En fazla 10 karakter");
    }
 
    if (hata.length > 0) {
        hatalarigoster(hata);
        return false;
    }
  
    return true;
}
  
function uzunlukkontrol(text, min, max){
    min = min || 1;
    max = max || 10000;
  
    if (text.length < min || text.length > max) {
        return false;
    }
    return true;
}
  
function hatalarigoster(hata){
    var msg = "Aşağıdaki hataları düzeltip tekrar deneyin...\n";
    var numError;
    for (var i = 0; i<hata.length; i++) {
        numError = i + 1;
        msg += "" + numError + " " + hata[i];
    }
    alert(msg); 
}

