const fs = require('fs');
const html = fs.readFileSync('societe/commentateur-autoproclame-kevin-enquete.html', 'utf8');

const regex = /<script>([\s\S]*?)<\/script>/g;
let match;
let i = 1;
while ((match = regex.exec(html)) !== null) {
    const code = match[1];
    fs.writeFileSync(`test_script_${i}.js`, code);
    try {
        require('vm').Script(code);
        console.log(`Script ${i} is valid.`);
    } catch (e) {
        console.log(`Script ${i} has error:`, e);
    }
    i++;
}
