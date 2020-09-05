
    var a = 0, b = 1,sum=1,n=100;
       for (let i = 1; i <= n; i++)
    {
        document.write(a+"<br>");
        var sum = a + b;
        a = b;
        b = sum;
       
    }
