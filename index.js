// welcome screen
// const welcome = document.getElementById("welcome");
const welcome = document.getElementById('welcome');
const title = document.getElementById("title");
const titleText = document.getElementById("titleText");
let petType = "";

// starting overlay to choose pet
const startingPage = document.getElementById("startingPage");
const petName = document.getElementById("petName");
const pet = document.getElementById("selectAnimal");
// main game section
const container = document.getElementById("container");
const titleText2 = document.getElementById("titleText2");
// stats
const health = document.getElementById("health");
const healthOverlay = document.getElementById("healthOverlay");
const healthValue = document.getElementById("healthValue");
const happiness = document.getElementById("happiness");
const happinessOverlay = document.getElementById("happinessOverlay");
const happinessValue = document.getElementById("happinessValue");
const hunger = document.getElementById("hunger");
const hungerOverlay = document.getElementById("hungerOverlay");
const hungerValue = document.getElementById("hungerValue");
const thirst = document.getElementById("thirst");
const thirstOverlay = document.getElementById("thirstOverlay");
const thirstValue = document.getElementById("thirstValue");
const energy = document.getElementById("energy");
const energyOverlay = document.getElementById("energyOverlay");
const energyValue = document.getElementById("energyValue");
// buttons
const sleepBtn = document.getElementById("sleepBtn");
const foodBtn = document.getElementById("foodBtn");
const drinkBtn = document.getElementById("drinkBtn");
const walkBtn = document.getElementById("walkBtn");  
const activity2Btn = document.getElementById("activity2Btn"); 

// images
const mainImg = document.getElementById("mainImage");


//Opening animation and game setup
document.addEventListener("DOMContentLoaded", () => {
    welcome.style.marginTop = "5%";
    welcome.style.fontSize = "8px";
    title.style.fontSize = "28px";
    setTimeout(() => {initial()}, 5000);
});
function initial(){
    welcome.style.visibility = "hidden";
    titleText.style.visibility = "hidden";
    startingPage.style.visibility = "visible";
    startingPage.style.opacity = "100%";
}

pet.addEventListener("change", (e) => {
    petType = e.target.value;
    let nameOfPet = petName.value;
    startingPage.style.opacity = "0%";
    startingPage.style.visibility = "hidden";
    container.style.visibility = "visible";
    titleText2.innerText = `${nameOfPet} the ${petType}`
    setAct2Btn(petType);
});

sleepBtn.addEventListener("click", () => {
    mainImg.src = `images/shared/sleep.gif`
    setTimeout(() => {
        mainImg.src = `images/${petType.value}/stand.gif`;
        health.value +=10;
        energy.value +=20;
        hunger.value -=10;
        thirst.value -=10;
        happiness.value +=5;
    }, 5000);
    
});
foodBtn.addEventListener("click", () => {
    mainImg.src = `images/shared/food.gif`
    setTimeout(() => {
        mainImg.src = `images/${petType}/stand.gif`;
        hunger.value += 10;
        health.value += 5;
        thirst.value -= 2;
        energy.value -=4;
        happiness.value +=5;
    }, 5000);
    
});
drinkBtn.addEventListener("click", () => {
    mainImg.src = `images/shared/drink.gif`
    setTimeout(() => {
        mainImg.src = `images/${petType}/stand.gif`;
        thirst.value += 20;
        health.value += 8;
        hunger.value += 1;
        energy.value -= 4;
        happiness.value +=5;
    }, 5000);
    
});
walkBtn.addEventListener("click", () => {
        mainImg.src = `images/${petType}/walk.gif`;
        health.value +=5;
        happiness.value +=5;
        hunger.value -=5;
        thirst.value -=5;
        happiness.value +=10;
        setTimeout(() => {
            mainImg.src = `images/${petType}/stand.gif`; 
        }, 3000);    
});
activity2Btn.addEventListener("click", () => {
    mainImg.src = `images/${petType}/activity2.gif`
    happiness.value +=5;
    health.value +=5;
    hunger.value -=10;
    thirst.value -=10;
    happiness.value +=20;
    setTimeout(() => {
        mainImg.src = `images/${petType}/stand.gif`;
    }, 3000);
});
health.addEventListener("mouseover", () => {
    healthOverlay.style.visibility = "visible";
    healthOverlay.style.display = "flex";
    healthValue.innerText = `${health.value} / 100`;
});
health.addEventListener("mouseout", () => {
    healthOverlay.style.visibility = "hidden";
    healthOverlay.style.display = "none";
});
happiness.addEventListener("mouseover", () => {
    happinessOverlay.style.visibility = "visible";
    happinessOverlay.style.display = "flex";
    happinessValue.innerText = `${happiness.value} / 100`;
});
happiness.addEventListener("mouseout", () => {
    happinessOverlay.style.visibility = "hidden";
    happinessOverlay.style.display = "none";
});
hunger.addEventListener("mouseover", () => {
    hungerOverlay.style.visibility = "visible";
    hungerOverlay.style.display = "flex";
    hungerValue.innerText = `${hunger.value} / 100`;
});
hunger.addEventListener("mouseout", () => {
    hungerOverlay.style.visibility = "hidden";
    hungerOverlay.style.display = "none";
});
thirst.addEventListener("mouseover", () => {
    thirstOverlay.style.visibility = "visible";
    thirstOverlay.style.display = "flex";
    thirstValue.innerText = `${thirst.value} / 100`;
});
thirst.addEventListener("mouseout", () => {
    thirstOverlay.style.visibility = "hidden";
    thirstOverlay.style.display = "none";
});
energy.addEventListener("mouseover", () => {
    energyOverlay.style.visibility = "visible";
    energyOverlay.style.display = "flex";
    energyValue.innerText = `${energy.value} / 100`;
});
energy.addEventListener("mouseout", () => {
    energyOverlay.style.visibility = "hidden";
    energyOverlay.style.display = "none";
});
function changeValue(barNumber, change) {
    let progressBar = document.getElementById("health" + barNumber);
    progressBar.value = progressBar.value + change;
}

function setAct2Btn(petType){
    if (petType == "dog"){
        activity2Btn.innerText = "Fetch"; 
    } else if (petType == "bear"){
        activity2Btn.innerText = "Scratch Tree's";
    } else {
        activity2Btn.innerText = "Dance";
    };
}
setInterval(() => {
    health.value -= 1;
    happiness.value -= 1;
    hunger.value -= 1;
    thirst.value -= 1;
    energy.value -= 1;
}, 1000);