 const prompt = require ("prompt-sync")();

 const n = prompt ("input=");
 const input = parseInt (n);


 if (input % 4 == 0) {
    console.log ("leapyear")
 }
 else {
    console.log ("not leapyear")
 }
