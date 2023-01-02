// Example - 01

/* const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const keys = Object.keys(user);
const values = Object.values(user);

for (let i = 0; i < keys.length; i += 1) {
        console.log(`${keys[i]}: ${values[i]}`);
} */

// Example - 02

/*const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let sum = 0; */

/*const values = Object.values(salaries);
console.log(values);
let sum = 0;

for (const value of values) {
    sum += value;
}

console.log(sum); */

/*function countSum(salaries) {

    const values = Object.values(salaries);

    for (const value of values) {
        sum += value;
    }

    return sum;
}

console.log(sum); */

// Example - 03

/*const stones = [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Brilliant', price: 2700, quantity: 3 },
    { name: 'Saphire', price: 400, quantity: 7 },
    { name: 'Breccia', price: 200, quantity: 2 },
];

let totalPrice = 0;

function calcTotalPrice(stones, stoneName) {
    
    for (const stone of stones) {
        if (stoneName === stone.name) {
            totalPrice += stone.price * stone.quantity;
        }
    }
    return totalPrice;
}

calcTotalPrice(stones, 'Emerald');
console.log(totalPrice);*/

// Example - 04

/*const transactionTypes = {
    deposit: 'deposit',
    withdraw: 'withdraw',
};

const account = {
    balance: 0,
    transactions: [],

    getBalance() {
        return this.balance;
    },

    deposit(amount) {
        this.balance += amount;
        const transaction = this.createTransaction(amount, transactionTypes.deposit);
        this.transactions.push(transaction);
    },

    withdraw(amount) {
        if (amount > this.balance) {
            return 'not enough money';
        }

        this.balance -= amount;
        const transaction = this.createTransaction(amount, transaction.withdraw);
        this.transactions.push(transaction);
    },

    createTransaction(amount, type) {
        return {
            id: this.transactions.length,
            type,
            amount,
        };
    },


    getTransactionDetails(id) {

        for (const operation of this.transactions) {
            if (id === operation.id) {
                return operation;
            }
    }
    },

    getTransactionTotal(type) {
        let sum = 0;
        for (const operation of this.transactions) {
            if (type === operation.type) {
                sum += operation.amount;
            }
        }

        return sum;
    }

};


//createTransaction(200, 'deposit');
console.log(account.getBalance());
console.log(account.createTransaction(200, 'deposit'));

account.deposit(400);
account.deposit(200);
console.log(account.transactions);
console.log(account.getBalance());

console.log(account.getTransactionDetails(1));
 */
