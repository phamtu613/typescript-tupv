{
  // const numbericId: string = 123;

  // const scores = [1, 2, 3, 4, 5] as const;

  type User = {
    id: number;
    fullName: string;
    age: string;
  };

  const newUser = {
    id: 0,
    fullName: "",
  } as User;

  // const count = 100 as unknown as string;

  // const routes: Record<string, any> = {
  //   "/": "Homepage",
  //   "/about": "About page",
  //   "/dashboard": "Dashboard page",
  // };

  const routes = {
    "/": "Homepage",
    "/about": "About page",
    "/dashboard": "Dashboard page",
  } satisfies Record<string, any>;

  console.log(routes["/about"]);
}
