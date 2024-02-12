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
    "https://github.com/vihaanlab/website/assets/159790776/f1e1f669-ffe7-4315-af21-962bcf01ce5e.jpg",
    "https://github.com/vihaanlab/website/assets/159790776/6452b237-a591-41ae-9de2-ae796e023120.jpg",
    "https://github.com/vihaanlab/website/assets/159790776/8903c837-5c1d-4a9e-8820-69a8b36ed35d.jpg",
    "https://github.com/vihaanlab/website/assets/159790776/282df321-d93d-4a6e-8bea-e4bc1f75639b.jpg",
    "https://github.com/vihaanlab/website/assets/159790776/59a79e92-b669-4240-9d61-eb859dfdce2f.jpg",
    "https://github.com/vihaanlab/website/assets/159790776/613fe808-a59d-450f-ae5f-3ff6bbca48c7.jpg"
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
  const numCards = 5; // Number of cards to generate
  const minDistance = 150; // Minimum distance between cards

  const cardWidth = 100; // Width of each card
  const cardHeight = 100; // Height of each card

  const positions = []; // Array to store used positions

  const gifUrls = [
    "https://github.com/vihaanlab/website/assets/159790776/361e0d53-6e91-4a37-9b0e-a1a0b92d0ff0.gif",
    "https://github.com/vihaanlab/website/assets/159790776/9fab4cd9-4c9e-4ebf-96bd-a2e1335809a6.gif",
    "https://github.com/vihaanlab/website/assets/159790776/9b4a14d0-eefa-44de-b9bd-f5d48afdcde9.gif"
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


