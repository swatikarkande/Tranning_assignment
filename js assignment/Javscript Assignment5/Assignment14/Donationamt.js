function donate()
{
  if(document.getElementById("donation").value != "Enter donation amout")
  {
	if(isNaN(document.getElementById("donation").value)){
	  document.getElementById("nan").innerHTML = "Wrong input: Please enter only Nunmber!";
	  document.getElementById("nan").style.display = "block";
	}
	else
	{
	  document.getElementById("nan").style.display = "none";
	  var amnt = Math.round(document.getElementById("donation").value);
	  alert("Donation amount: " + amnt);
	}
  }
}
function donateCause()
{
  document.getElementById("donation1").style.display = 'block';
  document.getElementById("dc").style.display = 'none';
}
function cancel()
{
	document.getElementById("dc").style.display = "block";
	document.getElementById("donation1").style.display = "none";
	document.getElementById("nan").style.display = "none";
}