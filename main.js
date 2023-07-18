const leftFade = document.querySelectorAll(".leftFades")
const rightFade = document.querySelectorAll(".rightFades")
const bottomFade = document.querySelectorAll(".bottomFades")
const insideFade = document.querySelectorAll(".insideFades")


const observerRight= new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        
           entry.target.classList.toggle("fadeInRight", entry.isIntersecting)
           
        if(entry.isIntersecting){
            observerRight.unobserve(entry.target)
        }
    
    })
},{ threshold: .5,
})
rightFade.forEach(rightFades =>{
    observerRight.observe(rightFades)
})

const observerIn= new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        
           entry.target.classList.toggle("fadeIn", entry.isIntersecting)
           
        if(entry.isIntersecting){
            observerIn.unobserve(entry.target)
        }
    
    })
},{ threshold: .3,
})
insideFade.forEach(insideFades =>{
    observerIn.observe(insideFades)
})

const observerBottom= new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        
           entry.target.classList.toggle("fadeInBottom", entry.isIntersecting)
           
        if(entry.isIntersecting){
            observerBottom.unobserve(entry.target)
        }
    
    })
},{ threshold: .3,
})
bottomFade.forEach(bottomFades =>{
    observerBottom.observe(bottomFades)
})


const observer= new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        
           entry.target.classList.toggle("fadeInLeft", entry.isIntersecting)
           
        if(entry.isIntersecting){
            observer.unobserve(entry.target)
        }
    
    })
    console.log(entries)
},{ threshold: .5,
})

leftFade.forEach(leftFades =>{
    observer.observe(leftFades)
})






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
            link.style.animation= `navLinkFade 0.5s ease forwards ${index / 3 + .3}s`;

             }
        });
        //Burger
        burger.classList.toggle('toggle');
    
    });
 

}

navSlide(); 



