import { Readable } from "stream";
import { writeFile } from "fs/promises";

async function* generate() {
  for (let i = 0; i < 20; i++) {
    yield Math.random() * (2137 + 420) - 420;
  }
}

const readable = Readable.from(generate());

let body = "";

readable.on("data", (chunk) => {
  body += chunk + "\n";
});

readable.on("end", () => {
  console.log(body);
  writeFile(`2023_10_09/random-${Date.now().toString()}.txt`, body);
});
