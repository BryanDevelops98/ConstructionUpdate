const animated = document.querySelectorAll(".animated")
const observer = new IntersectionObserver(entries =>{
    console.log(entries)
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".animated")[0].classList.add("fadeInLeft");
            document.querySelectorAll(".animated")[1].classList.add("fadeInTop");
            document.querySelectorAll(".animated")[2].classList.add("fadeInRight");
    
        }
    })
    })
    
    observer.observe(document.querySelector(".container-fluid"));
    observer.observe(animated[0])

function flipCard(){
    this.classList.toggle('is-flipped');

}

document.getElementById("cardBryan").addEventListener("click", flipCard);
document.getElementById("cardTwo").addEventListener("click", flipCard);
document.getElementById("cardThree").addEventListener("click", flipCard);


const navSlide = () =>{
    const burger= document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click',() =>{
        //toggle
        nav.classList.toggle('nav-active');

       //animation in Links
       navLinks.forEach((link,index) => {
        if(link.style.animation){
            link.style.animation='';
        }
        else{
            link.style.animation= `navLinkFade 0.5s ease forwards ${index / 3 + .5}s`;

             }
        });
        //Burger
        burger.classList.toggle('tog gle');
    
    });
 

}

navSlide(); 


