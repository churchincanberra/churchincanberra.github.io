import { getFirstLinkUrl, trimHtmlContent, updatePage } from './utils.mjs';
import fetch from 'node-fetch';
import fs from 'fs/promises';

const url = 'https://churchincanberra.us10.list-manage.com/generate-js/?u=12a6ecea8fbc1ad37a233cac1&fid=17501&show=1';
const ANNOUNCEMENT_FILEPATH = './e4b1ffcb4ee645488a4729bd77e0b3d89bc0a70d/announcements.md';
const ANNOUNCEMENT_TAG = 'ANNOUNCEMENT';
console.log('Mailchimp Archive URL : ', url);

await fetch(url)
  .then(response => response.text())
  .then(data => {
    const firstLink = getFirstLinkUrl(data);
    console.log('Email campaign URL: ', firstLink);

    return fetch(firstLink);
  })
  .then(response => response.text())
  .then(async htmlContent => {
    const newContent = trimHtmlContent(htmlContent);
    await fs.readFile(ANNOUNCEMENT_FILEPATH, 'utf8')
      .then(previousContent => {
        const announcement = updatePage(ANNOUNCEMENT_TAG, previousContent, newContent);

        return fs.writeFile(ANNOUNCEMENT_FILEPATH, announcement);
      });
  })
  .catch(error => {
    console.error('Error:', error);
  });