const fs = require('fs');
const html = fs.readFileSync('C:\\Users\\offen\\Downloads\\INFO BFMTV. Mort de Lyhanna： l\'autopsie révèle que l\'enfant a été victime d\'un viol, le profil biologique de Jérôme Barella retrouvé sur elle (23_06_2026 05：03：30).html', 'utf8');

// Find title
const titleMatch = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
console.log('--- TITLE ---');
console.log(titleMatch ? titleMatch[1].trim() : 'No title');

// Find date
const dateMatch = html.match(/<time[^>]*>([\s\S]*?)<\/time>/);
console.log('\n--- DATE ---');
console.log(dateMatch ? dateMatch[1].trim() : 'No date');

// Find authors
const authorMatch = html.match(/<div class="content_signature_author"[^>]*>([\s\S]*?)<\/div>/);
console.log('\n--- AUTHORS ---');
console.log(authorMatch ? authorMatch[1].trim() : 'No authors');

// Find a snippet of the content to see styling (e.g. bold, blue links)
const paragraphs = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)];
console.log('\n--- PARAGRAPHS ---');
for (let i = 0; i < Math.min(10, paragraphs.length); i++) {
    console.log(paragraphs[i][0]);
}
