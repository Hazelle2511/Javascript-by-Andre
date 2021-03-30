const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.querySelector('body');

console.log(css);
console.log(color1);
console.log(color2);
console.log(body);

// body.style.background="red";

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

  css.textContent = body.style.background + ";";
}

color1.addEventListener('input', setGradient
    // console.log(color1.value)
  
)

color2.addEventListener('input', setGradient
    // console.log(color2.value)
     )