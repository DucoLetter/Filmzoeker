
//aantal const buiten derest geplaatst
const radiobuttons = document.querySelectorAll('.radio-button');
const moviePoster = movies.map((poster) => {
    return poster.Poster
})
const ul = document.querySelector("ul");



// Bij inladen van website laad die hetzelfde in als bij de switch - geen filter - maar dan zonder dat er eerst een change.event heeft moeten plaatsvinden. (anders begin je met een lege website)
const moviesDef = movies.map((poster) => {
    return poster.Poster
})
const moviesID = movies.map((iD) => {
    return iD.imdbID
})
for (let i = 0; i < moviesDef.length; i++) {
    let filmposterNaam = moviesDef[i];
    let findIMDBID = moviesID[i]
    let listItem = document.createElement("li");
    let imdbRef = document.createElement("a")
    let maakImg = document.createElement("img")
    maakImg.setAttribute("src", filmposterNaam)
    imdbRef.setAttribute("href", "https://www.imdb.com/title/" + findIMDBID)
    ul.appendChild(listItem);
    listItem.appendChild(imdbRef)
    imdbRef.appendChild(maakImg);
}






// eventlistener op de radiobuttons
Array.from(radiobuttons).forEach((radiobtn) => {
    radiobtn.addEventListener('change', () => {
        (console.log(event.target));
        (console.log(event.target.value));

        //remove li's (dus vorige input) bij event verwijderen
        while (ul.firstChild) {
            ul.firstChild.remove();
        }

        //switch
        const valueChange = event.target.value
        switch (valueChange) {
            case 'latest':




                // geef array poster terug       ---      van de film's waarin jaartallen 2014> voorkomen
                const findYear = movies.filter((filterObject) => {
                    return filterObject.Year >= 2014;
                }).map((poster) => {
                    return poster.Poster
                })


                // geef array imdb string terug  ---    van de film's waarin jaartallen 2014> voorkomen
                const findID = movies.filter((filterObject) => {
                    return filterObject.Year >= 2014;
                }).map((iD) => {
                    return iD.imdbID
                })


                // elke itteratie over de lengte van de array van de films waarin jaartallen 2014> voorkomen, 
                for (let i = 0; i < findYear.length; i++) {
                    let filmposterNaam = findYear[i];            //wanneer filmpos. word aangeroepen, geef poster      terug, (die gelijk is aan de itteratie)
                    let findIMDBID = findID[i]                   //wanneer findIMD. word aangeroepen, geef imdb string terug, (die gelijk is aan de itteratie)
                    let listItem = document.createElement("li"); //wanneer Listitem word aangeroepen, maak list item
                    let imdbRef = document.createElement("a")    //wanneer imdbRef  word aangeroepen, maak a    item
                    let maakImg = document.createElement("img")  //wanneer maakImg  word aangeroepen, maak img  item
                    maakImg.setAttribute("src", filmposterNaam)  //maak list item, met attribute src, met poster              (die gelijk is aan de itteratie)
                    imdbRef.setAttribute("href", "https://www.imdb.com/title/" + findIMDBID) // maak a, met attribute href, met eerste gedeelte van html van imdb + imdb string (die gelijk is aan de itteratie)
                    ul.appendChild(listItem);                    //plaats de gemaakte list item onder ul parent
                    listItem.appendChild(imdbRef)                //plaats de gemaakte a    item onder li parent
                    imdbRef.appendChild(maakImg);                //plaats de gemaakte img  item onder a  parent
                }
                console.log("Hey ik ben een latest-film.");
                break





            // Praktisch steeds het vorige blok herhalen (niet dry nee)
            case 'avenger':
                const findAvengers = movies.filter((filterObject) => {
                    return filterObject.Title.includes("Avengers");
                }).map((poster) => {
                    return poster.Poster
                })
                const findAvengersID = movies.filter((filterObject) => {
                    return filterObject.Title.includes("Avengers");
                }).map((iD) => {
                    return iD.imdbID
                })


                for (let i = 0; i < findAvengers.length; i++) {
                    let filmposterNaam = findAvengers[i];
                    let findIMDBID = findAvengersID[i]
                    let listItem = document.createElement("li");
                    let imdbRef = document.createElement("a")
                    let maakImg = document.createElement("img")
                    maakImg.setAttribute("src", filmposterNaam)
                    imdbRef.setAttribute("href", "https://www.imdb.com/title/" + findIMDBID)
                    ul.appendChild(listItem);
                    listItem.appendChild(imdbRef)
                    imdbRef.appendChild(maakImg);
                }
                console.log("Hey ik ben een Avenger film.");
                break
            case 'x-men':
                const findXMen = movies.filter((filterObject) => {
                    return filterObject.Title.includes("X-Men");
                }).map((poster) => {
                    return poster.Poster
                })
                const findXMenID = movies.filter((filterObject) => {
                    return filterObject.Title.includes("X-Men");
                }).map((iD) => {
                    return iD.imdbID
                })
                for (let i = 0; i < findXMen.length; i++) {
                    let filmposterNaam = findXMen[i];
                    let findIMDBID = findXMenID[i]
                    let listItem = document.createElement("li");
                    let imdbRef = document.createElement("a")
                    let maakImg = document.createElement("img")
                    maakImg.setAttribute("src", filmposterNaam)
                    imdbRef.setAttribute("href", "https://www.imdb.com/title/" + findIMDBID)
                    ul.appendChild(listItem);
                    listItem.appendChild(imdbRef)
                    imdbRef.appendChild(maakImg);
                }
                console.log("Hey ik ben een X-Men film.");
                break
            case 'princess':
                const findPrincess = movies.filter((filterObject) => {
                    return filterObject.Title.includes("Princess");
                }).map((poster) => {
                    return poster.Poster
                })
                const findPrincessID = movies.filter((filterObject) => {
                    return filterObject.Title.includes("Princess");
                }).map((iD) => {
                    return iD.imdbID
                })
                for (let i = 0; i < findPrincess.length; i++) {
                    let filmposterNaam = findPrincess[i];
                    let findIMDBID = findPrincessID[i]
                    let listItem = document.createElement("li");
                    let imdbRef = document.createElement("a")
                    let maakImg = document.createElement("img")
                    maakImg.setAttribute("src", filmposterNaam)
                    imdbRef.setAttribute("href", "https://www.imdb.com/title/" + findIMDBID)
                    ul.appendChild(listItem);
                    listItem.appendChild(imdbRef)
                    imdbRef.appendChild(maakImg);
                }
                console.log("Hey ik ben een Princess film.");
                break
            case 'batman':
                const findBatman = movies.filter((filterObject) => {
                    return filterObject.Title.includes("Batman");
                }).map((poster) => {
                    return poster.Poster
                })
                const findBatmanID = movies.filter((filterObject) => {
                    return filterObject.Title.includes("Batman");
                }).map((iD) => {
                    return iD.imdbID
                })
                for (let i = 0; i < findBatman.length; i++) {
                    let filmposterNaam = findBatman[i];
                    let findIMDBID = findBatmanID[i]
                    let listItem = document.createElement("li");
                    let imdbRef = document.createElement("a")
                    let maakImg = document.createElement("img")
                    maakImg.setAttribute("src", filmposterNaam)
                    imdbRef.setAttribute("href", "https://www.imdb.com/title/" + findIMDBID)
                    ul.appendChild(listItem);
                    listItem.appendChild(imdbRef)
                    imdbRef.appendChild(maakImg);
                }
                console.log("Hey ik ben Batman film.");
                break
            case 'default': //dit laatste blokje staat ook bovenaan, zodat je bij het inladen ook wat ziet. (wanneer je hebt ingeladen heb je nog geen switch(change event), dus dan zou de pagina leeg zijn)
                const moviesDef = movies.map((poster) => {
                    return poster.Poster
                })
                const moviesID = movies.map((iD) => {
                    return iD.imdbID
                })
                for (let i = 0; i < moviesDef.length; i++) {
                    let filmposterNaam = moviesDef[i];
                    let findIMDBID = moviesID[i]
                    let listItem = document.createElement("li");
                    let imdbRef = document.createElement("a")
                    let maakImg = document.createElement("img")
                    maakImg.setAttribute("src", filmposterNaam)
                    imdbRef.setAttribute("href", "https://www.imdb.com/title/" + findIMDBID)
                    ul.appendChild(listItem);
                    listItem.appendChild(imdbRef)
                    imdbRef.appendChild(maakImg);
                }
                console.log("Je hebt nog geen film soort gekozen.");
        }
    });
});

