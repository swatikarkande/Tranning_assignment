document.write("<p>16.Store 10 employee names in an array. Print only the alternative names one below the other.Ex-abc , def , ghi , jkl , mno , pgr , stu , vdx , yza , qwe</p>")
document.write("<br><h4>Answer:</h4><br>")
var emp = ["abc","def","ghi","jkl","mno","pqr","stu","vdx","yza","qwe"];
for(i=0;i<emp.length;i+=2)
{
  document.write(emp[i]+"<br>");
}