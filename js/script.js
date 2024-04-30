let volume = 0; 
let clickCount = 0;  
let colorStage = 0; 
let shapeStage = 0; 
const volumeDisplay = document.querySelector("#volumeDisplay");
const clickCounter = document.querySelector("#clickCounter");
const progressBar = document.querySelector("#progressBar");
const congratsMessage = document.querySelector("#congratsMessage");
const shapes = document.querySelectorAll(".shape");

const colorStages = [
    "#FF5733", // Orange
    "#33FF57", // Green
    "#3357FF", // Blue
    "#FF33FF", // Magenta
    "#FFFF33"  // Yellow
];

const shapeStages = [
    "circle",
    "square",
    "triangle",
    "diamond",
    "star"
];

// update the progress bar
const updateProgressBar = () => {
    const progress = (volume / 100) * 100; 
    progressBar.style.width = `${progress}%`; 
};

// update volume and click counter
const updateDisplay = () => {
    volumeDisplay.textContent = `Volume: ${volume}%`;
    clickCounter.textContent = `Clicks: ${clickCount}/100`;
    volumeDisplay.style.backgroundColor = colorStages[colorStage]; 
    updateProgressBar(); 
};

// increase volume and reset click count
const increaseVolume = () => {
    clickCount++; 
    if (clickCount >= 100) { 
        if (volume < 100) { 
            volume += 5; 
            colorStage = (colorStage + 1) % colorStages.length; 
            shapeStage = (shapeStage + 1) % shapeStages.length; 
        }
        clickCount = 0; 
    }
    updateDisplay();
    if (volume >= 100) {
        congratsMessage.style.display = "block"; 
    }
};

// When shape is clicked
shapes.forEach((shape) => {
    shape.addEventListener("click", () => {
        increaseVolume();
        shape.style.backgroundColor = colorStages[colorStage]; 
        shape.className = `shape ${shapeStages[shapeStage]}`; 
    });
});