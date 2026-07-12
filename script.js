const codes = {
  "AU9102": "https://drive.google.com/file/d/1PvvaVOiLXJtA42XUVXAqrrp-q9t3bOgJ/view?usp=drivesdk",
  "DL1133": "https://drive.google.com/file/d/12vuZ82XXAh-SnYiXPTpItuOhbnzca3Zr/view?usp=drivesdk",
  "UN9233": "https://drive.google.com/file/d/16u__1juxridZjG7FtL9PbBmaN3oI9ruk/view?usp=drivesdk",
  "AA7130": "https://drive.google.com/file/d/1DvFzwZpgk_jV7UyM1bzalR-Q87xs6X4H/view?usp=drivesdk",
  "UN1133": "https://drive.google.com/file/d/1c9oSLsnLY5vG_j6IaadMppL0uDTgcN3w/view?usp=drivesdk",
  "QA1172": "https://drive.google.com/file/d/1P9YFhUcjelDVNcX1a6YQ5WcYm1byHuOR/view?usp=drivesdk",
  "W4672": "https://drive.google.com/file/d/1e6UCVzy8EhJyPmT9BSRAdF9hXyGOv_Wi/view?usp=drivesdk"
};

function checkConfirmationCode() {
  const input = document.getElementById("confirmation-code").value.trim().toUpperCase();
  const errorBox = document.getElementById("error-message");
  const resultCard = document.getElementById("result-card");
  const pdfUrl = document.getElementById("pdf-url");

  if (codes[input]) {
    errorBox.style.display = "none";
    pdfUrl.href = codes[input];
    resultCard.style.display = "block";
    resultCard.scrollIntoView({ behavior: 'smooth' });
  } else {
    resultCard.style.display = "none";
    errorBox.style.display = "block";
  }
}

// Banner Slideshow Logic matching your previous portal style setup
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  if(slides.length > 0) {
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000); // Transitions slide views every 4 seconds
  }
}
