console.log("trying out the hex color converter");
// dom
const form = document.querySelector("form");
const copyBtn = document.querySelector(".btn");
const colorBox = document.querySelector(".color-box");
const hexField = document.querySelector("#hex");
const rgbField = document.querySelector("#rgb");

const hexRegex = /^#([a-f0-9]{3}|[a-f0-9]{6})$/i;

const toNum = (val) => {
  return hexMap[val.toLowerCase()];
};

const toHex = (val1, val2) => {
  return toNum(val1) * 16 + toNum(val2);
};

const hexMap = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15,
};

const toRGB = (string) => {
  if (!hexRegex.test(string)) {
    console.warn("that is not a valid hex value");
  } else {
    let hexNum = string.slice(1, string.length);
    if (hexNum.length === 3) {
      let [R, G, B] = hexNum.split(",").toString();
      R = toHex(R, R);
      G = toHex(G, G);
      B = toHex(B, B);
      rgbField.value = `rgb(${R}, ${G}, ${B})`;
      copyBtn.classList.remove("disabled");
      colorBox.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
      return { R: R, G: G, B: B };
    } else {
      let [r1, r2] = hexNum.slice(0, 2).split(",").toString();
      let [g1, g2] = hexNum.slice(2, 4).split(",").toString();
      let [b1, b2] = hexNum.slice(4, hexNum.length).split(",").toString();

      let R = toHex(r1, r2);
      let G = toHex(g1, g2);
      let B = toHex(b1, b2);
      rgbField.value = `rgb(${R}, ${G}, ${B})`;
      copyBtn.classList.remove("disabled");
      colorBox.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
      return { R: R, G: G, B: B };
    }
  }
};

copyBtn.addEventListener("click", () => {
  if (rgbField.value) {
    navigator.clipboard.writeText(rgbField.value);
    copyBtn.textContent = "copied to clipboard";
    setTimeout(() => (copyBtn.textContent = "copy"), 2300);
  }
});

hexField.addEventListener("keyup", () => {
  let result = hexField.value.trim();
  if (hexRegex.test(result)) {
    // console.log(result);
    toRGB(result);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
