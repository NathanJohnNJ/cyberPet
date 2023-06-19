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
const mainImg = document.getElementById("mainImg");

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
    console.log(petType);
    let nameOfPet = petName.value;
    console.log(nameOfPet);
    startingPage.style.opacity = "0%";
    startingPage.style.visibility = "hidden";
    container.style.visibility = "visible";
    titleText2.innerText = `${nameOfPet} the ${petType}`
    console.log(titleText2.innerText);
    setAct2Btn(petType);
});

sleepBtn.addEventListener("click", () => {
    document.getElementById("mainImg").src = `images/shared/sleep.gif`
    setTimeout(() => {
        document.getElementById("mainImg").src = `images/${petType.value}/stand.gif`;
        health.value +=10;
        energy.value +=20;
        hunger.value -=10;
        thirst.value -=10;
        happiness.value +=5;
    }, 5000);
    
});
foodBtn.addEventListener("click", () => {
    document.getElementById("mainImg").src = `images/shared/food.gif`
    setTimeout(() => {
        document.getElementById("mainImg").src = "`images/${petType}/stand.gif`";
        hunger.value += 10;
        health.value += 5;
        thirst.value -= 2;
        energy.value -=4;
        happiness.value +=5;
    }, 5000);
    
});
drinkBtn.addEventListener("click", () => {
    document.getElementById("mainImg").src = `images/shared/drink.gif`
    setTimeout(() => {
        document.getElementById("mainImg").src = `images/${petType}/stand.gif`;
        thirst.value += 10;
        health.value += 8;
        hunger.value += 1;
        energy.value -= 4;
        happiness.value +=5;
    }, 5000);
    
});
walkBtn.addEventListener("click", () => {
    let walk = "";
    let stand = "";
    if (petType.value == "unicorn") {
        document.getElementById("mainImg").src = "images/unicorn/walk.gif";
        setTimeout(() => {
            document.getElementById("mainImg").src = "images/unicorn/stand.gif";
            health.value +=5;
            happiness.value +=5;
            hunger.value -=5;
            thirst.value -=5;
            happiness.value +=10;
        }, 5000);
    } else if(petType.value == "dog") {
        document.getElementById("mainImg").src = "images/dog/walk.gif";
        setTimeout(() => {
            document.getElementById("mainImg").src = "images/dog/stand.gif";
            health.value +=5;
            happiness.value +=5;
            hunger.value -=5;
            thirst.value -=5;
            happiness.value +=10;
        }, 5000);
    } else { 
        document.getElementById("mainImg").src = "images/bear/walk.gif";
        setTimeout(() => {
            document.getElementById("mainImg").src = "images/bear/stand.gif";
            health.value +=5;
            happiness.value +=5;
            hunger.value -=5;
            thirst.value -=5;
            happiness.value +=10;
        }, 5000);
    }    
});
activity2Btn.addEventListener("click", () => {
    document.getElementById("mainImg").src = `images/${petType}/activity2.gif`
    setTimeout(() => {
        document.getElementById("mainImg").src = `images/${petType}/stand.gif`;
        happiness.value +=5;
        health.value +=5;
        hunger.value -=10;
        thirst.value -=10;
        happiness.value +=20;
    }, 5000);
});
health.addEventListener("mouseover", () => {
    healthOverlay.style.display = "flex";
    healthValue.innerText = `${health.value} / 100`;
});
health.addEventListener("mouseout", () => {
    healthOverlay.style.display = "none";
});
happiness.addEventListener("mouseover", () => {
    happinessOverlay.style.display = "flex";
    happinessValue.innerText = `${happiness.value} / 100`;
});
happiness.addEventListener("mouseout", () => {
    happinessOverlay.style.display = "none";
});
hunger.addEventListener("mouseover", () => {
    hungerOverlay.style.display = "flex";
    hungerValue.innerText = `${hunger.value} / 100`;
});
hunger.addEventListener("mouseout", () => {
    hungerOverlay.style.display = "none";
});
thirst.addEventListener("mouseover", () => {
    thirstOverlay.style.display = "flex";
    thirstValue.innerText = `${thirst.value} / 100`;
});
thirst.addEventListener("mouseout", () => {
    thirstOverlay.style.display = "none";
});
energy.addEventListener("mouseover", () => {
    energyOverlay.style.display = "flex";
    energyValue.innerText = `${energy.value} / 100`;
});
energy.addEventListener("mouseout", () => {
    energyOverlay.style.display = "none";
});
function changeValue(barNumber, change) {
    let progressBar = document.getElementById("health" + barNumber);
    progressBar.value = progressBar.value + change;
}

function setAct2Btn(petType){
    if (petType == "dog"){
        console.log("Fetch");
        activity2Btn.innerText = "Fetch"; 
    } else if (petType == "bear"){
        console.log("Tree's");
        activity2Btn.innerText = "Scratch Tree's";
    } else {
        console.log("Dance");
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