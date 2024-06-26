window.onload = function() {
  generateCards(); 
  // Generate cards on page load
}

function showStarsScreen() {
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('stars').style.display = 'block';

  // Create stars
  for (let i = 0; i < 6; i++) {
    createStar(i);
  }

  const backgroundAudio = document.getElementById('background-audio');
  backgroundAudio.play().catch(error => {
    console.error('Failed to play audio:', error);
  });
}

function createStar(index) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = `${Math.random() * 100}%`;
  star.style.animationDuration = `${Math.random() * 20 + 10}s`; // Randomize animation duration between 10 to 30 seconds
  star.style.animationDelay = `${Math.random() * 10}s`; // Randomize animation delay between 0 to 10 seconds
  const img = document.createElement('img');
  // URLs of the images for each star
  const imageUrls = [
    "assets/1.jpg",
    "assets/2.jpg",
    "assets/3.jpg",
    "assets/4.jpg",
    "assets/5.jpg",
    "assets/6.jpg"
  ];
  img.src = imageUrls[index];
  star.appendChild(img);
  document.getElementById('stars').appendChild(star);
  
  star.addEventListener('click', () => {
    openFullScreen(img.src);
  });
}

function openFullScreen(src) {
  const fullScreenView = document.getElementById('full-screen-view');
  const fullScreenImage = document.getElementById('full-screen-image');
  const compliment = document.getElementById('compliment');
  
  fullScreenImage.src = src;
  compliment.innerText = generateCompliment();
  
  fullScreenView.style.display = 'block';
}

function closeFullScreen() {
  document.getElementById('full-screen-view').style.display = 'none';
}

function generateCompliment() {
  const compliments = [
    "You're as bright as a shooting star!",
    "Your smile lights up the night like the moon!",
    "You're as beautiful as the night sky!",
    "You're the twinkle in my eye!",
    "You're my guiding star!",
    "You make every moment feel like a starry night!",
    "You're the constellation of my dreams!"
  ];
  return compliments[Math.floor(Math.random() * compliments.length)];
}

function generateCards() {
  const cardContainer = document.getElementById('card-container');
  const numCards = 3; // Number of cards to generate
  const minDistance = 150; // Minimum distance between cards

  const cardWidth = 100; // Width of each card
  const cardHeight = 100; // Height of each card

  const positions = []; // Array to store used positions

  const gifUrls = [
    "assets/1.gif",
    "assets/2.gif",
    "assets/3.gif"
  ];

  for (let i = 0; i < numCards; i++) {
    let tooClose; // Declare tooClose variable here

    const card = document.createElement('div');
    card.classList.add('card');

    let left, top;
    do {
      left = Math.random() * (window.innerWidth - cardWidth);
      top = Math.random() * (window.innerHeight - cardHeight);

      tooClose = positions.some(pos => Math.abs(pos.left - left) < minDistance && Math.abs(pos.top - top) < minDistance);

      if (tooClose) continue;

      positions.push({ left, top });

      card.style.left = `${left}px`;
      card.style.top = `${top}px`;
    } while (tooClose);

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const img = document.createElement('img');
    img.src = gifUrls[i];

    cardContent.appendChild(img);
    card.appendChild(cardContent);
    cardContainer.appendChild(card);

    // Add click event listener to the card
    card.addEventListener('click', showStarsScreen);
  }
}


