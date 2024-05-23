const isprime=function(num)
{
    for(let i=2; i<num;i++)
        {
                if(num%i==0)
                    {
                     return false;
                 
                    }

   }
        return true;
}

const primenumbers=(function(numbers)
{
    const primes=[];
    for(let i in numbers)
        {
            if(isprime(numbers[i]))
                {
                    primes.push(numbers[i]);
                }
       }
       return primes
})([10,30,4,20,9,12,17,13,1])


console.log(primenumbers);
