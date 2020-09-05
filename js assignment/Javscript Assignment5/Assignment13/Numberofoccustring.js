// <p style="font-size:20px">Number of occurrences in this string "hello world": </p>

var str = "";
function Char_Counts() {
	Object.size = function(obj) {
		var size = 0;
		for(key in obj) {
			if(obj.hasOwnProperty(key)) size++;
		}
		return size;
	}
	var str = 'hello world';
	var letters = new Object;
	for(x = 0, length = str.length; x < length; x++) {
		var l = str.charAt(x)
        letters[l] = (isNaN(letters[l]) ? 1 : letters[l] + 1);
        // console.log(letters)
	}
	for(key in letters) {
        document.write(key+'::'+letters[key]+"<br>");
	}
}
Char_Counts();