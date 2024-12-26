let distance = 250;
let fuel = 100;
let distanceCondition = distance <= 200 && distance >= 100;
let condition = fuel >= 25 && distance < 100;
let isEngineFunctioning = false;

if (!isEngineFunctioning || distance>200) {
    console.log('failed engine')
}

else if (distanceCondition && fuel >= 100) {
    console.log('you will make it');
}

//Challenge
else if (condition) {
    console.log('succes');
}

else {
    console.log('failed');
}