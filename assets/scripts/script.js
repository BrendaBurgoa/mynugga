
//Confetti! 

const Confettiful = function (el) {
  this.el = el;
  this.containerEl = null;

  this.confettiFrequency = 3;
  this.confettiColors = ["#fce18a", "#ff726d", "#b48def", "#f4306d"];
  this.confettiAnimations = ["slow", "medium", "fast"];

  this._setupElements();
  this._renderConfetti();
};

Confettiful.prototype._setupElements = function () {
  const containerEl = document.createElement("div");
  const elPosition = this.el.style.position;

  if (elPosition !== "relative" || elPosition !== "absolute") {
    this.el.style.position = "relative";
  }

  containerEl.classList.add("confetti-container");

  this.el.appendChild(containerEl);

  this.containerEl = containerEl;
};

Confettiful.prototype._renderConfetti = function () {
  this.confettiInterval = setInterval(() => {
    const confettiEl = document.createElement("div");
    const confettiSize = Math.floor(Math.random() * 3) + 7 + "px";
    const confettiBackground = this.confettiColors[
      Math.floor(Math.random() * this.confettiColors.length)
    ];
    const confettiLeft = Math.floor(Math.random() * this.el.offsetWidth) + "px";
    const confettiAnimation = this.confettiAnimations[
      Math.floor(Math.random() * this.confettiAnimations.length)
    ];

    confettiEl.classList.add(
      "confetti",
      "confetti--animation-" + confettiAnimation
    );
    confettiEl.style.left = confettiLeft;
    confettiEl.style.width = confettiSize;
    confettiEl.style.height = confettiSize;
    confettiEl.style.backgroundColor = confettiBackground;

    confettiEl.removeTimeout = setTimeout(function () {
      confettiEl.parentNode.removeChild(confettiEl);
    }, 2000);

    this.containerEl.appendChild(confettiEl);
  }, 25);
};


// Array de imágenes
const images = [
  './assets/images/png/1.jpg',
  './assets/images/png/2.jpg',
  './assets/images/png/3.jpg',
  './assets/images/png/4.jpg',
  './assets/images/png/5.jpg',
  './assets/images/png/6.jpg',
  './assets/images/png/7.jpg',
  './assets/images/png/8.jpg',
  './assets/images/png/9.jpg',
  './assets/images/png/10.jpg',
  './assets/images/png/11.jpg',
  './assets/images/png/12.jpg',
  './assets/images/png/13.jpg',
  './assets/images/png/14.jpg',
  './assets/images/png/15.jpg',
  './assets/images/png/16.jpg',
  './assets/images/png/17.jpg',
  './assets/images/png/18.jpg',
  './assets/images/png/19.jpg',
  './assets/images/png/20.jpg',
  './assets/images/png/21.jpg',
  './assets/images/png/22.jpg',
  './assets/images/png/23.jpg',
  './assets/images/png/24.jpg',
  './assets/images/png/25.jpg',
  './assets/images/png/26.jpg',
  './assets/images/png/27.jpg',
  './assets/images/png/28.jpg',
  './assets/images/png/29.jpg',
  './assets/images/png/30.jpg',
  './assets/images/png/31.jpg',
  './assets/images/png/32.jpg',
  './assets/images/png/33.jpg',
  './assets/images/png/34.jpg',
  './assets/images/png/35.jpg',
  './assets/images/png/36.jpg',
  './assets/images/png/37.jpg',
  './assets/images/png/38.jpg',
  './assets/images/png/39.jpg',
  './assets/images/png/40.jpg',
  './assets/images/png/41.jpg',
  './assets/images/png/42.jpg',
  './assets/images/png/43.jpg',
  './assets/images/png/44.jpg',
  './assets/images/png/45.jpg',
  './assets/images/png/46.jpg',
  './assets/images/png/47.jpg',
  './assets/images/png/48.jpg',
  './assets/images/png/49.jpg',
  './assets/images/png/50.jpg',
  './assets/images/png/51.jpg',
  './assets/images/png/52.jpg',
  './assets/images/png/53.jpg',
  './assets/images/png/54.jpg',
  './assets/images/png/55.jpg',
  './assets/images/png/56.jpg',
  './assets/images/png/57.jpg',
  './assets/images/png/58.jpg',
  './assets/images/png/59.jpg'
];

//Array de Videos
const videos = [
  './assets/images/png/1.mp4',
  './assets/images/png/2.mp4',
  './assets/images/png/3.mp4',
  './assets/images/png/4.mp4',
  './assets/images/png/5.mp4',
  './assets/images/png/6.mp4',
  './assets/images/png/7.mp4',
  './assets/images/png/8.MP4',
  './assets/images/png/9.MP4',
  './assets/images/png/10.MP4',
  './assets/images/png/11.MP4',
  './assets/images/png/12.MP4',
  './assets/images/png/13.MP4',
  './assets/images/png/14.MP4',
  './assets/images/png/15.MP4'
];

let currentBackground = '';
let isVideo = false;
const backgroundContainer = document.getElementById('background-container');
var firstTime = true;


// Función para seleccionar un elemento al azar
function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

let lastVideoIndex = -1;
let lastImageIndex = -1;

function getRandomElementWithoutRepetition(array, lastIndex) {
  let index;
  do {
    index = Math.floor(Math.random() * array.length);
  } while (index === lastIndex);
  return index;
}


// Función para cambiar la imagen o video de fondo
function changeBackground() {
	
	backgroundContainer.style.display="visible";
  // Decide aleatoriamente si usar una imagen o un video
  isVideo = Math.random() < 0.5;
  window.confettiful = new Confettiful(document.querySelector(".confetti"));
  document.querySelector('.confetti-container').style.visibility= "visible";
  const confettiContainer = document.querySelector('.confetti-container');
  confettiContainer.style.opacity = 1; // Asegurarse de que la opacidad esté al máximo
  confettiContainer.style.display = "block";

  if(firstTime) {
    document.querySelector('.confetti-container').style.visibility= "hidden";
    firstTime = false;
    confettiContainer.style.opacity = 0;
    confettiContainer.style.display = "none";
  }

  if (isVideo) {
    const videoIndex = getRandomElementWithoutRepetition(videos, lastVideoIndex);
    lastVideoIndex = videoIndex;
    currentBackground = videos[videoIndex];
    backgroundContainer.style.backgroundImage = '';
    setVideoBackground(currentBackground);
  } else {
    const imageIndex = getRandomElementWithoutRepetition(images, lastImageIndex);
    lastImageIndex = imageIndex;
    currentBackground = images[imageIndex];
    backgroundContainer.style.backgroundImage = `url(${currentBackground})`;
    removeVideoBackground();
  }

  // Iniciar el temporizador para hacer desaparecer el confeti
  setTimeout(() => {
    confettiContainer.style.opacity = 0; // Cambiar la opacidad a 0
    setTimeout(() => {
      confettiContainer.style.visibility = "hidden"; // Ocultar el contenedor después de la transición
      confettiContainer.style.display = "none";
    }, 1000); // Esperar el tiempo de la transición antes de ocultar el contenedor
  }, 1000); // Esperar 3 segundos antes de iniciar la desaparición
}

// Función para establecer un video como fondo
function setVideoBackground(videoSrc) {
  let video = document.getElementById('background-video');

  if (!video) {
      video = document.createElement('video');
      video.id = 'background-video';
      video.loop = true;
      video.muted = true;
      video.autoplay = true;
      video.style.position = 'absolute';
      video.style.top = '30%';
      video.style.left = '50%';
      video.style.width = '50%';
      video.style.height = '50%';
      video.style.minWidth = '50%';
      video.style.minHeight = '50%';
      video.style.transform = 'translate(-50%, -50%)';
      backgroundContainer.appendChild(video);
  }

  if (window.innerWidth < 600) {
    video.style.position = 'absolute';
    video.style.top = '23%';
    video.style.left = '50%';
    video.style.width = '70%';
    video.style.height = '70%';
    video.style.minWidth = '70%';
    video.style.minHeight = '70%';
    video.style.transform = 'translate(-50%, -50%)';
  } 

  video.src = videoSrc;
}

// Función para remover el video de fondo
function removeVideoBackground() {
  const video = document.getElementById('background-video');
  if (video) {
    video.remove();
  }
}

// Función para descargar la imagen de fondo
function downloadBackground() {
  document.querySelector('.confetti-container').style.display= "none";
  fetch(currentBackground)
    .then(response => response.blob())
    .then(blob => {
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.href = url;
      link.download = currentBackground.split('/').pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    })
    .catch(error => console.error('Error al descargar el archivo:', error));
}

// Seleccionar una imagen al azar al cargar la página
changeBackground();

// Añadir eventos a los botones
document.getElementById('change-background-button').addEventListener('click', changeBackground);
document.getElementById('download-background-button').addEventListener('click', downloadBackground);

function getZoomLevel() {
  // Obtener el nivel de zoom basado en devicePixelRatio
  return window.devicePixelRatio || 1;
}

function applyStylesBasedOnZoom() {
  const zoomLevel = getZoomLevel();
  const body = document.body;
  
  // Remover clases previas relacionadas con el zoom
  body.classList.remove('zoom-level-1', 'zoom-level-2', 'zoom-level-3');

  // Aplicar clases basadas en el nivel de zoom
  if (zoomLevel <= 1.25) {
    body.classList.add('zoom-level-1');
  } else if (zoomLevel > 1.25 && zoomLevel <= 2) {
    body.classList.add('zoom-level-2');
  } else {
    body.classList.add('zoom-level-3');
  }
}

// Ejecutar la función al cargar la página y al cambiar el tamaño de la ventana
window.addEventListener('load', applyStylesBasedOnZoom);
window.addEventListener('resize', applyStylesBasedOnZoom);



// close currently open modal
function closeModal() {
    document.querySelector('.modal.open').classList.remove('open');
    document.querySelector('.confetti-container').style.display= "none";
    document.body.classList.remove('modal-open');
    modalInput.value = ""; // Clear the input field
    //modal.style.display= "none";
}

