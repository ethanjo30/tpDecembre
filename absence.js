let btnRadio = document.querySelectorAll(".option input")
    console.log(btnRadio)

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
                    <input type="date" id="dateFu=inJour"><br>
                    <label>soit</label>
                    <label>jours complet</label>
                </section>
            `;
            let choix = document.querySelector(".choix")
            choix.innerHTML = section
        }
    })
}


fetch("absence.json").then((response) => response.json())
.then((json) => {for(let j =0; j < json.Motif.length; j++) {
    let afficheJson = json.Motif[j].categorie;

let modifCheckbox = document.querySelector(".modifCheckbox")
modifCheckbox.innerHTML += "<hr class = 'hr2'>" + afficheJson + "<br>"

console.log(afficheJson)

for(let k =0; k <json.Motif[j].nom.length; k++) {
    let affichjeson = json.Motif[j].nom[k]
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "motif"
    modifCheckbox.innerHTML += checkbox.outerHTML + affichjeson + "<br>";
}
    
}});

