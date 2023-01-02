// Example - 01

//const genres = ['Jazz', 'Bluez'];

//genres.push('Rock-n-roll');

//console.log(genres[0]);
//console.log(genres[genres.length - 1]);
//console.log(genres.shift());

//genres.unshift('Country', 'Reggae');

//console.log(genres);

// Example - 02

//const values = '8 11';

//const valuesArray = values.split(' ');

//const square = valuesArray[0] * valuesArray[1];

//console.log(square);

// Example - 03

//const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

//for (let i = 0; i < fruits.length; i += 1) {
 //   console.log(`${i + 1}: ${fruits[i]}`);
//}

// Example - 04

//const names = 'Jacob,William,Solomon,Artemis';
//const phones = '89001234567,89001112233,890055566377,890055566300';

//const namesArray = names.split(',');
//const phonesArray = phones.split(',');

//console.log(namesArray);
//console.log(phonesArray);

//for (let i = 0; i < namesArray.length; i += 1) {
 //   console.log(`${namesArray[i]}: ${phonesArray[i]}`);
//}

// Example - 05

//const string = 'Welcome to the future';
//const stringArray = string.split(' ');
//const stringLogged = stringArray.slice(1, stringArray.length - 1);

//console.log(stringLogged.join(' '));

// Example - 07

//const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
//const sortedLangs = langs.sort();



  //let minIndex = langs[0];

//for (let i = 0; i < langs.length; i += 1) {

   //if (langs[i].charCodeAt(0) < minIndex.charCodeAt[0]) {
  //    minIndex = langs[i];
  //  }
/// continue;
//}

//console.log(sortedLangs); 

// Example - 08

//const numbers = [2, 17, 94, 1, 23, 37];
//let min = numbers[0];

//for (let i = 0; i < numbers.length; i += 1) {
//    if (numbers[i] < min) min = numbers[i];
//}

//console.log(min); // 1