/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sumSalary = 0;
  for (const key in salaries) {
    if (typeof salaries[key] == "number") {
      sumSalary += salaries[key];
    }
  }
  return sumSalary;
}