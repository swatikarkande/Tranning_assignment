var newList = function()
{
  let a = ['a','b','c'];
  let b = [1, 2, 3];
  
  let l = a.length+b.length;
  let r = [];
  let j=0,k=0;
  for(let i=0; i<l;i++) {
    if(i%2==0) {
      r[i]=a[j++];
    } else {
      r[i]=b[k++];
    }
  }
  console.log(r);
  return r;
  
}
document.write("<h2>10.Given lists [a, b, c] and [1, 2, 3], the function should return [a, 1, b, 2, c, 3].</h2>");
document.write('Answer :['+newList()+']')
