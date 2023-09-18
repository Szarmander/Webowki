const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const toRadians = (angle) => {
  return angle * (Math.PI / 180);
};

readline.question(`Podaj kąt bro? `, (angle) => {
  switch (Number(angle)) {
    case 0:
      console.log(`sin: 0`);
      console.log(`cos: 1`);
      console.log(`tg: 0`);
      console.log(`ctg: nie istnieje :c`);
      break;
    case 30:
      console.log(`sin: 1/2`);
      console.log(`cos: √(3)/2`);
      console.log(`tg: √(3)/3`);
      console.log(`ctg: √(3)`);
      break;
    case 45:
      console.log(`sin: √(2)/2`);
      console.log(`cos: √(2)/2`);
      console.log(`tg: 1`);
      console.log(`ctg:  1`);
      break;
    case 60:
      console.log(`sin: √(3)/2`);
      console.log(`cos: 1/2`);
      console.log(`tg:  √(3)`);
      console.log(`ctg:  `);
      break;
    case 90:
      console.log(`sin: 1`);
      console.log(`cos: 0`);
      console.log(`tg: √(3)/3`);
      console.log(`ctg: nie istnieje :c`);
      break;
    default:
      console.log(
        `sin:  ${Math.floor(Math.sin(toRadians(angle)) * 100) / 100}`
      );
      console.log(
        `cos:  ${Math.floor(Math.cos(toRadians(angle)) * 100) / 100}`
      );
      console.log(`tg:  ${Math.floor(Math.tan(toRadians(angle)) * 100) / 100}`);
      console.log(
        `ctg:  ${Math.floor((1 / Math.tan(toRadians(angle))) * 100) / 100}`
      );
  }

  readline.close();
});
