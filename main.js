/* PROMPT */

 let firstName = prompt('Ciao! Inizia scrivendo il tuo nome...');
 let lastName = prompt('Adesso scrivi il tuo cognome...');
 let favorColor = prompt('Infine scrivi il tuo colore preferito');

 /* Numero da concatenare in chiusura */
 const pwdNumb = 21;

/* INNER HTML */
document.getElementById('pwd-inner').innerHTML = firstName + lastName + favorColor + pwdNumb;