const softwareEngineer = document.getElementById("softwareEngineer");
var span = "|";

const letras = ["S", "o", "f","t", "w", "a", "r", "e", " ", "E", "n", "g", "i", "n", "e", "e", "r"];
var palabra = "";
var spanActive = false;


function activarDesactivarSpan(){
    if (spanActive){
        span = "";
        spanActive = false;
    }else{
        span = "|";
        spanActive = true;
    }
    return span;
}

function escribir(){
    let index = 0;
    setInterval(() => {
        if (index < 17){
            palabra += letras[index];
            softwareEngineer.textContent = palabra + span;
            index++;
            
        }else if (index >= 17){
            if (index % 10 == 0){
                softwareEngineer.textContent = "Software Engineer"+activarDesactivarSpan();
            }
            index++;
        }
        if (index == 120){
            index = 20
        }
    }, 100);
}

escribir();

function scrollToSection(sectionId) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" , block: "start"});
    }
}