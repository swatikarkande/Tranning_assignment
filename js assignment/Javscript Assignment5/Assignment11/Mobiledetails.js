// var mb = {};
// function insertVal(){
//     mb['Name'] = document.getElementById("mbn").value;
// 	mb['Brand'] = document.getElementById("mbb").value;
// 	mb['Price'] = document.getElementById("mbpr").value;
// 	if(isNaN(mb.Price))
// 	{
// 		alert("Please provide valid price!");
// 		document.getElementById("display").style.display = "none";
// 		return;
// 	}
// 	displayAllDetails();
//   }
//   function displayAllDetails()
//   {
// 	document.getElementById("mbname").innerHTML += mb.Name;
// 	document.getElementById("mbbrand").innerHTML += mb.Brand;
	
// 	var price = parseInt(mb.Price);
// 	price += ((price+10)/100);
// 	price -= ((price+3)/100);
	
// 	document.getElementById("mbprice").innerHTML += price;
// 	document.getElementById("display").style.display = "inline-block";
// }