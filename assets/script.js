document.addEventListener("DOMContentLoaded", function () {
  //DEFINITION DIAPOSITIVES (slides)//
  const slides = [
    {
      image: "slide1.jpg",
      tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
      image: "slide2.jpg",
      tagLine:
        "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
      image: "slide3.jpg",
      tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
      image: "slide4.png",
      tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
  ];

  //SELECTION DES ELEMENTS HTML //
  const images = document.querySelectorAll(".banner-img");
  const dots = document.querySelectorAll(".dot");
  const leftArrow = document.querySelector(".arrow-left");
  const rightArrow = document.querySelector(".arrow-right");
  const bannerText = document.querySelector("#banner p");

  //INDEX DIAPOSITIVE ACTUELLE//
  let currentSlide = 0;

  //FONCTION MISE A JOUR AFFICHAGE DIAPOSITIVE //
  function updateSlide(index) {
    //MASQUER TOUTES LES IMAGES ET REINITIALISATION DES POINTS//
    images.forEach((image) => {
      image.style.display = "none";
    });
    dots.forEach((dot) => {
      dot.classList.remove("dot_selected");
    });
    //AFFICHER IMAGE INDEX ET SELECTION DU POINT CORRESPONDANT//
    images[index].style.display = "block";
    dots[index].classList.add("dot_selected");

    //MISE A JOUR TEXTE BANNIERE //
    bannerText.innerHTML = slides[index].tagLine;
  }

  //INITIALISATION AFFICHAGE PREMIERE DIAPOSITIVE//
  updateSlide(currentSlide);

  //GESTION CLIC GAUCHE//
  leftArrow.addEventListener("click", function () {
    console.log("Clic sur la flêche gauche");
    //ALLER DIAPOSITIVE PRECEDENTE EN BOUCLE //
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide(currentSlide);
  });

  //GESTION CLIC DROIT //
  rightArrow.addEventListener("click", function () {
    console.log("Clic sur la flêche droite");

    //ALLER DIAPOSITIVE SUIVANTE EN BOUCLE //
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide(currentSlide);
  });

  //GESTION CLIC SUR POINTS//
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      currentSlide = index;
      updateSlide(currentSlide);
    });
  });
});
