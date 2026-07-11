// Database definition for verification codes
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
  const inputElement = document.getElementById("confirmation-code");
  const input = inputElement.value.trim().toUpperCase();
  
  const errorBox = document.getElementById("error-message");
  const resultCard = document.getElementById("result-card");
  const pdfUrl = document.getElementById("pdf-url");

  if (codes[input]) {
    // Correct Code Condition: Clear error, load destination, reveal pane
    errorBox.style.display = "none";
    pdfUrl.href = codes[input];
    resultCard.style.display = "block";
    
    // Smooth scroll straight down to the result card on mobile screens
    resultCard.scrollIntoView({ behavior: 'smooth' });
  } else {
    // Incorrect Code Condition: Reset view metrics, throw visual warning
    resultCard.style.display = "none";
    errorBox.style.display = "block";
  }
}

// Allow user to execute verification by simply clicking the 'Enter' key
document.getElementById("confirmation-code").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    checkConfirmationCode();
  }
});
