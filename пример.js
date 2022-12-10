'use srict'; // исправляет ошибки старых версий кода - ставить надо всегда при написании кода
var number = 5;
var sring = 'hello';
var sim = Symbol;
var boolean = true;
null;
undefined;
var obj = {};


console.log(4/0); //=> infinity
console.log('string'*9); //=>NaN

let something;
console.log(something); //=> undefined

let persone = { //объект
    name: 'John', // свойство объекта, где name - ключ, "John" - значение
    age: 25,
    isMarried: false
};

console.log(persone.name); // извлечение свойства объекта через "."
console.log(persone['name']); // извлечение строки

// массив - хранение данных под последовательными номерами:

let arr = ['plum.jpg','strim.bmp','look.png'];

console.log(arr[2]); // извлечение из массива



alert('hello world!'); //вызывает модальное окно в браузере

confirm('Are you here?'); // создает модальное окно с 2мя кнопками:"ок" и "отмена"

let answer = confirm('Are you here?'); // создает пременную и возвращает логическое значение (true/false)
console.log(answer);

let answ = prompt('Вам есть 18?', 'Да'); // выводит модальное окно с полем для ввода данных пользователем и ответ по умолчанию/пустое поле
console.log(answ);
console.log(typeof(answ)); //выводит тип данных, все вводимые пользователем данные являются строкой(string)

//ОПЕРАТОРЫ

console.log(4 + '- object'); // "+" - складывает все со всем получает строку
let ans = +prompt('Вам есть 18?', 'Да'); // "+" перед строкой превращает ее в числовой тип данных
console.log(ans);
console.log(typeof(ans)); //выводит тип данных, все вводимые пользователем данные являются строкой(string)

let incr = 10,
decr = 10;

//incr++; // оператор увеличивает значение на 1
//decr--; // оператор уменьшает значение на 1

//console.log(++incr); // префексная форма увеличивает на 1 и возвращает измененное значение
//console.log(--decr); // преексная форма уменьшает на 1 и возвращает измененное значение

console.log(incr++); // постфиксная форма возвращает последнее выведенное значение
console.log(decr--); // постфиксная форма возвращает последнее выведенное значение

console.log(5%2); // % возвращает остаток от деления

// "=" - присваивание
// "==" - проверка на равенство
// "===" - строгая проверка на равенство типов данных

console.log('2' == 2); //сравнивает по значениям
console.log('2' === 2); //сравнивает по типу данных 

// оператор "&&" (и) - возвращает true только если оба или все операнды являются правдивыми
let isChecked = true,
    isClose = false;

console.log(isChecked && isClose); 

// оператор "||" (или) возвращает true, если хотя бы один из операнотов правдивый
console.log(isChecked || isClose);

//! - оператор отрицания - превращает значение в противоположное (true -> false)

console.log(isChecked || !isClose); // (были оба false, один стал НЕfalse, т.е. true) вернет => true