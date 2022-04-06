enum Roles {
  ADMIN = "Admin",
  READ_ONLY = "Read Only",
  AUTHOR = "Author",
}

const person: {
  name: string;
  age: number;
  hobbies: string[]; // Array of strings
  roles: [number, string][]; // Tuple
} = {
  name: "Some Guy",
  age: 23,
  hobbies: ["Sports", "Cooking"],
  roles: [[1, Roles.ADMIN]],
};
