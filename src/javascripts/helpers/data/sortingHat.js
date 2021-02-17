const sortingHat = () => {
  const houses = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];
  const houseAssignment = houses[Math.floor(Math.random() * houses.length)];
  return houseAssignment;
};

export default sortingHat;
