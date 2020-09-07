var first =  function(array, n) {
    if (array == null) 
    return void 0;
  if (n == null) 
    return array[0];
  if (n < 0)
    return [];
  return array.slice(0, n);
};

document.write(first([7, 9, 0, -2])+"<br>");
// document.write(first([],3));
document.write(first([7, 9, 0, -2],3));
