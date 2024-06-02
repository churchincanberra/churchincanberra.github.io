import fs from 'fs';
import { JSDOM } from 'jsdom';


/**
 * Removes unwanted elements and attributes from HTML content.
 * - elements: style, script
 * - attributes: style, class, face, border, cellspacing, cellpadding, width
 * Return element with id 'templateBody' if it exists, otherwise return the whole HTML content.
 * 
 * @param {string} htmlContent - The HTML content to be trimmed.
 * @returns {string} - The trimmed HTML content.
 */
export const trimHtmlContent = (htmlContent) => {
  // Remove <!--[if mso]> code
  htmlContent = htmlContent.replace(/<!--\[if mso\]>[\s\S]*?<!\[endif\]-->/g, '');

  const dom = new JSDOM(htmlContent);

  const styles = dom.window.document.querySelectorAll('style');
  styles.forEach(style => style.remove());

  const scripts = dom.window.document.querySelectorAll('script');
  scripts.forEach(script => script.remove());

  const elements = dom.window.document.querySelectorAll('*');
  elements.forEach(element => {
    if (element.hasAttribute('style')) {
      element.removeAttribute('style');
    }
    if (element.hasAttribute('class')) {
      element.removeAttribute('class');
    }
    if (element.hasAttribute('face')) {
      element.removeAttribute('face');
    }
    if (element.hasAttribute('border')) {
      element.removeAttribute('border');
    }
    if (element.hasAttribute('cellspacing')) {
      element.removeAttribute('cellspacing');
    }
    if (element.hasAttribute('cellpadding')) {
      element.removeAttribute('cellpadding');
    }
    if (element.hasAttribute('width')) {
      element.removeAttribute('width');
    }
    if (element.hasAttribute('lang')) {
      element.removeAttribute('lang');
    }
    if (element.hasAttribute('xml:lang')) {
      element.removeAttribute('xml:lang');
    }
    if (element.hasAttribute('data-contrast')) {
      element.removeAttribute('data-contrast');
    }		
    if (element.hasAttribute('color')) {
      element.removeAttribute('color');
    }		
    if (element.hasAttribute('align')) {
      element.removeAttribute('align');
    }		
    if (element.hasAttribute('valign')) {
      element.removeAttribute('valign');
    }		
  });

  const templateBody = dom.window.document.getElementById('templateBody');
  return templateBody ? templateBody.innerHTML : dom.serialize();
}

/**
 * Extracts the 'content:encoded' data from the first item in an XML document.
 * 
 * @param {string} xmlData - The XML data to extract from.
 * @param {function} callback - The callback function to handle errors.
 * @returns {string|Error} - The extracted trimmed HTML content or an error if no items are found in the XML data.
 */
export const extractFirstContentEncoded = (xmlData, callback) => {
	// Parse XML data using JSDOM
	const dom = new JSDOM(xmlData, { contentType: "text/xml" });
	const document = dom.window.document;

	// Navigate to the 'item' tag and extract the 'content:encoded' data from the first item
	const item = document.querySelector('item');
	if (item) {
			const contentEncoded = item.querySelector('description').textContent;
			const trimmedHtmlData = trimHtmlContent(contentEncoded);
			return trimmedHtmlData;
	} else {
			const error = new Error('No items found in XML data');
			callback(error);
			return error;
	}
}

/**
 * Extracts the previous announcement links from an XML document.
 * 
 * @param {string} xmlData - The XML data to extract from.
 * @param {number} listSize - The maximum number of previous links to extract.
 * @param {function} callback - The callback function to handle errors.
 * @returns {string|Error} - The extracted previous announcement links or an error if no items are found in the XML data.
 */
export const extractPreviousLinks = (xmlData, listSize, callback) => {
	// Parse XML data using JSDOM
	const dom = new JSDOM(xmlData, { contentType: "text/xml" });
	const document = dom.window.document;

	// Navigate to the 'item' tag and extract the title and link data from each item
	const items = document.querySelectorAll('item');

	if (items.length > 1) {
		let result = `<div class="pt-6 pb-6"><em>Previous announcements</em>`;
		for (let i = 1; i <= listSize && i < items.length; i++) {
				const item = items[i];
				const title = item.querySelector('title').textContent;
				const url = item.querySelector('link').textContent;

				const link = `<br /><a href="${url}" target="_blank">${title}</a>`;
				result += `${link}`;
		}
		result += `</div>`;
		return result;
	} 
	else {
			const error = new Error('No items found in XML data');
			callback(error);
			return ``;
	}
}
