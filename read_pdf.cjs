const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('Contenuti analisi e-commerce/istruzioni contenuti e-commerce.pdf');

pdf(dataBuffer).then(function (data) {
    console.log(data.text);
}).catch(function (error) {
    console.error("Error reading PDF:", error);
});
