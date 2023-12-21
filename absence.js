let btnRadio = document.querySelectorAll(".option .inputRadio");

btnRadio.forEach(radio => {
    radio.addEventListener('change', function() {
        let jour = document.getElementById("journeeABS");
        let heure = document.getElementById("heureABS");

        if (this.value === "1") {
            heure.style.display = "block";
            jour.style.display = "none";
        } else if (this.value === "2") {
            heure.style.display = "none";
            jour.style.display = "block";
        }
    });
});

    fetch("absence.json")
        .then((response) => response.json())
        .then((json) => {
            let modifCheckbox = document.querySelector(".modifCheckbox");
            for (let i = 0; i < json.Motif.length; i++) {
                let category = json.Motif[i].categorie;
                modifCheckbox.innerHTML += "<hr class='hr2'>" + category + "<br>";

                if (json.Motif[i].nom && json.Motif[i].nom.length > 0) {
                    for (let j = 0; j < json.Motif[i].nom.length; j++) {
                        let motif = json.Motif[i].nom[j];
                        let checkbox = document.createElement("input");
                        checkbox.type = "checkbox";
                        checkbox.name = "motif";
                        checkbox.value = motif;
                        modifCheckbox.appendChild(checkbox);
                        modifCheckbox.appendChild(document.createTextNode(motif));
                        modifCheckbox.appendChild(document.createElement("br"));
                    }
                }
            }
        });

function formaterDate(date) {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(date).toLocaleDateString('fr-FR', options);
}

body = document.getElementById("body")
    body.addEventListener("submit", (event) => {
        
     event.preventDefault();
    
        let heureDebut = document.getElementById("heureDebut").value;
        let heureFin = document.getElementById("heureFin").value;
    
        let dateJourDebut = new Date(document.getElementById("dateDebuJour").value);
        let dateJourFin = new Date(document.getElementById("dateFinJour").value);
        let select = document.getElementById("formationSuivie");

        let dateDebut = new Date(document.getElementById("dateDebuJour").value)
        let dateFin = new Date(document.getElementById("dateFinJour").value)
    
    //clacule de la diffenrence de jours
    if(dateDebut < dateFin) {
        const difference = dateFin - dateDebut;
        const differenceInDays = difference / (1000 * 3600 * 24);

    document.getElementById("resultatJours").textContent = "soit" +"  "+ differenceInDays +"  "+ "jours complet"

    } else {
        window.alert("La date de fin doit être superrieur a la date de debut")
    }

     let choice = select.selectedIndex;
     let valeur_cherchee = select.options[choice].value;
     let baliseNom = document.getElementById("nom");
     let nom = baliseNom.value;
     let balisePrenom = document.getElementById("prenom");
     let prenom = balisePrenom.value;
     let formationSuivie = valeur_cherchee;
     let periodeDebut = formaterDate(dateJourDebut);
     let periodeFin = formaterDate(dateJourFin);
     let motifs = document.querySelectorAll('input[name="motif"]:checked');
     let selectedMotifs = Array.from(motifs).map((checkbox) => checkbox.value);

     let URL = "http://127.0.0.1:5500/signature.html?nom=" + nom +
         "&prenom=" + prenom + "&formationSuivie=" + formationSuivie +
         "&heureDebut=" + heureDebut + "&heureFin=" + heureFin +
         "&dateJourDebut=" + periodeDebut + "&dateFinJour=" + periodeFin +
         "&motifs=" + selectedMotifs;

     window.location.href = URL;
     document.getElementById("form").reset();
     
     console.log(nom)
     console.log(prenom)
     console.log(formationSuivie)
     console.log(periodeDebut)
     console.log(periodeFin)
     console.log(selectedMotifs)
   });
