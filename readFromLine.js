const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please Enter Your Name ', (name) => {
  console.log(`Hello ${name}`);
  rl.close();
});