//lesson-02/uk.md;
// Example-1

//const question = prompt("Яка офіційна назва Javascript?");
//const answer = "ECMAScript";

//if (question.toLowerCase === answer.toLowerCase) {
   // alert("Правильно");
//} else {
  //  alert("Не знаєте? ECMAScript!");
//}

// Example-2

//const hours = 14;
//const minutes = 26;
//let timestring;

//if (minutes > 0) {
  //  timestring = `${hours} г. ${minutes} хв.`;
//} else {
    //timestring = `${hours} г.`;
//}

//console.log(timestring);

// Example - 3

//const input = prompt('Введіть число');

//if (input > 0) {
  //  console.log("Позитивне");
//} else if (input < 0) {
  //  console.log("Негативне");
//} else {
    //console.log("Це нуль");
//}

// Example - 4

//const a = 120;
//const b = 180;

//if (a > 100 && b > 100) {
   // console.log(Math.max(a, b));
//} else {
   // console.log(b + 512);
//}

// Example - 5

//let link = 'https://my-site.com/about';

//if (link.endsWith('/')) {

//} else {
   // link = `${link}/`;
//}

//if (!link.endsWith('/')) {
    //link += '/';
//}

//console.log(link);

// Example - 6

//let link = 'https://somesite.com/about';

//if (link.endsWith('/')) {

//} else if (link.includes('my-site')) {
  //  link = `${link}/`;
//}

//if (link.includes('my-site') && !link.endsWith('/')) {
 //   link += "/";
//}

//console.log(link);

// Example - 7

//const a = 120;
//const b = 180;
//let number;

//number =  (a > 100 && b > 100) ? console.log(Math.max(a, b)) : console.log(b + 512);

// Example - 8

//consthours = 25;

//if (hours < 17) {
   // console.log("Pending");
//} else if (hours >= 17 && hours <= 24) {
   // console.log("Expires");
//} else {
 //   console.log("Overdue");
//}

// Example - 9

//const daysUntillDeadline = 2;

//if (daysUntillDeadline === 0) {
  //  console.log("Today");
//} else if (daysUntillDeadline === 1) {
//    console.log("Tomorrow");
//} else if (daysUntillDeadline === 2) {
//    console.log("Aftertomorrow");
//} else if (daysUntillDeadline >= 3) {
 //   console.log("Date in future");
//}

// Example - 10

//const daysUntillDeadline = 3;

//switch (daysUntillDeadline) {
      //  case 0:
       // console.log("Today");
       // break;
    
       // case 1:
       // console.log("Tomorrow");
      //  break;
    
      //  case 2:
      //  console.log("Aftertomorrow");
      //  break;
    
      //  default:
      //  console.log("Date in future");
//}

// Example - 11

//const max = 100;
//const min = 20;

//for (let i = min; i <= max; i += 1) {
 //   if (i % 5 === 0) console.log(i);  
//}

// Example - 12

//const login = prompt("Введіть логін");


//if (login === "Адмін") {
  //  const password = prompt("Enter password");
   // if (password === "I'm admin") {
   //     console.log('Hello');
    //} else {
    //    console.log("Wrong password");
    //}
//} else if (login === "" || login === null) {
 //   console.log('Cancelled');
//} else {
 //   console.log('Who are you?');
//}


/*function sortArray(array) {
  // Return a sorted array.
 let oddArray = array.filter((number) => number % 2 !== 0).sort();

/*for (let i = 0; i < array.length; i ++ ) {
 for (let j = 0; j < oddArray.length; j += 1 ) {
  if (array[i] % 2 !== 0) array[i] = oddArray[j];
  
}
}
return array;

for (let i = 0; i < oddArray.length; i += 1 ) {
  array.map((number, index) => {
    if(number % 2 !== 0) array.splice(index, 1, oddArray[i]);
  })
}
return array
}

console.log(sortArray([5, 3, 2, 8, 1, 4])); */

/*function isValidIP(str) {
  if (!str.includes(".") || str.includes(!Number)) return false;
  const strArr = str.replaceAll(".", " ").split(" ");
  
  if (strArr.length !== 4) return false;

  strArr.forEach((num) => {
    if ((num) => !Number.isInteger(num)) return false;
    if ((num) => num < 0 || num > 255) return false;
  });

  return true;
  
}

console.log(isValidIP("abc.def.ghi.jkl"    ));*/


/*function camelCase(str) {
  str.toLowerCase();
const strArr = str.split(" ");
return strArr.map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join("");

}

console.log(camelCase("hello case")); */

// Recursive
/*function sumTo(n) {
 let sum = 0;
  for (let i = 0; i < n + 1; i += 1) {
    
   sum += i;
    
  }
  return sum;
} */

/*function sumTo(n) {

  if (n === 1) {
    return 1;
  } else {
    return n + sumTo(n - 1);
  }

}*/

/*function sumTo(n) {
  return (1 + n) / 2 * n;
}*/


/*function factorial(n) {

  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
} */

/*function fibo(n) {

  if (n <= 1) {
    return n;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
}

//console.log(factorial(1));
//console.log(factorial(2));
console.log(fibo(3));
console.log(fibo(7));
//console.log(fib(77)); */

/*const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

function countSum(array) {
  if (array.length === 0) return sum;


  sum += array[0];
  array.splice(0, 1);
  countSum(array);
  return sum;
  
}

console.log(countSum(arr));*/

/*function findMagic(arr) {
  let i = 0;
  
  
  
  function recursive(arr) {
    if (i === arr.length) {
      return -1;
    } else if (i === arr[i]) {
      return i;
    }

    i += 1;
  }
  recursive(arr);
 // return i;
}

  console.log(findMagic([-20, -10, 2, 10, 20]));*/
  
function reverse(n) {
  // your code here
  console.log(Array.from(n))
}

console.log(reverse(1234));