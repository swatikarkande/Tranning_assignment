document.write("<h3>Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array</h3> <br>")
document.write("Answer:-<br>");
var last =  function(array, n) {
    if (array == null) 
      return void 0;
    if (n == null) 
       return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));  
    };
  
  document.write(last([7, 9, 0, -2])+"<br>");
 document.write(last([7, 9, 0, -2],3));
