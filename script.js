class Player {
    constructor(name, position, number, image) {
        this.name = name;
        this.position = position;
        this.number = number;
        this.image = image;
    }
}

const nameInput = document.getElementById('neme');
const posInput = document.getElementById('pos');
const numInput = document.getElementById('num');
const imageInput = document.getElementById('image');
const showDiv = document.getElementById('show');
const pitch = document.getElementById('pitch');

const lineUp = []; // this is the correct declaration

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


playerCard.style.left = "30%";
playerCard.style.top = "40%";


function displayPlayers() {
    showDiv.innerHTML = ""; // clear previous

    lineUp.forEach(player => {
        const card = document.createElement("div");
        card.classList.add("player-card");

        card.innerHTML = `
            <img src="${player.image}" alt="${player.name}" class="player-img">
            <h2>${player.name}</h2>
            <p>Position: ${player.position}</p>
            <p>Jersey #: ${player.number}</p>
        `;

        showDiv.appendChild(card);
    });
}

// Optional — displays on the pitch with random-ish position for now
function displayOnPitch(player) {
    const div = document.createElement("div");
    div.classList.add("player-card");
    div.style.position = "absolute";
    div.style.top = `${Math.random() * 80 + 10}%`; // random position for now
    div.style.left = `${Math.random() * 60 + 20}%`;

    div.innerHTML = `
        <img src="${player.image}" alt="${player.name}" />
        <div>${player.name}</div>
        <div>#${player.number}</div>
        <div>${player.position}</div>
    `;

    pitch.appendChild(div);
}