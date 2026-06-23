const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('C:\\Users\\offen\\Downloads\\INFO BFMTV. Mort de Lyhanna： l\'autopsie révèle que l\'enfant a été victime d\'un viol, le profil biologique de Jérôme Barella retrouvé sur elle (23_06_2026 05：03：30).html', 'utf8');

const $ = cheerio.load(html);

console.log('--- META INFO ---');
console.log('Title:', $('h1.title_article').html());
console.log('Date:', $('time').html());
console.log('Authors:', $('.content_signature_author').html());
console.log('Chapo:', $('.chapo_article').html());

console.log('\n--- BODY ---');
$('.content_article p').each((i, el) => {
    console.log(`P[${i}]:`, $(el).html());
});

console.log('\n--- LINKS IN BODY ---');
$('.content_article a').each((i, el) => {
    console.log(`Link: class="${$(el).attr('class')}" style="${$(el).attr('style')}" href="${$(el).attr('href')}" -> ${$(el).text()}`);
});
