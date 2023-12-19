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


let valider = document.querySelector("valider");
    valider.addEventListener("click", (event) => {
        let dateChoisi = document.getElementById(dateHeure)
            dateChoisi.addEventListener("change", (event) => {
                dateChoisi = event.target
            })
            console.log(dateChoisi)
    })
console.log(valider)

let motif = `
<fieldset class="option">
    <legend class="legend"><h2 class="titreH2">Pour le motif</strong></h2></legend>         
    <section>
        <p><strong>Code 01 : retard absence non rémunéré</strong></p>
        <input type="checkbox"/>
        <label>Retard</label>
    </section>
    <hr class="hr2">       
    <section>
        <p><strong>Code 04 : Grève Afpa</strong></p>
        <input type="checkbox"/>
        <label>Gréve Afpa</label>
    </section>
    <hr class="hr2">
    <section>
        <p><strong>Code 05 : Maladie</strong></p>
        <input type="checkbox"/>
        <label>Maladie</label>
    </section>
    <hr class="hr2">
    <section>
        <p><strong>Code 06 : Absence Légale</strong></p>
        <input type="checkbox"/>
        <label>Naissance ou adoption (3jours)</label><br>
        <input type="checkbox"/>
        <label>Mariage (4jours)</label><br>
        <input type="checkbox"/>
        <label>Mariage d'un enfant (1jours)</label><br>
        <input type="checkbox"/>
        <label>Décès du conjoint ou du partenaire lié par un pacte
        civil de solidarité ou d'un enfant (2jours)</label><br>
        <input type="checkbox"/>
        <label>décès du mère, de la mère, du berau-père, 
        de la belle-mère, d'un frère ou d'une soeur (1jours)</label><br>
        <input type="checkbox"/>
        <label>Visite médicale obligatoire de grossesse</label><br>
        <input type="checkbox"/>
        <label>Stagiaire élu menbre du CA d'une caisse 
        de sécurité sociale</label><br>
    </section>
    <hr class="hr2">
    <section>
        <p><strong>code 20 - 21 - 30 - 31 - 40 - 41 : Accident</strong></p>
        <input type="checkbox"/>
        <label>Accident du travail sans arrêt</label><br>
        <input type="checkbox"/>
        <label>Accident du travail avec arrêt</label><br>
        <input type="checkbox"/>
        <label>Accident du trajet sans arrêt</label><br>
        <input type="checkbox"/>
        <label>Accident du trajet avec arrêt</label><br>
        <input type="checkbox"/>
        <label>Accident du travail  hors afpa sans arrêt</label><br>
        <input type="checkbox"/>
        <label>Accident du travail hors afpa avec arrêt</label><br>
    </section>
    <hr class="hr2">
    <section>
        <p><strong>code 98 : Absence autorisé non rémunérée</strong></p>
        <input type="checkbox"/>
        <label>Recherche PE</label><br>
        <input type="checkbox"/>
        <label>recherche d'un emploi</label><br>
        <input type="checkbox"/>
        <label>Visite d'un salon</label><br>
        <input type="checkbox"/>
        <label>Enquête en entreprise</label><br>
        <input type="checkbox"/>
        <label>Visite d'un autre centre</label><br>
        <input type="checkbox"/>
        <label>RDV psychologue du travail</label><br>
        <input type="checkbox"/>
        <label>Rendez-vous POLE EMPLOI</label><br>
        <input type="checkbox"/>
        <label>Absence pour fête religieuse hors jours fériés légaux</label><br>
        <input type="checkbox"/>
        <label>Grève des transports</label><br>
        <input type="checkbox"/>
        <label>Intempéries</label><br>
        <input type="checkbox"/>
        <label>Rdv avec le conseiller militaire</label><br>
        <input type="checkbox"/>
        <label>Recherche de logement, Rdv organisme divers</label><br>
        <input type="checkbox"/>
        <label>Recherche de logement, Rdv organisme divers</label><br>
        <hr class="hr2">
    <section>
        <p><strong>code 99 : Absence non autorisé non rémunérée</strong></p>
    </section>
</fieldset>
`;

let main = document.querySelector("main")
main.innerHTML = motif