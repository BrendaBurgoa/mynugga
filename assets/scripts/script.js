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
];

//Array de Videos
const videos = [
  './assets/images/png/1.mp4',
  './assets/images/png/2.MP4',
  './assets/images/png/3.MP4',
  './assets/images/png/4.MP4',
  './assets/images/png/5.MP4',
  './assets/images/png/6.MP4',
  './assets/images/png/7.MP4',
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
	
	backgroundContainer.style.display="block";
  document.querySelector('.data-text').style.display= "none";
  if (window.innerWidth > 600) {
    document.querySelector('.share_btn').style.display= "block";
  }
  document.querySelector('.data-container').style.height= "auto";


  // Decide aleatoriamente si usar una imagen o un video
  isVideo = Math.random() < 0.5;

  if(firstTime) {
    document.querySelector('.share_btn').style.display= "none";
    document.querySelector('.data-container').style.height= "100vh";
    document.querySelector('.data-text').style.display= "block";
    backgroundContainer.style.display="none";
    firstTime = false;
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
      video.style.transform = 'translate(-50%, -30%)';
      backgroundContainer.appendChild(video);
  }

  if (window.innerWidth < 600) {
    video.style.position = 'relative';
    video.style.top = '50%';
    video.style.left = '50%';
    video.style.width = '90%';
    video.style.height = '90%';
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


// Perritos

var videoSource = document.getElementById('myVideo');
//videoSource.src = 'assets/images/png/3.MP4';
document.getElementById('flying-nuggas').style.display="none";

if (window.innerWidth > 600) {

  document.getElementById('flying-nuggas').style.display="block";
  //videoSource.src = 'assets/images/png/1.mp4';
  document.getElementById('flying-nuggas').addEventListener('click', toggleNugs);
  var flyingDogs = false;
  function toggleNugs() {
    if (!flyingDogs) {
      document.getElementById('flying-nuggas').textContent = 'REMOVE FLYING $NUGGAS :(';
      //document.addEventListener("DOMContentLoaded", () => {
        const numberOfImages = 50;
        const images = [];
    
        // Create image elements and append them to the body
        for (let i = 0; i < numberOfImages; i++) {
          const img = document.createElement("img");
          img.src = "assets/images/apple-touch-icon.png";//${i + 1}.png`; // Replace with your image paths
            img.classList.add("floating-image");
    
          // Random initial position
          img.style.left = `${Math.random() * window.innerWidth}px`;
          img.style.top = `${Math.random() * window.innerHeight}px`;
    
          // Random initial speed and rotation
          img.dataset.vx = (Math.random() - 0.5) * 4; // Horizontal speed
          img.dataset.vy = (Math.random() - 0.5) * 4; // Vertical speed
          img.dataset.rotation = 0; // Initial rotation angle
          img.dataset.rotationSpeed = (Math.random() - 0.5) * 2; // Rotation speed
    
          document.body.appendChild(img);
          images.push(img);
        }
    
    
        // Function to update the position and rotation of images
        function updatePositions() {
          images.forEach(img => {
              let x = parseFloat(img.style.left);
              let y = parseFloat(img.style.top);
              let vx = parseFloat(img.dataset.vx);
              let vy = parseFloat(img.dataset.vy);
              let rotation = parseFloat(img.dataset.rotation);
              let rotationSpeed = parseFloat(img.dataset.rotationSpeed);
    
              // Update position
              x += vx;
              y += vy;
    
              // Check for collisions with the walls
              if (x <= 0 || x >= window.innerWidth - img.width) {
                  vx = -vx;
              }
              if (y <= 0 || y >= window.innerHeight - img.height) {
                  vy = -vy;
              }
    
              // Update rotation
              rotation += rotationSpeed;
    
              // Apply updated position, speed, and rotation
              img.style.left = `${x}px`;
              img.style.top = `${y}px`;
              img.style.transform = `rotate(${rotation}deg)`;
              img.dataset.vx = vx;
              img.dataset.vy = vy;
              img.dataset.rotation = rotation;
          });
    
          requestAnimationFrame(updatePositions);
        }
    
        // Start the animation
        updatePositions();
        flyingDogs = true;
      //});
    
    } else {
      flyingDogs = false;
      document.getElementById('flying-nuggas').textContent = 'FLYING $NUGGAS';
      const imagesToRemove = document.querySelectorAll('.floating-image');

      // Itera sobre cada imagen y la elimina del DOM
      imagesToRemove.forEach((image) => {
        image.parentNode.removeChild(image);
      });
    }
  }
}