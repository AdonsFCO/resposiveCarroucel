
/**
 * @param {document} buttonLeft - "The button that moves the slider to the left"
 * @param {document} buttonRight - "The button that moves the slider to the right"
 * @param {Array} slides - "An array that contains all the slides of the slider."
 * 
 */

class slider
{   
    constructor(buttonLeft, buttonRight, slides)
    {
        this.buttonLeft = buttonLeft;
        this.buttonRight = buttonRight;
        this.slides = slides;
        this.observer = new MutationObserver(mutation => console.log(mutation));
        this.observer.observe(buttonLeft,{attributes: true, childLIst:true, characterData:true});
        
        this.buttonLeft.addEventListener("click",()=>{
            this.buttonLeft.classList.add("miau");

        })

    }
    
}
let slider1 = new slider(document.querySelector(".slider__control--left"),document.querySelector(".slider__control--right"),document.querySelectorAll(".slider__slide"));