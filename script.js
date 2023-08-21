// Игра 1

function mounth() {let season = Number(prompt('Введите календарный номер месяца'));
if (season === 12 || season === 1 || season === 2 ) return(alert("Зима"))
else if (season === 3 || season === 4 || season === 5 ) return(alert("Весна"))
else if (season === 6 || season === 7 || season === 8 ) return(alert("Лето"))
else if (season === 9 || season === 10 || season === 11 ) return(alert("Осень"))
else alert('Вы ввели неправильное значение!');
};

// Игра 2

function memory() {
  let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин',];
  arr = arr.sort(() => Math.random() - 0.5);
  alert(arr);
  let newArr = arr.map(element => {
  return element.toLowerCase();
  });
  let questions = String(prompt('Первый фрукт из списка?'));
  let questions2 = String(prompt('Последний фрукт из списка?'));
  let result = newArr.includes(questions.toLowerCase());
  let result2 = newArr.includes(questions2.toLowerCase());
  if((result === true) && (questions.toLowerCase() === newArr[0]) && ((result2 === true) && (questions2.toLowerCase() === newArr[6]))) 
  {
    alert('Поздравляю, вы отгадали!');
  } 
  else if ((result === true) && (questions.toLowerCase() === newArr[0])) 
  {
    alert('Вы были близки к победе!');
  } 
  else if ((result2 === true) && (questions2.toLowerCase() === newArr[6])) 
  {
    alert('Вы были близки к победе!');
  }
  else 
  {
    alert('Стоит попробовать еще раз');
  }
  
};