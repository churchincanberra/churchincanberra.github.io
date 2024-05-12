// To run
// > node --experimental-modules rssExtractor.test.mjs

import { extractPreviousLinks, extractFirstContentEncoded } from './rssExtractor.mjs';
import fs from 'fs';

const xmlData = fs.readFileSync('rssExtractor.test.data.xml', 'utf8');

const result = extractFirstContentEncoded(xmlData, (err, contentEncoded) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Content Encoded: ${contentEncoded}`);
    }
});
console.log(result);

const previous = extractPreviousLinks(xmlData, 3, (err, links) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Links: ${links}`);
    }
});
console.log(previous);