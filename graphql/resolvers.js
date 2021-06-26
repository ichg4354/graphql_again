const luis = {
  name: "Luis",
  age: 22,
  weight: 70,
};

const resolvers = {
  Query: {
    person: () => luis,
  },
};

export default resolvers;
