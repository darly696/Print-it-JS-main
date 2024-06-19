document.addEventListener("DOMContentLoaded", function () {
  //DEFINITION DIAPOSITIVES (slides)//
  const slides = [
    {
      image: "assets/images/slideshow/slide1.jpg",
      tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
      image: "assets/images/slideshow/slide2.jpg",
      tagLine:
        "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
      image: "assets/images/slideshow/slide3.jpg",
      tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
      image: "assets/images/slideshow/slide4.png",
      tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
  ];

  //SELECTION DES ELEMENTS HTML //
  const images = document.querySelectorAll(".banner-img");
  const leftArrow = document.querySelector(".arrow-left");
  const rightArrow = document.querySelector(".arrow-right");
  const bannerText = document.querySelector("#banner p");
  const dotsContainer = document.querySelector(".dots");

  //INDEX DIAPOSITIVE ACTUELLE//
  let currentSlide = 0;

  //FONCTION MISE A JOUR AFFICHAGE DIAPOSITIVE //
  function updateSlide(index) {
    //MASQUER TOUTES LES IMAGES ET REINITIALISATION DES POINTS//
    images.forEach((image, imageIndex) => {
      image.style.display = imageIndex === index ? "block" : "none";
    });

    //AFFICHER IMAGE INDEX ET SELECTION DU POINT CORRESPONDANT//
    images[index].src = slides[index].image;
    images[index].style.display = "block";

    //MISE A JOUR TEXTE BANNIERE //
    bannerText.innerHTML = slides[index].tagLine;

    //MISE A JOUR SELECTION DES POINTS
    updateDotSelection(index);
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

  //FONCTION POUR CREER UN BOUTON DE POINT
  function createDotButton(index) {
    const button = document.createElement("button");
    button.classList.add("dot");
    button.dataset.slideIndex = index;

    //GESTION CLIC SUR POINTS//
    button.addEventListener("click", function () {
      currentSlide = index;
      updateSlide(currentSlide);
    });
    return button;
  }

  //MISE A JOUR DE LA SELECTION DES POINTS
  function updateDotSelection(selectedDotIndex) {
    dotsContainer.querySelectorAll(".dot").forEach((dot, index) => {
      if (index === selectedDotIndex) {
        dot.classList.add("dot_selected");
      } else {
        dot.classList.remove("dot_selected");
      }
    });
  }
  //GENERATION DES BOUTONS DE POINTS ET AJOUT AU DOM
  for (let i = 0; i < slides.length; i++) {
    const dotButton = createDotButton(i);
    dotsContainer.appendChild(dotButton);
  }
  // SELECTIONNER LE PREMIER POINT AU DEMARRAGE
  updateDotSelection(currentSlide);
});
