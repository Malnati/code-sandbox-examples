const util = require('util');

const parcels = [
  {
    name: 'Gustavo Da Silva Sauro',
    goal: 10,
    done: 5,
    left: 5,
  },
  {
    name: 'Renato dos Santos',
    goal: 9,
    done: 3,
    left: 6,
  },
  {
    name: 'Rafael Malnati Rosa Lima',
    goal: 8,
    done: 2,
    left: 6,
  },
];

const calc = () => {
  const result = [];
  parcels.map((data) => {
    const sideA = {
      x: 'Done',
      y: data.done,
    };
    const blueB = {
      x: 'Left',
      y: data.left,
    };
    const containter = [sideA, blueB];
    data.chart = { containter };
    result.push(data);
  });
  return result;
};

let result = calc();

result.forEach((item) => {
  console.log(`Item: ${util.inspect(item)} `);
});
