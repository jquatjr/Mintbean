const RandomText = [
  "An elephant taking a shower",
  "Oh, the Places You'll Go!",
  "Mickey and Pluto at the beach",
  "The octopus from Finding Dory",
  "Oh, the Places You'll Go!",
  "Oh, the Places You'll Go!",
];

const PeppaText = [
  "",
  "It was a beautiful, sunny day at the Peppa pig house.",
  "Peppa and George couldn't wait to get up and go play outside...",
  "But first mommy pig needed to make breakfast.",
  "And daddy pig read the morning newspaper.",
  "Finally it was time to play. Uh oh, it has started raining...",
  "Good thing Peppa and George LOVE jumping in muddy puddles.",
  "Everyone loves jumping in muddy puddles!",
];
// const className = ((i + 1) % 2 ) === 0 ? "left" : "right"

export function getBooks(bookName) {
  console.log(bookName)
  if (bookName === "Random") {
    const Randomsvgs = require.context(
      `../assets/images/Random`,
      true,
      /\.svg$/
    );
    const RandomArr = Randomsvgs.keys().map((path) => ({
      path,
      file: Randomsvgs(path),
    }));
    const Random = [];

    for (let i = 0; i < RandomArr.length; i++) {
      const className = (i + 1) % 2 !== 0 ? "left" : "right";
      Random.push({
        path: RandomArr[i].path,
        text: RandomText[i],
        className: className,
      });
    }
    return Random;
  } else if (bookName === "peppa") {
    const Peppasvgs = require.context(`../assets/images/peppa`, true, /\.svg$/);
    const PeppaArr = Peppasvgs.keys().map((path) => ({
      path,
      file: Peppasvgs(path),
    }));
    const peppa = [];

    for (let i = 0; i < PeppaArr.length; i++) {
      const className = (i + 1) % 2 !== 0 ? "left" : "right";
      peppa.push({
        path: PeppaArr[i].path,
        text: PeppaText[i],
        className: className,
      });
    }
    console.log(peppa)
    return peppa;
  }
}
