export const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getRandomTrueFalse = chance => {
  return getRndInteger(0, chance) === chance - 1;
};

export const hexToRgbCode = hex => {
  let c = hex.substring(1).split("");
  if (c.length == 3) {
    c = [c[0], c[0], c[1], c[1], c[2], c[2]];
  }
  c = "0x" + c.join("");
  return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",");
};

export const COLOR_SCHEME = Object.freeze([
  "#FFFF00",
  "#2AD689",
  "#F3FF3F",
  "#0D5C63",
  "#247B7B",
  "#44A1A0"
]);

export const getRandomColorCode = () => {
  return COLOR_SCHEME[getRndInteger(0, COLOR_SCHEME.length)];
};
