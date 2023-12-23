let slideIndex = 0;
showSlides();

 function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function changeImage(num){
    const mainImage = document.getElementById('main-hotel-image')

    if(num==1){
        mainImage.src = "../images/1.jpg";
    }else if(num==2){
        mainImage.src = "../images/2.jpg";
    }else if(num==3){
        mainImage.src = "../images/3.webp";
    }else if(num==4){
        mainImage.src = "../images/4.jpg";
    }else if(num==5){
        mainImage.src = "../images/5.jpg";
    }else if(num==6){
        mainImage.src = "../images/6.jpg";
    }else if(num==7){
        mainImage.src = "../images/7.jpg";
    }else if(num==8){
        mainImage.src = "../images/8.jpeg";
    }
}