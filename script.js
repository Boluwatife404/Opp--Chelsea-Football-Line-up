class Player {
  constructor(name, position, number, image, top, left) {
    this.name = name;
    this.position = position;
    this.number = number;
    this.image = image;
    this.top = top || `${Math.random() * 80 + 10}%`;  
    this.left = left || `${Math.random() * 60 + 20}%`;
  }
}

const nameInput = document.getElementById('name');
const posInput = document.getElementById('pos');
const numInput = document.getElementById('num');
const imageInput = document.getElementById('image');
const showDiv = document.getElementById('show');
const pitch = document.getElementById('pitch');

const lineUp = [];

function addToLineUp() {
  const name = nameInput.value;
  const pos = posInput.value;
  const num = numInput.value;
  const imgFile = imageInput.files[0];

  if (!name || !pos || !num || !imgFile) {
    alert("Please fill all fields including the image");
    return;
  }

  const imgURL = URL.createObjectURL(imgFile);
  const player = new Player(name, pos, num, imgURL);
  lineUp.push(player);

  displayPlayers();
  displayOnPitch(player);
}

function displayPlayers() {
  showDiv.innerHTML = ""; 

  lineUp.forEach(player => {
    const card = document.createElement("div");
    card.classList.add("player-info-card"); // ✅ NEW CLASS

    card.innerHTML = `
      <img src="${player.image}" alt="${player.name}" class="player-img">
      <h2>${player.name}</h2>
      <p>Position: ${player.position}</p>
      <p>Jersey #: ${player.number}</p>
    `;

    showDiv.appendChild(card);
  });
}

function displayOnPitch(player) {
  const div = document.createElement("div");
  div.classList.add("pitch-player"); // ✅ NEW CLASS
  div.style.top = player.top;
  div.style.left = player.left;

  div.innerHTML = `
    <img src="${player.image}" alt="${player.name}" />
    <div>${player.name}</div>
    <div>#${player.number}</div>
    <div>${player.position}</div>
  `;

  pitch.appendChild(div);
}
