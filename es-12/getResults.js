const luckyDraw = require("../es-11/luckyDrawPromises.js");

async function getResults() {
  try {
    const data = await Promise.all([
      luckyDraw("Tina"),
      luckyDraw("Jorge"),
      luckyDraw("Julien"),
    ]);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

getResults();
