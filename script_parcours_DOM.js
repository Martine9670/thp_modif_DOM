// Q1 : Combien d'éléments <p> ?
console.log(document.querySelectorAll("p").length);

// Q2 : Contenu texte de l'id "coucou"
console.log(document.getElementById("coucou").textContent);

// Q3 : URL du 3ème lien <a>
console.log(document.querySelectorAll("a")[2].href);

// Q4 : Combien portent la classe "compte-moi"
console.log(document.querySelectorAll(".compte-moi").length);

// Q5 : Combien de <li> portent "compte-moi"
console.log(document.querySelectorAll("li.compte-moi").length);

// Q6 : Combien de <li> dans un <ol> portent "compte-moi"
console.log(document.querySelectorAll("ol li.compte-moi").length);

// Q7 : Le texte du 1er <li> du 2ème <ul> (caché)
console.log(document.querySelectorAll("div ul")[1].querySelector("li").textContent);
