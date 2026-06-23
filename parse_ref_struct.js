const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('C:\\Users\\offen\\Downloads\\INFO BFMTV. Mort de Lyhanna： l\'autopsie révèle que l\'enfant a été victime d\'un viol, le profil biologique de Jérôme Barella retrouvé sur elle (23_06_2026 05：03：30).html', 'utf8');

const $ = cheerio.load(html);

// Find the main article container
const articleContainer = $('article').first();
if (articleContainer.length > 0) {
    console.log('Article Classes:', articleContainer.attr('class'));
    
    // Dump immediate children of article
    articleContainer.children().each((i, el) => {
        console.log(`Child ${i}: <${el.tagName}> class="${$(el).attr('class')}" id="${$(el).attr('id')}"`);
    });
} else {
    console.log('No <article> tag found. Looking for .main-content or something similar...');
}
