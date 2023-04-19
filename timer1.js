const delay = process.argv.slice(2);
const timer = function(delay) {

  if (delay.length === 0) {
    return "ERROR";
  }
  for (let item of delay) {
    const num = Number(item);
    if (num >= 0 && typeof num === "number") {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, num);
    }
  };
};
timer(delay);