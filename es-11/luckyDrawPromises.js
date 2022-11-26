function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

//commentato per esercizio
// let promise = luckyDraw("Joe");

// promise
//   .then(() => {
//     return luckyDraw("Caroline");
//   })
//   .then(() => {
//     return luckyDraw("Sabrina");
//   })
//   .catch((err) => console.log(err));

module.exports = luckyDraw;
