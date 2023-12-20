let btnRadio = document.querySelectorAll(".option input")

for(let i =0; i < btnRadio.length; i++) {
    let btnActuel = btnRadio[i]

    btnActuel.addEventListener("click", (event) => {
        Bouton = event.target

        if(event.target.value === "1") {
            let section = `
                <section class="heureABS">
                    <label>Le</label>
                    <input type="date" id="dateHeure">
                    <label>De</label>
                    <input type="time" id="heureDebut" min="09:00" max="18:00" required />
                    <label>à</label>
                    <input type="time" id="heureFin" min="09:00" max="18:00" required />
                </section>
            `;

            let choix = document.querySelector(".choix")
            choix.innerHTML = section
        }else{
            let section = `
                <section class="journeeABS">
                    <label>Du</label>
                    <input type="date" id="dateDebuJour">
                    <label>Au</label>
                    <input type="date" id="dateFinJour"><br>
                    <abel id="resultatJours"></label>
                </section>
            `;
            let choix = document.querySelector(".choix")
            choix.innerHTML = section
        }
    })
}

let validejour = document.getElementById("valider")

validejour.addEventListener("click", (event) => {

    let dateDebut = new Date(document.getElementById("dateDebuJour").value)
    let dateFin = new Date(document.getElementById("dateFinJour").value)

    if(dateDebut < dateFin) {
        const difference = dateFin - dateDebut;
    const differenceInDays = difference / (1000 * 3600 * 24);

    document.getElementById("resultatJours").textContent = "soit" +"  "+ differenceInDays +"  "+ "jours complet"

    } else {
        console.log("La date de fin doit être superrieur a la date de debut")
    }
    
})

/*fetch("absence.json").then((response) => response.json())
.then((json) => {for(let j =0; j < json.Motif.length; j++) {
    let afficheJson = json.Motif[j].categorie;

let modifCheckbox = document.querySelector(".modifCheckbox")
modifCheckbox.innerHTML += "<hr class = 'hr2'>" + afficheJson + "<br>"

for(let k =0; k < json.Motif[j].nom.length; k++) {
    let affichjeson = json.Motif[j].nom[k]
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "motif"
    modifCheckbox.innerHTML += checkbox.outerHTML + affichjeson + "<br>";
}
    
}});*/

body = document.getElementById("body")
console.log(body)

body.addEventListener("submit", (event) => {
    event.preventDefault();

    let validejour = document.getElementById("valider")

validejour.addEventListener("click", (event) => {

    let dateDebut = new Date(document.getElementById("dateDebuJour").value)
    let dateFin = new Date(document.getElementById("dateFinJour").value)

    if(dateDebut < dateFin) {
        const difference = dateFin - dateDebut;
    const differenceInDays = difference / (1000 * 3600 * 24);

    document.getElementById("resultatJours").textContent = "soit" +"  "+ differenceInDays +"  "+ "jours complet"

    } else {
        console.log("La date de fin doit être superrieur a la date de debut")
    }
    
})

    let baliseNom = document.getElementById("nom");
    let nom = baliseNom.value
    let balisePrenom = document.getElementById("prenom");
    let prenom = balisePrenom

    let URL = "http://127.0.0.1:5500/signature.html?nom="+ nom +"&prenom="+ prenom;
   // encodeURIComponent(baliseNom.value) + ;
    
    window.location.href = URL;

    console.log(baliseNom.value);
});