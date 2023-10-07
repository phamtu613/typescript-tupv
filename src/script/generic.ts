function identity<A>(arg: A): A {
  return arg;
}

identity(10);
identity<string>("10");
identity<boolean>(false);

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair(10, 20);
pair(10, "20");
pair(10, true);
pair(10, [1, 2, 3]);

// item se có object .length trả về number
function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}

console.log(logLength([1, 1, 1]));

const user = {
  fullName: "TuPV",
  age: 20,
  address: "Da nang",
};

type typeUser = typeof user;

// O là type generic roi
function logObjectValue<O extends {}, K extends keyof O>(obj: O, key: K): void {
  console.log(obj[key]);
}

logObjectValue(user, "address");

type Example = Record<string, any>;
