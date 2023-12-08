const wrapper = document.querySelector(".container");
const progressContainer = document.querySelector(".progress-container");

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
let curIndex = 1;

//create circles
for (let i = 1; i <= 4; i++) {
  let circleContainer = document.createElement("div");
  circleContainer.classList.add("circle-container");

  let line = document.createElement("p");
  line.classList.add("line");

  let circle = document.createElement("p");
  circle.classList.add("circle");
  circle.id = `circle-${i + 1}`;
  circle.innerText = i + 1;

  circleContainer.append(line, circle);
  progressContainer.appendChild(circleContainer);
}

function onNext(index) {
  let allCircles = document.querySelectorAll(".circle-container");

  //   for (let curr = 0; curr < index - 1; curr++) {
  Array.from(allCircles[index - 2].children).forEach((circle) => {
    circle.classList.add("active");
  });
  //   }
}

function onPrev(index) {
  console.log(index);
  let allCircles = document.querySelectorAll(".circle-container");

  Array.from(allCircles[index - 1].children).forEach((circle) => {
    circle.classList.remove("active");
  });
}

next.addEventListener("click", () => {
  curIndex++;

  checkNext();
  checkPrev();

  onNext(curIndex);
});

prev.addEventListener("click", () => {
  curIndex--;

  checkPrev();
  checkNext();

  onPrev(curIndex);
});

function checkPrev() {
  if (curIndex > 1) {
    prev.disabled = false;
  } else {
    prev.disabled = true;
  }
}

function checkNext() {
  if (curIndex >= 5) {
    next.disabled = true;
  } else {
    next.disabled = false;
  }
}
