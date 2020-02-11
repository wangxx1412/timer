const arr = process.argv.slice(2);

const newnums = arr.sort((a, b) => a - b);

const time = newnums.map(el => el * 1000);

if (time.length > 0) {
  for (const char of time) {
    if (char >= 0) {
      setTimeout(() => {
        console.log(`${char / 1000} second`);
        process.stdout.write("\x07");
      }, char);
    } else {
      console.log(`${char} is  invalid`);
    }
  }
} else {
  console.log("Please provide at least one number");
}
