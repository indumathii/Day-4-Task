const numbers=[10,30,4,20,9,12,17,13,1];
const isprime=num=>
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

const primenumbers=numbers.filter(num=>isprime(num));


console.log(primenumbers);
