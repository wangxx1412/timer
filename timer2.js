const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding("utf8");
const numKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
stdin.on("data", key => {
  if (key === "\u0003") {
    process.stdout.write("Thanks for using me, ciao!");
    console.log();
    process.exit();
  } else if (key === "b" || key === "B") {
    process.stdout.write("\x07");
  } else if (numKeys.includes(key)) {
    process.stdout.write(`setting timer for ${key} seconds...`);
    console.log();
    setTimeout(() => {
      process.stdout.write("\x07");
    }, Number(key) * 1000);
  } else {
    console.log("Please type 1-9 numbers or 'b'/'B' to beep.");
  }
});
