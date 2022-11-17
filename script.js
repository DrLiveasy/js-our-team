/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede (BOOTSTRAP!)

Nome            Ruolo                   Foto (nome file / url di un immagine)
Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	            scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg*/


//variabile con oggetti vuoti che mi aiuta a stampare i dati forniti
let MembroTeam = {
    Nome: "",
    Ruolo: "",
    Foto:""
}

//array dei oggetti
let arrayTeam = [
    {
        Nome: "Wayne Barnett",
        Ruolo: "Founder & CEO",
        Foto:"wayne-barnett-founder-ceo.jpg"
    },
    {
        Nome: "Angela Caroll",
        Ruolo: "Chief Editor",
        Foto:"angela-caroll-chief-editor.jpg"
    },
    {
        Nome: "Walter Gordon",
        Ruolo: "Office Manager",
        Foto:"walter-gordon-office-manager.jpg"
    },
    {
        Nome: "Angela Lopez",
        Ruolo: "Social Media Manager",
        Foto:"angela-lopez-social-media-manager.jpg"
    },
    {
        Nome: "Scott Estrada",
        Ruolo: "Developer",
        Foto:"scott-estrada-developer.jpg"
    },
    {
        Nome: "Barbara Ramos",
        Ruolo: "Graphic Designer",
        Foto:"barbara-ramos-graphic-designer.jpg"
    }

]
/*
//loop che ogni volta eseguito stampa gli oggetti simili dall array 
for(const MembroTeam of arrayTeam){
    stampaMembro(MembroTeam);
}


//funzione per stampare i dati che c'è dentro ogni oggetto
function stampaMembro(Membro){
    console.log(
        `
-------------- Membro ----------------
    Nome : ${Membro.Nome}
    Ruolo : ${Membro.Ruolo}
    Foto : ${Membro.Foto} 
--------------------------------------

        `
    )
}*/

for(const MembroTeam of arrayTeam){
    stampaMembroSuHtml(MembroTeam);
}

function stampaMembroSuHtml(Membro){
    document.write(`
    <table class="table table-dark">
    <thead>
        <tr>
        <th scope="col"></th>
        <th scope="col">Nome</th>
        <th scope="col">Ruolo</th>
        <th scope="col">Foto</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row"></th>
        <td>${Membro.Nome}</td>
        <td>${Membro.Ruolo}</td>
        <td>${Membro.Foto}</td>
        </tr>
    
    </tbody>
    </table>
    `
    )

}