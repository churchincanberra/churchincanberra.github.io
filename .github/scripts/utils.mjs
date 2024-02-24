import { JSDOM } from 'jsdom';

/**
 * Updates a page by replacing a specific section with new content.
 *
 * @param {string} tagName - The tag name to look for in the page content. If provided, it will look for `<!-- tagName:START -->` and `<!-- tagName:END -->`. If not provided, it will look for `<!-- ANNOUNCEMENT:START -->` and `<!-- ANNOUNCEMENT:END -->`.
 * @param {string} previousContent - The previous content of the page.
 * @param {string} newContent - The new content to replace the section with.
 * @returns {string} - The updated page content.
 */
export const updatePage = (tagName, previousContent, newContent) => {
  const tagToLookFor = tagName ? `<!-- ${tagName}:` : `<!-- ANNOUNCEMENT:`;
  const closingTag = ' -->';
  const tagNewlineFlag = true;

  const startOfOpeningTagIndex = previousContent.indexOf(
    `${tagToLookFor}START`,
  );
  const endOfOpeningTagIndex = previousContent.indexOf(
    closingTag,
    startOfOpeningTagIndex,
  );
  const startOfClosingTagIndex = previousContent.indexOf(
    `${tagToLookFor}END`,
    endOfOpeningTagIndex,
  );
  if (
    startOfOpeningTagIndex === -1 ||
    endOfOpeningTagIndex === -1 ||
    startOfClosingTagIndex === -1
  ) {
    // Exit with error if comment is not found on the readme
    console.log(
      `Cannot find the comment tags: \n${tagToLookFor}START --> \n${tagToLookFor}END -->`
    );
  }

  return [
    previousContent.slice(0, endOfOpeningTagIndex + closingTag.length),
    tagNewlineFlag ? '\n' : '',
    newContent,
    tagNewlineFlag ? '\n' : '',
    previousContent.slice(startOfClosingTagIndex),
    tagNewlineFlag ? '\n' : '',
  ].join('').trimEnd();
};

/**
 * Retrieves the URL of the first link found in the given JavaScript string.
 * @param {string} jsString - The JavaScript string containing the HTML code.
 * @returns {string|null} - The URL of the first link, or null if no link is found.
 */
export const getFirstLinkUrl = (jsString) => {
  const htmlString = jsString.replace('document.write("', '').slice(0, -3);
  // console.log('Stripped document.write', htmlString);

  const dom = new JSDOM(htmlString);
  const firstLink = dom.window.document.querySelector('a');

  if (firstLink) {
    let url = firstLink.href;
    url = url.replace(/http/g, "https"); // Replace "http" with "https"
    url = url.replace(/httpss/g, "https"); // Replace "httpss" with "https"
    url = url.replace(/\\"/g, ''); // Remove extra double quotes
    url = decodeURIComponent(url); // Unescape the URL
    return url;
  } else {
    return null;
  }
}

/**
 * Retrieves the HTML of the previous 3 links after the first found in the given JavaScript string.
 * @param {string} jsString - The JavaScript string containing the HTML code.
 * @returns {string[]} - The HTML of the previous 3 links, or an empty array if no links are found.
 */
export const getPreviousLinksHtml = (jsString) => {
  const htmlString = jsString.replace('document.write("', '').slice(0, -3);

  const dom = new JSDOM(htmlString);
  const links = Array.from(dom.window.document.querySelectorAll('a'));

  if (links.length > 1) {
    let result = '<ul>';
    links.slice(1, 4).forEach(link => {
      let url = link.href;
      url = url.replace(/http/g, "https"); // Replace "http" with "https"
      url = url.replace(/httpss/g, "https"); // Replace "httpss" with "https"
      url = url.replace(/\\"/g, ''); // Remove extra double quotes
      url = decodeURIComponent(url); // Unescape the URL

      const title = link.innerHTML;
      const html = `<a href="${url}" target="_blank">${title}</a>`; 

      result += `<li>${html}</li>`;
    });
    result += '</ul>';
    return result;
  } else {
    return '';
  }
}


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
  });

  const templateBody = dom.window.document.getElementById('templateBody');
  return templateBody ? templateBody.innerHTML : dom.serialize();
}
