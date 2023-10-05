const direction = {
  Up: 1,
  Down: 2,
  Left: 3,
  Right: 4,
} as const;

// numeric enum
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

// String enum
enum Tab {
  POPULAR = "POPULAR",
  RECENT = "RECENT",
  LATEST = "LATEST",
  NEW = "NEW",
}

direction.Up;
Tab.LATEST;
