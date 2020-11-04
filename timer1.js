let inputs = process.argv.slice(2).map((element)=> parseInt(element));

inputs.sort(function(a, b) {
  return a - b;
});
  
for (let num of inputs) {
  if (num > 0 && Number.isInteger(num)) {
    setTimeout(() => process.stdout.write('\x07'), num * 1000);
  }
}
