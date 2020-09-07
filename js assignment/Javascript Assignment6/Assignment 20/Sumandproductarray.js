var arr = [1, 2, 3, 4, 5, 6],
    s = 0,
    p = 1,
    i;
for (i = 0; i < arr.length; i += 1) 
   {
    s += arr[i];
    p *= arr[i];
    }
document.write('Sum : '+s + ' Product :  ' +p); 

