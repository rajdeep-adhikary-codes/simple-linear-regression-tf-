const getRandomNumber = (min, max) => parseFloat((Math.random() * (max - min) + min).toFixed(2));
const getRandomHeight = () => (getRandomNumber(511, 700) / 100).toFixed(2);

const dataArray = [];
const inputs = []; outputs = [];

for (let i = 0; i < 9999; i++) {
  const entry = {
    "practice_time": getRandomNumber(10, 30),
    "sprint(100m)": getRandomNumber(10, 20),
    "height": parseFloat(getRandomHeight()),
    "weight": getRandomNumber(50, 100),
    "age": getRandomNumber(12, 18)
  };

  inputs.push(entry);

  // Coefficients for the formula
  const a = 2;
  const b = 1.5;
  const c = -0.5;
  const d = 0.1;
  const e = 0.5;

  // Generate output_value based on the formula
  const output_value = a * entry.practice_time +
                      b * entry["sprint(100m)"] +
                      c * entry.height +
                      d * entry.weight +
                      e * entry.age +
                      getRandomNumber(-5, 5); // Random error

  outputs.push(parseFloat(output_value.toFixed(2)));

}

// console.log(JSON.stringify(dataArray, null, 2));
module.exports = { inputs : inputs, outputs : outputs };
