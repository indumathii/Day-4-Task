const sumofarray=(function(arr)
{
        let sum=0;
   for(let i in arr) 
    {
        sum=sum+arr[i];
    }
    return sum;
})([50,30,20,10,60])


console.log("sum=",sumofarray);