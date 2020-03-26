/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let i = 0;
    let newStr = "";
    for (const char of str) {
      if (++i == maxlength) {
        newStr += "…";
        return newStr;
      }
      newStr += char;
    }
  } else {
    return str;
  }
}
