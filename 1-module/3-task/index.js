/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  let new_str = "";
  let counter = 0;

  for (const char of str) {
    if (counter == 0) {
      new_str = char[0].toUpperCase();
    } else {
      new_str += char;
    }
    counter++;
  }

  return new_str;
}
