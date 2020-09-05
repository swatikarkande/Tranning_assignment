




var numbers = [1,2,3,4,5,6,7,8,9];
var sum = 100;
var signs = ['+', '-', '&'];
var numbersInnerLength = numbers.length-1;
var cLength = Math.pow(signs.length, numbersInnerLength);
var combinations = [];
 
for (var i = 0; i < cLength; i++) {
    var newArray = [];
    for (var j = 0; j < numbers.length; j++) {
        newArray[j*2] = numbers[j];
    }
    combinations.push(newArray);
    //  
}
 
for (var k = 0; k < numbersInnerLength; k++) {
    var periodLength = cLength / Math.pow(signs.length, k+1);
    var signIndex = 0;
    for (var i = 0; i < cLength; i+=periodLength) {
        for (var j = 0; j < periodLength && i+j < cLength; j++) {
            combinations[i+j][k*2+1] = signs[signIndex];
        }
        signIndex = (signIndex+1)%signs.length;
    }
}
 
for (var i = 0; i < combinations.length; i++) {
    var combination = combinations[i];
    var cstr = combination.join("").replace(/&/g, "");
    if (eval(cstr) == sum) {
        document.write(cstr+"<br>");
        // document.getElementById("demo").innerHTML += cstr;
        // document.getElementById("demo").innerHTML += "<br>";
    }
}























// var numbers = [1,2,3,4,5,6,7,8,9];
// var target = 100;
// var combinations = Math.pow(3,numbers.length-1);

// var solutions = [];
// // o stands for operands
// var o = { 0 : "", 1 : "-", 2 : "+" };
// var i;

// for(i = 0; i <= combinations; i++)
// {
//     var tmp = i.toString(3);    // translates the index in base 3

//     var p = ("00000000" + tmp).substr(-8,8).split("").map(function(v){ return parseInt(v) });

//     var val = "1"+o[p[0]]+"2"+o[p[1]]+"3"+o[p[2]]+"4"+o[p[3]]+"5"+o[p[4]]+"6"+o[p[5]]+"7"+o[p[6]]+"8"+o[p[7]]+"9";

// 	if(eval(val) === 100)
// 	{
//         solutions.push(val);
//         document.write(solutions+"<br>");
//     }
   
// }
