const baseColor = document.getElementById("baseColor");
const heading = document.getElementById("heading");
const img = document.getElementById("img");
const radius = document.getElementById("radius");
const rotate = document.getElementById("rotate");
const blur = document.getElementById("blur");
const spacing = document.getElementById("spacing");

baseColor.setAttribute("oninput", "colorChangeHandler()");
radius.setAttribute("oninput", "radiusChangeHandler()");
rotate.setAttribute("oninput", "rotateChangeHandler()");
blur.setAttribute("oninput", "blurChangeHandler()");
spacing.setAttribute("oninput", "spacingChangeHandler()");

//Setting all input range values to 0.
let ranges = document.querySelectorAll('input[type=range]');
ranges = Array.from(ranges);
ranges.forEach((i) => {
  i.value = "0";
})

function colorChangeHandler() {
  img.style.borderColor = baseColor.value;
  heading.style.color = baseColor.value;
  let labels = Array.from(document.querySelectorAll('label'));
  labels.forEach((l) => {
    l.style.color = baseColor.value;
  })
  ranges.forEach((r) => {
    r.style.accentColor = baseColor.value;
  })
}

function radiusChangeHandler() {
  img.style.borderRadius = `${radius.value}%`;
}

function rotateChangeHandler() {
  img.style.transform = `rotate(${rotate.value}deg)`;
}

function blurChangeHandler() {
  console.log(blur.value);
  img.style.filter = `blur(${blur.value}px)`;
}

function spacingChangeHandler() {
  img.style.boxShadow = `0px 0px 0px ${spacing.value}px ${baseColor.value}`;
}