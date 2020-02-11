const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding("utf8");
const numKeys = ["\u0030","\u0031","\u0032","\u0033","\u0034","\u0035","\u0036"]
stdin.on("data", key => {
  if (key === "\u0003") {
    process.exit();
  } else if (key === "\u0062") {
    process.stdout.write("\x07");
  } else if(key)
});
