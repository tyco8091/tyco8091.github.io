// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS
const storyText = 'In :inserty:, a lone tower called the :insertx: flickered dimly, tended by Elena, its last guardian. One stormy night, Elena sought shelter there. Learning of the dying flame, Elena set out into the Enchanted Forest for the Starflower, said to reignite the Beacon. :insertz:, Elena found it. Returning, Elena lit the Beacon anew, bringing hope to the land once more.';
const insertX = ['Beacon of Light', 'Celestial Watchtower', 'Illuminated Keep'];
const insertY = ['Eldoria', 'Arcadia', 'Mythoria'];
const insertZ = ['Battling dangers', 'Overcoming perils', 'Journeying through adversity'];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
  
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
  
    newStory = newStory.replaceAll(':insertx:',xItem);
    newStory = newStory.replaceAll(':inserty:',yItem);
    newStory = newStory.replaceAll(':insertz:',zItem);
  
    if (customName.value !== '') {
      const name = customName.value;
      newStory = newStory.replaceAll('Elena', name);
    }
  
    if (document.getElementById("uk").checked) {
      const weight = `${Math.round(300*0.0714286)} stone`;
      const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
      newStory = newStory.replaceAll('94 fahrenheit', temperature);
      newStory = newStory.replaceAll('300 pounds', weight);
    }
  
    story.textContent = newStory;
    story.style.visibility = 'visible';
}