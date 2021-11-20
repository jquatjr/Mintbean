const RandomText = ["An elephant taking a shower",
                    "Oh, the Places You'll Go!", 
                    "Mickey and Pluto at the beach", 
                    "The octopus from Finding Dory", 
                    "Oh, the Places You'll Go!",
                    "Oh, the Places You'll Go!"]

                    // const className = ((i + 1) % 2 ) === 0 ? "left" : "right"

export function getBooks(bookName){
    const Randomsvgs = require.context(`../assets/images/Random`, true, /\.svg$/)
    const RandomArr = Randomsvgs.keys().map((path) => ({ path, file: Randomsvgs(path) }));
    const Random = []
    
    for(let i=0; i < RandomArr.length; i++){
        const className = ((i + 1) % 2 ) !== 0 ? "left" : "right"
        Random.push({path:RandomArr[i].path, text:RandomText[i], className:className})
    }
    if(bookName === "Random"){
        return Random
    }
}

