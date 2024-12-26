let item = 'engine';

if (item != 'engine') {
    console.log('not engine!')
}
else {
    console.log('engine');
}


let score = 9;

if (score >= 50) {
    console.log('pas');
}

else if (score >= 10) {
    console.log('not pass');
}

else {
    console.log('meet the teacher!')
}


let isEngine = item == 'engine';
console.log(isEngine)


//challenge
let balance = 100;
let itemPrice = 10;

// 1.check balance

if (balance >= itemPrice) {
    console.log('you have!');
    balance -= itemPrice;
    console.log('balance:' + balance);
}
else {
    console.log('you have not');
}