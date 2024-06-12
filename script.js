

  var spruch = Array("Ey, Kollege, haste mal ne Ecke Tabak?",
  "Dies, das und so, weeßte ja.",
"Stell dich, du Flitzpiepe.",
"Das letzte Bier gestern war wieder schlecht, du…",
"Ey Hippieschwein. Mach’n Abflug. ",
"Boar, hat wer ne Ibu?");

  function randomSpruch() {
    var randomSpruch = spruch[Math.floor(Math.random() * spruch.length)];
    document.getElementById('randomSpruch').textContent = randomSpruch;
    document.getElementById('randomSpruch').style.display = 'flex';

  }

function ShowCat() {
document.getElementById('katzi').style.display = 'flex';
document.getElementById('hilfebutton').style.display = 'none';
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
