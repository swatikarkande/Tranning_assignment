document.write(".Write a JavaScript function to check whether an `input` is an array or not<br> EX-isarry=[1, 2, 4, 0] <br>");
var isarry = function(input) {
    if( Array.isArray(input))
    return true;``
    return false;
  }
//   document.write(isarry('w3resource'));
  document.write("Answer:-"+isarry([1, 2, 4, 0]));