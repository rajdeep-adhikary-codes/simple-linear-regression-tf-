// Import TensorFlow.js
const tf = require('@tensorflow/tfjs-node');

// Generate some random data for demonstration purposes
const xs = tf.linspace(1, 10, 2000)  // Input data
const ys = xs.mul(3);  // Corresponding labels

// Define a simple linear regression model
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));

// Compile the model
model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});

// Train the model
model.fit(xs, ys, {epochs: 100}).then(() => {
  // Make predictions for new data
  const newXs = tf.tensor1d([6, 7, 8]);
  const predictions = model.predict(newXs);

  // Display predictions
  predictions.print();
});
