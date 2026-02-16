// let articles = [
//     { id: 1, title: "Les bienfaits de la pole dance", content: "La pole dance est une activité physique complète qui améliore la force, la flexibilité et la confiance en soi." },
//     { id: 2, title: "Comment débuter la pole dance", content: "Pour débuter la pole dance, il est recommandé de suivre des cours avec un instructeur qualifié et de pratiquer régulièrement." },
//     { id: 3, title: "Les compétitions de pole dance", content: "Les compétitions de pole dance mettent en avant les talents des danseurs à travers des performances artistiques et techniques." }
// ]

// function createCard(article) {
//      // Create elements
//      let newDiv = document.createElement('div');
//      let newH3 = document.createElement('h3');
//      let newP = document.createElement('p');

//      // Modification le contenu
//      newDiv.textContent = article.id;
//      newH3.textContent = article.title;
//      newP.textContent = article.content;

//      // Ajouter les éléments à la div  
//      newDiv.appendChild(newH3);
//      newDiv.appendChild(newP);

//      //ajouter les class CSS
//      newDiv.classList.add("feed-container", "produit");
//      newH3.classList.add('produit');
//      newP.classList.add('produit'); 

//      // return something....
//      return newDiv;
//  }

//  function displayArticles() {
//      document.getElementById(".feed-container").innerHTML = '';
//      articles.forEach(article => {
//          let card = createCard(article);
//          document.getElementById(".feed-container").appendChild(card);
// });
// }

// displayArticles();


async function fetchArticles() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let articles = await response.json();
    return articles;
}

function createCard(article) {
     // Create elements
    let newDiv = document.createElement('div');
    let newH3 = document.createElement('h3');
    let newP = document.createElement('p');
     // Modification le contenu
    newDiv.textContent = article.id;
    newH3.textContent = article.title;
    newP.textContent = article.body;

     // Ajouter les éléments à la div  
    newDiv.appendChild(newH3);
    newDiv.appendChild(newP);

     //ajouter les class CSS
    newDiv.classList.add("feed-container", "produit");
    newH3.classList.add('produit');
    newP.classList.add('produit'); 

     // return something....
    return newDiv;
 }

async function displayArticles() {
    document.getElementById(".feed-container").innerHTML = '';
    articles.forEach(article => {
        fetchArticles();
        let card = createCard(article);
        document.getElementById(".feed-container").appendChild(card);
});
}

displayArticles();

let container = document.getElementById('container');

//menu dropdown
function showmenu () {
    document.getElementById('dropcontent').classList.toggle('show');
}

window.onclick=function(event){
    if (!event.target.matches("dropbutton")) {
        let dropdowns=document.getElementByClassName("dropcontent");
        let i;
        for (i=0; i<dropdowns.length; i++) {
            let openDropdown=dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}
