const buttons = document.querySelectorAll(".rating");

// console.log(buttons);

let ratingValue = "";
let selectedRating = document.getElementById("selectedRating");
const submitButton = document.querySelector(".submit");

// console.log(submitButton)

// console.log(selectedRating)

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // console.log(i+1);
    // console.log(e.target.getAttribute("value"));
    ratingValue = i + 1;
  });
}

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("It's submitted");
  console.log(ratingValue);
  selectedRating.innerText = ratingValue;
});
