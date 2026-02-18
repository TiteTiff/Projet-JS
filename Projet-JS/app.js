// async function fetchArticles() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let articles = await response.json();
//     return articles;
// }
//
// function createCard(article) {
//      // Create elements
//     let newDiv = document.createElement('div');
//     let newH3 = document.createElement('h3');
//     let newP = document.createElement('p');
//      // Modification le contenu
//     newDiv.textContent = article.id;
//     newH3.textContent = article.title;
//     newP.textContent = article.body;
//
//      // Ajouter les éléments à la div
//     newDiv.appendChild(newH3);
//     newDiv.appendChild(newP);
//
//      //ajouter les class CSS
//     newDiv.classList.add("feed-container", "produit");
//     newH3.classList.add('produit');
//     newP.classList.add('produit');
//
//      // return something....
//     return newDiv, newH3, newP;
//  }
//
// async function displayArticles() {
//     document.getElementById("container").innerHTML = '';
//     articles.forEach(article => {
//         fetchArticles();
//         let card = createCard(article);
//         document.getElementById("container").appendChild(card);
// });
// }
//
// displayArticles();
//let container = document.getElementById('container');


// Create elements
// let articles = [
//     { id: 1, title: "Les bienfaits de la pole dance", content: "La pole dance est une activité physique complète qui améliore la force, la flexibilité et la confiance en soi." },
//     { id: 2, title: "Comment débuter la pole dance", content: "Pour débuter la pole dance, il est recommandé de suivre des cours avec un instructeur qualifié et de pratiquer régulièrement." },
//     { id: 3, title: "Les compétitions de pole dance", content: "Les compétitions de pole dance mettent en avant les talents des danseurs à travers des performances artistiques et techniques." }
// ]
//
// function createCard(article) {
//
//     let myNewEl=document.createElement('div')
//     let newId = document.createElement('h3');
//     newId.textContent = articles.id;
//     let newTitle = document.createElement('h3');
//     newTitle.textContent=articles.title;
//     let newContent = document.createElement('p');
//     newContent.textContent=articles.title;
//
//     // Modification le contenu
//     // newDiv.textContent = article.id;
//     // newH3.textContent = article.title;
//     // newP.textContent = article.content;
//
//     // Ajouter les éléments à la div
//     myNewEl.appendChild(newId)
//     myNewEl.appendChild(newTitle);
//     myNewEl.appendChild(newContent);
//
//     //positionner dans le HTML
//     document.body.appendChild(myNewEl);
//
//     //ajouter les class CSS
//     myNewEl.classList.add("feed-container", "produit");
//     newId.classList.add('produit');
//     newTitle.classList.add('produit');
//     newContent.classList.add('produit');
//
//     // return something....
//     return myNewEl;
// }
//
// function displayArticles() {
//     document.getElementsByClassName(".feed-container").innerHTML = '';
//     articles.forEach(article => {
//         let card = createCard(article);
//         document.getElementById(".feed-container").appendChild(card);
//     });
// }
//
// displayArticles();



//menu dropdown
function showmenu () {
    //alert() pour vérifier si quelque chose se passe normalement grâce à une fenêtre pop-up
    document.getElementById('dropcontent').classList.toggle('show');
}

function myFormulaire() {
    let form = document.createElement('formulaire');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const avis = document.getElementById('avis').value;


    let myNewEl = document.createElement('div');
    let nameContent = document.createElement('p');
    nameContent.innerText = name;
    let emailContent = document.createElement('p');
    emailContent.innerText = email;
    let avisContent = document.createElement('p');
    avisContent.innerText = avis;
    myNewEl.appendChild(nameContent);
    myNewEl.appendChild(emailContent);
    myNewEl.appendChild(avisContent);
    document.body.appendChild(myNewEl);
    return myNewEl;
};

function affichage() {
    document.getElementById('images').classList.toggle('swap');
}

function ajouter(){
    const ajout=document.querySelector('#ajout');
    const valider=document.querySelector('#valider');

    let ajouter=prompt("Entrez l'URL d'une image à ajouter");
    if(ajouter===null){
        valider.innerText="Réessayez plus tard";
    }
    else {
        let image=document.createElement("img")
        //image=document.getElementById("valider").value;
        image.setAttribute("src", ajouter);
        document.getElementById("images").appendChild(image);
    }
}

