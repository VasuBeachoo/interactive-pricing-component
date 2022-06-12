const viewCount = document.querySelector(".interactive__view-count");
const price = document.querySelector(".interactive__price");
const pricingText = document.querySelector(".interactive__pricing-text");
const slider = document.querySelector(".interactive__slider");
const toggle = document.querySelector(".interactive__toggle");
const toggleCircle = document.querySelector(".interactive__toggle-circle");
const discountText = document.querySelector(".interactive__discount-text");

let pageCount = 0;
let planPrice = 0;
let planType = "monthly";

function handleResize() {
  if (window.innerWidth <= 650) discountText.innerText = "-25%";
  else discountText.innerText = "25% discount";
}

function colorSlider() {
  const sliderValue = (slider.value / 100) * 100;
  slider.style.background =
    "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) " +
    sliderValue +
    "%, hsl(224, 65%, 95%) " +
    sliderValue +
    "%, hsl(224, 65%, 95%) 100%)";
}

function displayValues() {
  const sliderInput = slider.value;
  pageCount = sliderInput * 5;
  if (planType === "monthly") planPrice = Math.ceil(sliderInput / 10) * 2;
  else planPrice = Math.ceil(sliderInput / 10) * 2 * 0.75 * 12;

  if (pageCount < 5) viewCount.innerText = "<5";
  else if (pageCount >= 500) viewCount.innerText = ">500";
  else viewCount.innerText = pageCount;
  price.innerText = "$" + planPrice.toFixed(2);
}

slider.addEventListener("input", (e) => {
  colorSlider();
  displayValues();
});

toggle.addEventListener("click", () => {
  if (planType === "monthly") {
    planType = "yearly";
    toggle.className = "interactive__toggle interactive__toggle--yearly";
    toggleCircle.className =
      "interactive__toggle-circle interactive__toggle-circle--yearly";
    pricingText.innerText = " / year";
  } else {
    planType = "monthly";
    toggle.className = "interactive__toggle interactive__toggle--monthly";
    toggleCircle.className =
      "interactive__toggle-circle interactive__toggle-circle--monthly";
    pricingText.innerText = " / month";
  }
  displayValues();
});

window.addEventListener("resize", handleResize);

colorSlider();
displayValues();
handleResize();
