const fs = require('fs');
let html = fs.readFileSync('societe/commentateur-autoproclame-kevin-enquete.html', 'utf8');

html = html.replace(/\\n\s*document\.getElementById\('realInterviewAudio'\)/g, "        document.getElementById('realInterviewAudio')");

fs.writeFileSync('societe/commentateur-autoproclame-kevin-enquete.html', html);
console.log("Syntax error fixed using regex.");
