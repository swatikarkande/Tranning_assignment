// for ( var i = 1; i <= 100; i++ )
// {
//   if ( i%3 === 0 && i%5 === 0 )
//   {
//     document.write( i + "<br>"+" FizzBuzz <br>" );
//   }
//   else if ( i%3 === 0 ) 
//   {
//     document.write(i+"<br>"+ " Fizz<br>" );
//   }
//   else if ( i%5 === 0 ) 
//   {
//     document.write(i+ " Buzz<br>" );
//   }
//   else
//   {
//     document.write(i);
//   }
// }
document.write("<h3>6.Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print 'Fizz' instead of the number and for the multiples of five print 'Buzz'. For numbers which are multiples of both three and five print 'FizzBuzz'.</h3>")
for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " FizzBuzz" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Fizz" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " Buzz" );
  }
  else
  {
    console.log(i);
  }
}