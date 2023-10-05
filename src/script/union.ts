{
  const infomation: (string | number | boolean)[] = [
    "badminton",
    "Coding",
    "Soccer",
    100,
    true,
  ];

  const students: {
    name: string;
    age: number;
    score: number | string;
    extra?: {
      name: string;
    } & {
      school: string;
    };
  }[] = [
    {
      name: "Tu",
      age: 20,
      score: 10,
      extra: {
        name: "TuPV",
        school: "Dh Su Pham",
      },
    },
    {
      name: "Vu",
      age: 19,
      score: "Muoi",
      extra: {
        school: "Dh Su Pham",
        name: "TuPV",
      },
    },
    {
      name: "Vu",
      age: 19,
      score: "Muoi",
      extra: {
        school: "Dh Su Pham",
        name: "TuPV",
      },
    },
  ];
}
