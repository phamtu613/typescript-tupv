const language: string = "javascript";
const score: number = 100;
const isAvailable: boolean = true;
const text: string =
  language === "javascript" ? "javascript" : "not javascript";
let keyboard: any = undefined;
keyboard = true;

let study: unknown;
study = "javascript";

if (typeof study === "string") {
  study.split("");
}

function sum(a: unknown, b: unknown) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return 0;
}
sum("10", 20);
