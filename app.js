console.log("trying out the hex color converter");
// dom
const form = document.querySelector("form");
const copyBtn = document.querySelector(".btn");
const colorBox = document.querySelector(".color-box");
const hexField = document.querySelector("#hex");
const rgbField = document.querySelector("#rgb");
const errorMsg = document.querySelector(".error");

const hexRegex = /^#?(([a-f0-9]{3}|[a-f0-9]{6})$)/i;

const toRGB = (val) => {
  let rgb = [];
  const result = hexRegex.test(val);
  if (!result) {
    return "not valid value";
  }

  let hexCode = val.includes("#") ? val.split("#")[1].split("") : val.split("");
  if (hexCode.length === 3) {
    for (i = 0; i < hexCode.length; i++) {
      /* duplicate values. i.e if hex === [1, 2, 3], make hex [11, 22, 33] */
      const x = hexCode[i];
      const colorVal = [x, x].join("");
      rgb.push(parseInt(colorVal, 16));
    }
  } else {
    for (i = 0; i < hexCode.length; i++) {
      const [x, y] = [hexCode[i], hexCode[i + 1]];
      const colorVal = [x, y].join("");
      i += 1;
      // convert to num to hex
      rgb.push(parseInt(colorVal, 16));
    }
  }
  const [r, g, b] = rgb;
  copyBtn.classList.remove("disabled");
  rgbField.value = `rgb(${r}, ${g}, ${b})`;
  colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  return `rgb(${r}, ${g}, ${b})`;
};

copyBtn.addEventListener("click", () => {
  if (rgbField.value) {
    navigator.clipboard.writeText(rgbField.value);
    copyBtn.textContent = "copied to clipboard";
    setTimeout(() => (copyBtn.textContent = "copy"), 1900);
  }
});

hexField.addEventListener("keyup", () => {
  let result = hexField.value.trim();
  if (!hexRegex.test(result) && result.length) {
    // console.log(result);
    hexField.classList.add("invalid");
    errorMsg.textContent = `'${hexField.value}' is not a valid hex value`;
  } else {
    hexField.classList.remove("invalid");
    toRGB(result);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
