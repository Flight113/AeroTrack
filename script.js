const codes = {
  "AU9102": "https://drive.google.com/file/d/1PvvaVOiLXJtA42XUVXAqrrp-q9t3bOgJ/view?usp=drivesdk",
  "DL8110": "https://drive.google.com/file/d/1dXuMepfpfOyjq0qn3oPmwP7hAnC9IDRm/view?usp=drivesdk",
  "UN9233": "https://drive.google.com/file/d/16u__1juxridZjG7FtL9PbBmaN3oI9ruk/view?usp=drivesdk",
  "AA0110": "https://drive.google.com/file/d/17iEWAw_OcvXheKUZkMMDF8oU6XI5W9yv/view?usp=drivesdk",
  "UN1133": "https://drive.google.com/file/d/1c9oSLsnLY5vG_j6IaadMppL0uDTgcN3w/view?usp=drivesdk",
  "QA1172": "https://drive.google.com/file/d/1P9YFhUcjelDVNcX1a6YQ5WcYm1byHuOR/view?usp=drivesdk",
  "W4672": "https://drive.google.com/file/d/1e6UCVzy8EhJyPmT9BSRAdF9hXyGOv_Wi/view?usp=drivesdk"
};

function checkConfirmationCode() {
  const input = document.getElementById("confirmation-code").value.trim().toUpperCase();
  const errorBox = document.getElementById("error-message");
  const resultCard = document.getElementById("result-card");
  const pdfViewer = document.getElementById("pdf-viewer");
  const pdfUrlBtn = document.getElementById("pdf-url");

  if (codes[input]) {
    errorBox.style.display = "none";
    
    let embedUrl = codes[input].replace('/view?usp=drivesdk', '/preview?pli=1');
    pdfViewer.src = embedUrl;
    
    let fileId = codes[input].match(/\/d\/([a-zA-Z0-9-_]+)/)[1];
    let downloadUrl = "https://docs.google.com/uc?export=download&id=" + fileId;
    
    pdfUrlBtn.href = downloadUrl;
    
    resultCard.style.display = "block";
    resultCard.scrollIntoView({ behavior: 'smooth' });
  } else {
    resultCard.style.display = "none";
    errorBox.style.display = "block";
  }
}

function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  const icon = document.getElementById("menuToggle");
  
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    icon.className = "fas fa-bars";
  } else {
    menu.classList.add("open");
    icon.className = "fas fa-times"; 
  }
}

function closeMenu() {
  const menu = document.getElementById("dropdownMenu");
  const icon = document.getElementById("menuToggle");
  menu.classList.remove("open");
  icon.className = "fas fa-bars";
}

// Fixed Carousel Animation Engine - Prevents blank slide transitions
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }    
  
  if (slides.length > 0) {
    slides[slideIndex - 1].style.display = "block";  
    // Extended timing slightly to coordinate perfectly with CSS keyframes
    setTimeout(showSlides, 5000); 
  }
}
