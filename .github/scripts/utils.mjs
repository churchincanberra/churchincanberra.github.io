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
  ].join('');
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
 * Removes unwanted elements and attributes from HTML content.
 * - elements: style, script
 * - attributes: style, class
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

  const fonts = dom.window.document.querySelectorAll('font');
  fonts.forEach(font => font.remove());

  const elements = dom.window.document.querySelectorAll('*');
  elements.forEach(element => {
    if (element.hasAttribute('style')) {
      element.removeAttribute('style');
    }
    if (element.hasAttribute('class')) {
      element.removeAttribute('class');
    }
  });

  const templateBody = dom.window.document.getElementById('templateBody');
  return templateBody ? templateBody.innerHTML : dom.serialize();
}
