var imageElement = document.getElementById("image");
var imageSources = [
    "img/alatoo.png", 
    "img/cat.jpg" 
];

var currentIndex = 0;

imageElement.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % imageSources.length; 
    imageElement.src = imageSources[currentIndex]; 
});

// Button Change Name
function changeName() {
    const userName = prompt("Please enter your name:");
    if (userName !== null && userName !== "") {
        document.getElementById("header").textContent = "Welcome " + userName;
    }
}

// Add a click event listener to the button
const nameButton = document.getElementById("button");
nameButton.addEventListener("click", changeName);

