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

export const getPersonById = (id) => {
  const value = userData.filter((each) => each.id == id);
  return value[0];
};

getPersonById(3);
