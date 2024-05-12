import { updatePage } from './utils.mjs';
import { extractPreviousLinks, extractFirstContentEncoded } from './rssExtractor.mjs';
import fetch from 'node-fetch';
import fs from 'fs/promises';

const URL = 'https://us10.campaign-archive.com/feed?u=12a6ecea8fbc1ad37a233cac1&amp;id=d479a108b4';
const LIST_SIZE = 3;
const ANNOUNCEMENT_FILEPATH = './e4b1ffcb4ee645488a4729bd77e0b3d89bc0a70d/announcements.md';
const ANNOUNCEMENT_TAG = 'ANNOUNCEMENT';
console.log('Mailchimp RSS URL : ', URL);

let previousLinksHtml = '';

await fetch(URL)
  .then(response => response.text())
  .then(data => {
    // console.log('data: ', data);

    const firstContentHtml = extractFirstContentEncoded(data);
    // console.log('First Content: ', firstContentHtml);
    
    previousLinksHtml = extractPreviousLinks(data, LIST_SIZE);
    // console.log('Previous Links: ', previousLinksHtml);

    let newContent = firstContentHtml
    newContent += previousLinksHtml;

    fs.readFile(ANNOUNCEMENT_FILEPATH, 'utf8')
		.then(previousContent => {
			const announcement = updatePage(ANNOUNCEMENT_TAG, previousContent, newContent);

			return fs.writeFile(ANNOUNCEMENT_FILEPATH, announcement);
		});
  })
  .catch(error => {
    console.error('Error:', error);
  });