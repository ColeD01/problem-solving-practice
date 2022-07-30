// largest number function
var numArr = [3, 5, 2, 8, 1, 11]

function largest(arr) {
    let indexOfMax = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > arr[indexOfMax]) {
            indexOfMax = i;
        }
    }
    return arr[indexOfMax];
}
console.log(largest(numArr))

var randoArr = ["#3", "$$$", "C%4", "hey!", "!", "#%7"]

function word(arr, char) {
    var wordArr = []
    for(i = 0;i < arr.length; i++) {
        if (arr[i].indexOf(char)>= 0) {
           wordArr.push(arr[i]) 
        }        
    }
    return wordArr
}
console.log(word(randoArr, "!"))
// divisble by function

function divisibleFunc(num1, num2) {
    num1 = num1
    num2 = num2
    if (num1 % num2 === 0) {
        return true
    } else {
        return false
    }
}
console.log(divisibleFunc(4, 2))