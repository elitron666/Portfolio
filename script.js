

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

  if (modal.style.display === 'block')
  {
    var imageId = document.getElementsByClassName("modal-content")[0].id;
    var image = document.getElementById(imageId)

    randomSpruch();
    if (image)
      document.getElementById('randomSpruch').textContent = image.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  var modal = document.getElementById("myModal");

  if (document.getElementById('katzi').style.display === 'flex')
  {
    randomSpruch();
  }
  modal.style.display = "none";
}

function initThumbnailClick() {
  var thumbnails = document.getElementsByClassName("thumbnail");
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");

  for (var i = 0; i < thumbnails.length; ++i) {
    var img = thumbnails[i];

    img.onclick = function() {
      var katzi = document.getElementById('katzi');
      var spruch = document.getElementById('randomSpruch');

      if (katzi.style.display === 'flex')
      {
        randomSpruch();
        spruch.textContent = this.alt;

        var zweiMoeglichkeiten = Math.floor(Math.random() * 1000) % 2;
	var posiLeft = Math.floor(Math.random() * 100) % 20;
	var posiTop = Math.floor(Math.random() * 100) % 50;

	if (zweiMoeglichkeiten == 0)
	{
          posiLeft = 90 - posiLeft;
        }
        katzi.style['left'] = posiLeft.toString() + '%';
        spruch.style['left'] = posiLeft.toString() + '%';
	katzi.style['bottom'] = posiTop.toString() + '%';
	spruch.style['bottom'] = posiTop.toString() + '%';
      }
      modal.style.display = "block";
      modalImg.src = this.src;
      modalImg.id = this.id
    }
  }
}

initThumbnailClick()
