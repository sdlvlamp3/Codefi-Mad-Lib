//variable for user input
const adj1 = document.getElementById("adj1");
const noun1 = document.getElementById("noun1");
const adj2 = document.getElementById("adj2");
const clothing = document.getElementById("clothing");
const bodyPart = document.getElementById("bodyPart");
const verb1 = document.getElementById("verb1");
const food = document.getElementById("food");

// variable to display mad lib
const madLibDisplay = document.querySelector('.mad-lib');

//variable for the form
const form = document.querySelector("form")

//variable for the mad lib story
const story = `My friends and I started a secret club! We meet every day by the <strong>${adj1}</strong> <strong>${noun1}</strong>. Our club has some special rules. If you want to join, you must wear <strong>${adj2}</strong> <strong>${clothing}</strong> on your <strong>${bodyPart}</strong>. You are not allowed to <strong>${verb1}</strong> during meetings, and you can only eat <strong>${food}</strong> for your meals. If you are interested in joining, you can reach me by calling 1-800-EAT-DIRT.`

form.addEventListener("submit", function (event) {
    event.preventDefault();
    madLibStoryDisplay();
})

function madLibStoryDisplay() {
  madLibDisplay.innerHTML = story
  .replace(`${adj1}`, adj1.value)
  .replace(`${noun1}`, noun1.value)
  .replace(`${adj2}`, adj2.value)
  .replace(`${clothing}`, clothing.value)
  .replace(`${bodyPart}`, bodyPart.value)
  .replace(`${verb1}`, verb1.value)
  .replace(`${food}`, food.value);
}