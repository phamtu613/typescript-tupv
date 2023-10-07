{
  type Check<T> = T extends string ? "string" : "non-string";
  type IsString = Check<string>;
  type IsNonString = Check<number>;

  // P là type của args
  type Parameters<T extends (...args: any) => any> = T extends (
    ...args: infer P
  ) => any
    ? P
    : never;

  function logObject(x: number, y: string) {}
  type Z = Parameters<typeof logObject>;

  type Extract<T, U> = T extends U ? T : never;
  type X = Extract<string | string[], string>; // string

  type Exclude<T, U> = T extends U ? never : T;
  type Y = Exclude<string | string[], string>; // string[]
}
