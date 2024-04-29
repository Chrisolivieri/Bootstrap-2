let card = document.getElementsByClassName("selection")
let travel = card.length


function showCard(){
    alert("Ci sono " + travel + " viaggi disponibili")
}

function hideCard(){
    let card = document.querySelectorAll(".selection")

    for( let i = 0; i < card.length; i++){
        card[i].classList.toggle("invisible")
    }
}
    