// Basic  JS Checklist

// let myName = 'Asaduzzaman Sohun';
// let year = 2023;
// let happiness = false;

// for(let i = 1; i <= 100; i++){
//     console.log(i);
// } 

// let num = 50;
// while(num <= 80){
//     if(num % 2 !== 0){
//         console.log(num);
//     }
//     num++;
// }

// function threeSum(a, b, c){
//     let total = a+b+c;
//     return total;
// }
// console.log(threeSum(10, 18, 32));


function fahrenheit(celsius){
    let temparature = (celsius * 1.8) + 32;
    return temparature;
}

console.log('Fahrenheit: ', fahrenheit(100).toFixed(2), 'F');


function celsius(fahrenheit){
    let temparature = (fahrenheit - 32) / 1.8;
    return temparature;
}

console.log('Celsius:', celsius(212).toFixed(2), 'C');


function grade(marks){
    let mark = marks;
    if(marks >= 80 && marks <= 100){
        let result = 'Excellent! You got A+';
        return (mark + ': ' + result);
    }

    else if(marks >= 70 && marks <= 79){
        let result = 'Good! You got A';
        return (mark + ': ' + result);
    }

    else if(marks >= 60 && marks <= 69){
        let result = 'You got A-. Do better next time!';
        return (mark + ': ' + result);
    }

    else if(marks >= 50 && marks <= 59){
        let result = 'You got B. Work harder';
        return (mark + ': ' + result);
    }

    else if(marks >= 40 && marks <= 49){
        let result = 'You got C. Very bad';
        return (mark + ': ' + result);
    }

    else{
        return 'Tor abbare loiya ai';
    }
}

console.log(grade(67));


function interest(amount, rate, year){
    let profit = amount * rate * year;
    let total = amount + profit;
    return total;
}

let amount = 10000;
let rate = 7/100;
let year = 2;

console.log(interest(amount, rate, year).toFixed(0));

for(let say = 1; ; say++){
    console.log("Sorry for everything. plzz mann jao 😢");
}