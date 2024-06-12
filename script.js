

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

  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");

  if (modal.style.display === 'block')
  {
    randomSpruch()
    console.log(document.getElementById(modalImg.id))
    document.getElementById('randomSpruch').textContent = modalImg.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  var modal = document.getElementById("myModal");

  if (document.getElementById('katzi').style.display === 'flex')
  {
    randomSpruch()
  }
  modal.style.display = "none";
}

function initThumbnailClick() {
  var thumbnails = document.getElementsByClassName("thumbnail");
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");

  for (var i = 0; i < thumbnails.length; ++i) {
    var img = thumbnails[i]

    img.onclick = function() {
      if (document.getElementById('katzi').style.display === 'flex')
      {
        randomSpruch()
        document.getElementById('randomSpruch').textContent = this.alt;
      }
      modal.style.display = "block";
      modalImg.src = this.src;
      modalImg.id = this.id
    }
  }
}

initThumbnailClick()
