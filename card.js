function flipCard(){
    this.classList.toggle('is-flipped');

}

document.getElementById("cardBryan").addEventListener("click", flipCard);
document.getElementById("cardTwo").addEventListener("click", flipCard);
document.getElementById("cardThree").addEventListener("click", flipCard);