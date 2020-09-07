document.write("<h4>Most frequent item of an array<br>Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]</h4><br>Answer:-<br>")

var arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var most_fre = 1;
var m = 0;
var item;
for (var i=0; i<arr.length; i++)
{
        for (var j=i; j<arr.length; j++)
        {
                if (arr[i] == arr[j])
                 m++;
                if (most_fre<m)
                {
                    most_fre=m; 
                  item = arr[i];
                }
        }
        m=0;
}
document.write(item+" ( " +most_fre +" times ) ") ;