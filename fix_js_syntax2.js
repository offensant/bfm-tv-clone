const fs = require('fs');
let html = fs.readFileSync('societe/commentateur-autoproclame-kevin-enquete.html', 'utf8');

html = html.replace("\\\\n        document.getElementById('realInterviewAudio').addEventListener('ended'", "        document.getElementById('realInterviewAudio').addEventListener('ended'");

fs.writeFileSync('societe/commentateur-autoproclame-kevin-enquete.html', html);
console.log("Syntax error fixed via node script.");
