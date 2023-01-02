// Example - 01

/*function calcBMI({ weight, height }) {
    const numericWeight = Number(weight.replace(",", "."));
    const numericHeight = Number(height.replace(',', "."));
    return Number((numericWeight / numericHeight ** 2).toFixed(1));
}

console.log(calcBMI({
    weight: '88,3',
    height: '1.75',
}),
); */

// Example - 02

/*function printContactsInfo({ names, phones }) {
    const nameList = names.split(',');
    const phoneList = phones.split(',');
    for (let i = 0; i < nameList.length; i += 1) {
        console.log(`${nameList[i]}: ${phoneList[i]}`);
    }
}

console.log(printContactsInfo({
    names: 'Jacob,Willam,Solomon,Artemis',
    phones: '1232423,13454365,1234354,123435',
})); */

// Example - 03

/* function getBotReport({ companyName, bots: { repair, defence }}) {
    return `${companyName} has ${repair + defence} bots in stock`;
}

console.log(getBotReport({
    companyName: 'CS',
    bots: {
        repair: 150,
        defence: 50,
    },
})); */

// Example - 05

/* function createContact(partialContact) {
    return {
        list: 'default',
        ...partialContact,
        id: generatedId(),
        createdAt: Date.now(),
    };
} */

/*const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line
const averageValue = players.map(player => player.playtime / player.gamesPlayed).reduce((aver, value) => aver += value, 0);

console.log(averageValue); */

/*const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]



const getTotalFriendCount = users => {
   /* const friendsList = users.flatMap(user => user.friends);
    console.log(friendsList);
    const sum = friendsList.reduce((total, friend) => total = friendsList.length, 0);
    console.log(sum); */

  /*  return users.flatMap(user => user.friends).reduce((total, friends) => total = friends.length, 0);
}; */

/*console.log(getTotalFriendCount(users)); */

/* function digitalRoot(n) {
    let arr = [];

    for (let i = 0; i <= n.length; i += 1) {
        arr.push(n[i]);
    }

    return arr.reduce((sum, el) => sum += el, 0);
}

console.log(digitalRoot(16)); */

/*function toCamelCase(str) {
  if (str.includes('-')) {
    const strArr = str.replaceAll('-', ' ').split(' ');

    const firstWord = strArr[0];

    const newArr = strArr.filter(word => word !== strArr[0]).map(word => word[0].toUpperCase() + word.substring(1));
    return [firstWord, ...newArr].join('');
  } else {
    const strArr = str.replaceAll('_', ' ').split(' ');

    const firstWord = strArr[0];

    const newArr = strArr.filter(word => word !== strArr[0]).map(word => word[0].toUpperCase() + word.substring(1));
    return [firstWord, ...newArr].join('');
  }

}

console.log(toCamelCase("the_stealth_warrior")) */

/*function calcEquation(a, b) {
  return a ** 2 + 2 * a * b + b ** 2;
}

console.log(calcEquation(5, -5)); */

/*const a = 1;
const b = 1;

function calcEquation(a * x * x + b * x + c) {

  const descr = b * b - 4 * a * c;

  if (descr > 0) {
    
    return {
      x1 = -b + Math.sqrt(descr),
      x2 = -b - Math.sqrt(descr),
    };

  } else if (descr = 0) {

    return {
      x = -b,
    };

  } else {
    
    return 'no solutions available';
  }
} */

/* function calcEquation(a, b, c) {
  
  let solutions = {
    x1: 0,
    x2: 0,
  }

  const descr = Math.pow(b, 2) - 4 * a * c;

 if (descr < 0) {

    return 'no solutions available';

} else if (descr >= 0 && a !== 0) {
    
    solutions.x1 = (-b + Math.sqrt(descr)) / (2 * a);
    solutions.x2 = (-b - Math.sqrt(descr)) / (2 * a);

    if (solutions.x1 === solutions.x2) delete solutions.x2;

} else if ( b !== 0 ) {
    
  solutions.x1 = c / b;
  delete solutions.x2;
    
    if (solutions.x1 !== 0) solutions.x1 *= -1;
    if (c === 0) solutions.x1 = 0;

} else {
   return 'error';
}

return solutions;
}


 let solutions = {
    x1: 0,
    x2: 0,
  } */

   
 

/*function calcEquation(a, b, c, quadratic, linear) {

 let solutions = {
  x1: 0,
  x2: 0,
  }

  if (a !== 0) {

   return quadratic(a, b, c, solutions);

  } else if (b !== 0) {

    return linear(b, c, solutions);
  
  } else {
    return 'error';
  }
}

function calcQuadratic (a, b, c, solutions) {
  const descr = Math.pow(b, 2) - 4 * a * c;

  if (descr < 0) {
    return `no solutions available`;
  }
    else if (descr >= 0) {

      solutions.x1 = (-b + Math.sqrt(descr)) / (2 * a);
      solutions.x2 = (-b - Math.sqrt(descr)) / (2 * a);

    if (solutions.x1 === solutions.x2) delete solutions.x2;
    return solutions;
    }
}

function calcLinear(b, c, solutions) {
  solutions.x1 = c / b;
  delete solutions.x2;
    
    if (solutions.x1 !== 0) solutions.x1 *= -1;
    if (c === 0) solutions.x1 = 0;
  return solutions.x1;
}

console.log(calcEquation(0, 1, -2, calcQuadratic, calcLinear)); */
