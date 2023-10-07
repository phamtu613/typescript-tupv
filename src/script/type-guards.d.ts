console.log(typeof 5);
function checkTypeOf(value: number) {
  if (typeof value === "number") {
    return 100 + value;
  }
  return null;
}

console.log(checkTypeOf(5));

type AAA = {
  x: number;
};

type B = {
  y: number;
};
type C = AAA | B;

function checkInfo(info: C) {
  if ("x" in info) {
    console.log(info.x);
  }
  if ("y" in info) {
    console.log(info.y);
  }
}
