const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('C:\\Users\\offen\\Downloads\\INFO BFMTV. Mort de Lyhanna： l\'autopsie révèle que l\'enfant a été victime d\'un viol, le profil biologique de Jérôme Barella retrouvé sur elle (23_06_2026 05：03：30).html', 'utf8');

const $ = cheerio.load(html);

const contentBody = $('.content_body_wrapper').first();
if (contentBody.length > 0) {
    console.log('--- content_body_wrapper CHILDREN ---');
    contentBody.children().each((i, el) => {
        let textSample = $(el).text().substring(0, 50).replace(/\n/g, ' ');
        console.log(`Child ${i}: <${el.tagName}> class="${$(el).attr('class')}" id="${$(el).attr('id')}" -> "${textSample}"`);
    });
}
