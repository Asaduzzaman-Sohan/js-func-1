// -------------------------------> Problem 1 <---------------------------------//
// This function is designed for input a number than follow all the instruction coded in the fuction. 1. multiply the input with 3, then add 10, the divid by 2 and substract 5 from the value. Then return the final output

function mindGame(input){
    let number = input;

    if(isNaN(number)){
        return "Input should be a number";
    }
    
    else{
        number = number*3;
        number = number+10;
        number = number/2;
        number = number-5;
        return number;
    }
}
let gameResult = mindGame(5);
console.log(mindGame(gameResult));




// -------------------------------> Problem 2 <---------------------------------//
// This function is designed for input an string and then check the length of given string. Then return the final output. The output will be even or odd according to their string length.

function evenOdd(string){
    if(string.length % 2 == 0 && typeof string === 'string' ){
        return 'even';
    }
    else if(string.length % 2 != 0 && typeof string === 'string'){
        return 'odd';
    }
    else{
        return "Input should be string";
    }
}

console.log(evenOdd('Batch7'));






// -------------------------------> Problem 3 <---------------------------------//
// This function is designed for input a number than follow all the instruction coded in the fuction. 1.substract 7 from the input. then if the difference is greater than 7 the the input will multiply by 2. Or the difference is less than 7 then it will that.

function isLGSeven(input){
    const difference = input - 7;
    if (difference >= 7 && !isNaN(true)){
        return input*2;
    }
    else if (difference < 7 && !isNaN(true)){
        return difference;
    }
    else{
        return "Input should be a number";
    }
}

console.log(isLGSeven(21));





// -------------------------------> Problem 4 <---------------------------------//
// This function is designed for input an array than follow all the instruction coded in the fuction. 1 separate all data from the given array. then it will push all the negative data into another array. positive & nagetive data will refer as Good Data and Bad Data respectively.  Then return the array length as the output.

function findingBadData(data){

    let negative = [];
    for(let i = 0; i < data.length; i++){
        let store = data[i];
        
        if(data[i] < 0 && !isNaN(store) && Array.isArray(data)){
            negative.push(data[i]);
            // Here we get Bad Data
            // console.log("Bad Data");
        }

        else if(data[i] >= 0 && !isNaN(store) && Array.isArray(data)){
            // Here we get Good Data
            // console.log("Good Data");
        }

        else{
            return "Input must be an array & all the data have to be numeric.";
            
        }
    }
    return negative.length;
}

let dataList = [-4, -9, -5, -33, -55];
console.log(findingBadData(dataList));





// -------------------------------> Problem 5 <---------------------------------//
// This function is designed for input three params than follow all the instruction coded in the fuction. 1. three params will multiply by 21, 32, 43 respectively. 2. add all. 3. total value is equal or more tha 2000 then substract 2000. otherwise return the actual value.

function gemsToDiamond(gems1, gems2, gems3){
    let gemsPower1 = gems1 * 21;
    let gemsPower2 = gems2 * 32;
    let gemsPower3 = gems3 * 43;

    let totalGems = gemsPower1 + gemsPower2 + gemsPower3;

    if(totalGems >= 1000*2 && !isNaN(true)){
        totalGems = totalGems - 2000;
    }

    else if(totalGems <= 1000*2){
        totalGems = totalGems;
    }

    else{
        return "Gems numbers are invalid!";
    }

    return totalGems;
}

console.log(gemsToDiamond(12, 34, 5));
