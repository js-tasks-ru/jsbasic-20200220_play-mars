/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */

function showSalary(data, age) {
  let listUsers = "";
  let i = 0;
  data.forEach((element) => {
    if (element.age <= age && i == 0) {
      listUsers += `${element.name}: ${element.balance}`;
    } else if (element.age <= age && i != 0) {
      listUsers += `\n${element.name}: ${element.balance}`;
    }
    i++;
  });
  return listUsers;
}
