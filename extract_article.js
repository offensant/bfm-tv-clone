const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('C:\\Users\\offen\\Downloads\\INFO BFMTV. Mort de Lyhanna： l\'autopsie révèle que l\'enfant a été victime d\'un viol, le profil biologique de Jérôme Barella retrouvé sur elle (23_06_2026 05：03：30).html', 'utf8');

const $ = cheerio.load(html);
const articleHtml = $('article').html();

fs.writeFileSync('reference_article_extracted.html', articleHtml);
