
// Function to return the prime numbers 
		// to display function 
		function prime(num) 
		{
			var j;
			var flag=0;
			for(j=2;j<num;j++)
			{
				if(num%j==0)
					flag=1;
			}
			if(num==1)
				return 0;
			if(flag==1)
				return 0;
			if(flag==0)
				return num;
		}
		// Function to write the prime numbers to array 
		function display()
		{
			var i;
			var arr = [];
			for(i=1;i<dd.value;i++)
			{
				if(prime(i))
					arr[arr.length] = " "+i+" ";
			}
			document.getElementById("demo").innerHTML = arr;
		}
























//function primeNumber() {
  //  var primenum = document.getElementById('val').value;
    // console.log(primenum);
    //for (var counter = 0; counter <= primenum; counter++) {

//        var notPrime = false;
  //      for (var i = 2; i <= counter; i++) {
    //        if (counter % i === 0 && i !== counter) {
      //          notPrime = true;
        //    }
      //  }
        //if (notPrime === false) {
          //  console.log(counter);
            //document.write(counter);
       // }
   // }
// }













