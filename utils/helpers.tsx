/**
 * Format a number with commas
 * @param {number} num - The number to format
 * @returns {string} - Formatted number
 */
export function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  /**
   * Get a random color
   * @returns {string} - Hex color
   */
  export function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  
  /**
   * Truncate text with ellipsis
   * @param {string} text - Text to truncate
   * @param {number} length - Max length
   * @returns {string} - Truncated text
   */
  export function truncateText(text, length) {
    return text.length > length ? text.substring(0, length) + '...' : text;
  }