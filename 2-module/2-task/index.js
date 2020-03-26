/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  let isEmpty = false;
  if (Object.keys(obj).length == 0) {
    isEmpty = true;
  }
  return isEmpty;
}