/**
 * use validation validationForm() function
 */
function validationForm() {
    var firstInputValue = document.form1.firstInputValue.value;
    var secondInputValue = document.form1.secondInputValue.value;

    var numbers = /^[0-9]+$/;
    if (firstInputValue == null || firstInputValue == "") {
        alert("Enter any first number");
        return false;
    }
    else if (!/^[0-9]+$/.test(firstInputValue)) {
        alert("Please only enter numeric");
        return false;
    }
    else if (secondInputValue == null || secondInputValue == "") {
        alert("Enter any second number");
        return false;
    }
    else if (!/^[0-9]+$/.test(secondInputValue)) {
        alert("Please only enter numeric");
        return false;
    }
}

/**
 *  sum of two number 
 */
function additionNumber() {
    var x = document.form1.firstInputValue.value;
    var y = document.form1.secondInputValue.value;
    validationForm();
    var sum;
    sum = Number(x) + Number(y);
    if (isNaN(sum)) {
        return 0;
    }
    return document.getElementById('result').value = sum;
}

/**
*  substarction  of two number 
*/
function substractionNumber() {
    var x = document.form1.firstInputValue.value;
    var y = document.form1.secondInputValue.value;
    validationForm();
    var substarction = 0;
    substarction = Number(x) - Number(y);
    if (isNaN(substarction)) {
        return 0;
    }
    return document.getElementById('result').value = substarction;
}

/**
*  multiplication of two number 
*/
function multiplicationNumber() {
    var x = document.form1.firstInputValue.value;
    var y = document.form1.secondInputValue.value;
    validationForm();
    var multiplication = 0;
    multiplication = Number(x) * Number(y);
    if (isNaN(multiplication)) {
        return 0;
    }
    return document.getElementById('result').value = multiplication;
}

/**
*  divide of two number 
*/
function divideNumber() {
    var x = document.form1.firstInputValue.value;
    var y = document.form1.secondInputValue.value;
    validationForm();
    var divideNumber = 0;
    divideNumber = Number(x) / Number(y);
    if (isNaN(divideNumber)) {
        return 0;
    }
    return document.getElementById('result').value = divideNumber;
}

