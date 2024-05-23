const palindrome=(function(str)
{
    str2=str.split('').reverse().join('');
    
    if(str==str2)
        {
            return "palindrome"
        }
    else
    {
        return "not palindrome"

    }
})('indu')

console.log(palindrome);