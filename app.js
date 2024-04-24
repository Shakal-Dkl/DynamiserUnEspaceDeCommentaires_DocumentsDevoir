
//Supprimer un élément
//let element = document.getElementsByClassName("-my-4");
//element.remove();

let formulaires = document.querySelector ("form");

formulaires.addEventListener("submit", addCommentValidate);
// ma fonction
function addCommentValidate (event) {
    event.preventDefault()

    //Création de mes variables
    let inputLastName = document.getElementById ("last-name");
    let inputFirstName = document.getElementById ("first-name");
    let message = document.getElementById ("message");
    let comments = document.getElementById ("comment-list");
    let error = document.getElementById("error-message");

    if (inputFirstName.value.trim() == ""){
        error.style.display = "block";
        // let error =document.createTextNode("")
        // error.innerHTML = "Tous les champs doivent être remplis ";
        // error.style.color = "red";
        alert("salut")
    }
    if (inputLastName.value.trim() == ""){
        error.style.display = "block";
        alert("salut")
    }


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

