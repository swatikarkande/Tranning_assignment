document.write("<h4>Sum of squares of a numeric vector.<br>Ex-array=[0,1,2,3,4]<br>Answer:<br></h4>")
function sumSquer(array) {
    var sum = 0, 
        i = array.length;
    while (i--) 
     sum += Math.pow(array[i], 2);
    return sum;
  }
   
  document.write(sumSquer([0,1,2,3,4]));