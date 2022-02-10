console.log('Hello')

const listaEmail = [
    'valentino.rossi@alice.it',
    'lewis.hamilton@gmail.com',
    'maxverstappen@outlook.it',
    'charles.leclerc@ferrari.it',
];

const userEmail = prompt('Inserisci indirizzo email').trim();
console.log(userEmail);

let find = false

for(let i=0; i< listaEmail.length; i++) {}

if( userEmail === listaEmail[i]) {
    console.log('email trovata')
    find=true
    break;
}

if(find === true){
    console.log('Accesso Consentito')
} else {
    console.log('Accesso Negato')
}