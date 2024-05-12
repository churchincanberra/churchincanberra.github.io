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