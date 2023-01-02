// Example - 01

//const bmi = calcBMI('88,3', '1.75');
//console.log(bmi);

//function calcBMI(weight, height) {

   // weight = commaToDot(weight);
   // height = commaToDot(height);

   // const bmi = +(weight / height ** 2).toFixed(1);

   // return bmi;  
//}

//function commaToDot(string) {
      //  return string.replace(",", ".");
    //}

// Example - 02

//function min(a, b) {
   // if (a < b) {
    //    return a;
    //}
   // return b;
//}

//console.log(min(2, 5)); 
//console.log(min(3, -1)); 
//console.log(min(1, 1));

// Example - 03

//function getRectArea(dimensions) {
   // dimensions = stringToArray(dimensions);

   // return dimensions[0] * dimensions[1];
//}

//function stringToArray(string) {
 //   return string.split(" ");
//}

//console.log(getRectArea('8 11'));

// Example - 04

//function logItems(items) {
  //  for (let i = 0; i < items.length; i += 1) {
  //      console.log(`${i + 1} - ${items[i]}`);
   // }
//}

//logItems(['Mango', 'Poly', 'Ajax']);
//logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// Example - 05

//function printContactsInfo(names, phones) {

    //names = names.split(",");
    //phones = phones.split(",");

    //for (let i = 0; i < names.length; i += 1) {
     //   console.log(`${names[i]}: ${phones[i]}`);
    //}
//}

//printContactsInfo(
  //'Jacob,William,Solomon,Artemis',
  //'89001234567,89001112233,890055566377,890055566300',
//);

// Example - 06

//function findLargestNumber(numbers) {
   // let largest = numbers[0];

   // for (let i = 0; i < numbers.length; i += 1) {

   //     if (numbers[i] > largest) {
   //         largest = numbers[i];
    //    }
   // }
  //      return largest;
//}

//console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); 
//console.log(findLargestNumber([49, 4, 7, 83, 12])); 

// Example - 07

//function calAverage(...args) {
   // let total = 0;

   // for (const arg of args) {
   //     total += arg;
    //}

    //return total / args.length;
//}

//console.log(calAverage(1, 2, 3, 4)); 
//console.log(calAverage(14, 8, 2)); 
//console.log(calAverage(27, 43, 2, 8, 36));

// Example - 08

//function formatTime(minutes) {
   // const hours = String(Math.floor(minutes / 60)).padStart(2, 0);
    //const minute = String(minutes % 60).padStart(2, 0);

    //return `${hours}:${minute}`;
//}

//console.log(formatTime(70)); // "01:10"
//console.log(formatTime(450)); // "07:30"
//console.log(formatTime(1441)); // "24:01"

// Example - 09

/* const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

//function addCourse(name) {
 //   return courses.push(name);
//}

//addCourse('Express');
//console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
//addCourse('CSS');
//console.log(courses);

function removeCourse(name) {
    for (let i = 0; i < courses.length; i += 1) {
        if (courses[i] === name) {
            courses.splice(courses[i], 1);
        }
    }

    return courses;
} 

removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); */