const fixCalc = (number) => {
  return +Number(number).toFixed(2);
}

export const summVectors = (a, b, c = { x: 0, y: 0 }) => {
  return {
    x: fixCalc(a.x + b.x + c.x),
    y: fixCalc(a.y + b.y + c.y)
  };
};

export const substractVectors = (a, b) => {
  return {
    x: fixCalc(a.x - b.x),
    y: fixCalc(a.y - b.y)
  };
};

export const multipleVectorByCoef = (a, coef) => {
  return {
    x: fixCalc(a.x * coef),
    y: fixCalc(a.y * coef)
  }
}

export const decriceVectorByCoef = (a, coef) => {
  return {
    x: fixCalc(a.x / coef),
    y: fixCalc(a.y / coef)
  };
};

export const fixPointsToOneSystem = (a, b) => {
  return {
    a: { x: 0, y: 0 },
    b: substractVectors(b, a)
  };
};

export const getAngleByTwoPoints = (_a, _b) => {
  const { a, b } = fixPointsToOneSystem(_a, _b);

  debugger;
};

export const getVectorLength = (a, b) => {
  return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
};
