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
            document.getElementById("firstSection").style.marginTop = "48px";

        }
        else{
            link.style.animation= `navLinkFade 0.5s ease forwards ${index / 3 + .5}s`;
            document.getElementById("firstSection").style.marginTop = "55vh";

             }
        });
        //Burger
        burger.classList.toggle('toggle');
    
    });
 

}

navSlide(); 
