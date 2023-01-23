const heading = document.querySelector(".header__h2--js");

heading.innerHTML = "Wyśrodkowałam treść strony, mimo że strona wygląda brzydko ;)";

const name = 'Patrycja';
const age = 45;

 

 


const woman = {
    greet: (name, age) => {
        console.log(`Witajcie, nazywam się ${name} i mam ${age} lat.`);
    },
    greeting: function(name, age) {
        console.log(`Witaj, nazywam się ${name} i mam ${age} lat.`);
     },
     
}
woman.greeting(name, age);
woman.greet(name, age);