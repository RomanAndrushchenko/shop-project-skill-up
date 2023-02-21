// add to cart
let productsCountEl = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".add-to-cart");

for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  });
}

// addToCartBtns.forEach((item) => {
//   item.addEventListener("click", function () {
//     console.log("clicked foreach");
//   });
// });

// more details
let moreDetailsBtns = document.querySelectorAll(".more-details");
let modal = document.querySelector(".modal");
let btnClose = document.querySelector(".btn-close");

moreDetailsBtns.forEach((item) => {
  item.addEventListener("click", openModal);
});

btnClose.addEventListener("click", closeModal);
function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}
function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

// tooggle like state
let likeBtns = document.querySelectorAll(".like-blue");

likeBtns.forEach((item) => {
  item.addEventListener("click", function () {
    // if (item.classList.contains("liked")) {
    //   item.classList.remove("liked");
    // } else {
    //   item.classList.add("liked");
    // }
    item.classList.toggle("liked");
  });
});
function showModalByScroll() {
  if (window.scrollY > document.body.scrollHeight / 2) {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}
window.addEventListener("scroll", showModalByScroll);
// setTimeout(openModal, 10000);
// setInterval(openModal, 4000);

//add slider
$(".slider").slick({
  dots: true,
});

// AOS
AOS.init();

let decrementBtns = document.querySelectorAll(".decrement");
let incrementBtns = document.querySelectorAll(".increment");
let inputFields = document.querySelectorAll(".product-quantity input");

// console.log(decrementBtns);
// console.log(incrementBtns);
// console.log(inputFields);

// incrementBtns.forEach((item, i) => {
//   item.addEventListener("click", function () {
//     let currentCount = +inputFields[i].value;
//     inputFields[i].value = currentCount + 1;
//   });
// });
// decrementBtns.forEach((item, i) => {
//   item.addEventListener("click", function () {
//     let currentCount = +inputFields[i].value;
//     inputFields[i].value = currentCount - 1;
//   });
// });

function Counter(
  incrementBtn,
  decrementBtn,
  inputField,
  minCount = 1,
  maxCount = 10
) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };
  this.toggleButtonState = function () {
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= minCount;
    this.domRefs.incrementBtn.disabled = count >= maxCount;
  };
  this.toggleButtonState();

  this.increment = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
  };
  this.decrement = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
  };

  this.domRefs.incrementBtn.addEventListener(
    "click",
    this.increment.bind(this)
  );
  this.domRefs.decrementBtn.addEventListener(
    "click",
    this.decrement.bind(this)
  );
}

let counter1 = new Counter(incrementBtns[0], decrementBtns[0], inputFields[0]);
const counters = [];
inputFields.forEach(
  (counterItem, i) =>
    (counters[i] = new Counter(incrementBtns[i], decrementBtns[i], counterItem))
);
console.log(counters);
