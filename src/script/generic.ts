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
