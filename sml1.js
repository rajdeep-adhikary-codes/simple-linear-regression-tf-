// Import TensorFlow.js
const tf = require('@tensorflow/tfjs-node');
const script = require('./input-script');
const fs = require('fs');

fs.writeFileSync('inputdata.json', JSON.stringify(script, null, 2), 'utf-8');

// Generate some random data for demonstration purposes
// const xs = tf.tensor1d([1, 2, 3, 4, 5]);  // Input data
// const ys = tf.tensor1d([2, 4, 5, 4, 5]);  // Corresponding labels

const xs = tf.tensor2d(script.inputs.map(obj => Object.values(obj)), [script.inputs.length, Object.keys(script.inputs[0]).length]);
const ys = tf.tensor1d(script.outputs);


// Define a simple linear regression model
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [5]}));

// Compile the model
model.compile({optimizer: 'sgd', loss: 'meanSquaredError', metrics: ['mae']});

// Train the model
model.fit(xs, ys, {epochs: 100}).then(() => {
  // Make predictions for new data
  const testdata = [{
    "practice_time": 20,
    "sprint(100m)": 15,
    "height": 5.75,
    "weight": 70,
    "age": 16
  }
];
  const testtensor = tf.tensor2d(testdata.map(obj => Object.values(obj)), [testdata.length, Object.keys(testdata[0]).length]);
  
  const predictions = model.predict(testtensor);

  // Display predictions
  predictions.print();
});
