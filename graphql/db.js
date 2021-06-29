export const userData = [
  {
    id: 0,
    name: "Luis",
    age: 21,
  },
  {
    id: 1,
    name: "Bob",
    age: 13,
  },
  {
    id: 2,
    name: "Max",
    age: 55,
  },
  {
    id: 3,
    name: "Grant",
    age: 3,
  },
  {
    id: 4,
    name: "Robert",
    age: 53,
  },
  {
    id: 5,
    name: "Max",
    age: 44,
  },
  {
    id: 6,
    name: "Kim",
    age: 65,
  },
  {
    id: 7,
    name: "Rum",
    age: 17,
  },
];

export const getUserData = () => userData;

export const getUserById = (id) => {
  const foundValue = userData.filter((each) => each.id == id);
  return foundValue[0];
};

export const addUser = (name, age) => {
  const newUser = {
    id: userData.length + 1,
    name: name,
    age: age,
  };
  userData.push(newUser);
  return newUser;
};
