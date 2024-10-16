// Curry functions
const defaultCurry = (obj1) => (obj2) => ({...obj1, ...obj2});

const mapCurry = (fn) => (obj) => Object.fromEntries(
  Object.entries(obj).map(([k, v]) => fn([k, v]))
);

const reduceCurry = (fn) => (obj, initialValue) => 
  Object.entries(obj).reduce((acc, [k, v]) => fn(acc, [k, v]), initialValue);

const filterCurry = (fn) => (obj) => Object.fromEntries(
  Object.entries(obj).filter(([k, v]) => fn([k, v]))
);

// Functions using curry functions
const reduceScore = (personnel, initialValue = 0) => reduceCurry((acc, [_, person]) => 
  person.isForceUser ? acc + person.pilotingScore + person.shootingScore : acc
)(personnel, initialValue);

const filterForce = (personnel) => filterCurry(([_, person]) => 
  person.isForceUser && person.shootingScore >= 80
)(personnel);

const mapAverage = (personnel) => mapCurry(([name, person]) => [
  name, 
  {
    ...person,
    averageScore: (person.pilotingScore + person.shootingScore) / 2
  }
])(personnel);

// // Example usage
// console.log("Reduce Score:", reduceScore(personnel));
// console.log("Filter Force:", filterForce(personnel));
// console.log("Map Average:", mapAverage(personnel));