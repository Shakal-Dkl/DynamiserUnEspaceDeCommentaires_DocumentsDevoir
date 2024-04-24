
//Supprimer un élément
let element = document.getElementsByClassName("-my-4");
element.remove();



// ma fonction
function addCommentValidate () {
    //Création de mes variables
    let inputLastName = document.getElementById ("last-name");
    let inputFirstName = document.getElementById ("first-name");
    let message = document.getElementById ("message");
    let comments = document.getElementById ("comment-list");
    


    // Création de mes nouvelles Balises
    let newDiv = document.createElement ("div");
    let h3 = document.createElement ("h3");
    let p = document.createElement ("p");
    let newDivP =document.createElement ("div");

    let newItemFirstName = document.createTextNode (inputFirstName.value + " ");
    let newItemLastName = document.createTextNode (inputLastName.value);
    let newItemMessage = document.createTextNode (message.value);

    comments.appendChild (newDiv);
    comments.appendChild (newDivP);
    newDiv.appendChild (h3);
    h3.appendChild (newItemFirstName);
    h3.appendChild (newItemLastName);
    newDivP.appendChild (p);
    p.appendChild (newItemMessage);

}

//empeche le rechargement de la page
const validateBtn = document.querySelector("button");
validateBtn.addEventListener("click", addButton);
function addButton(event){
    event.preventDefault();
}

// Vérifié si les champs sont vides
let formulaires = document.querySelector ("form");
formulaires.addEventListener("submit", function(e) {
    if (inputFirstName.value.trim() == ""){
        let error =document.createTextNode("")
        error.innerHTML = "Tous les champs doivent être remplis ";
        error.style.color = "red";
        e.preventDefault();
    }
    
});

