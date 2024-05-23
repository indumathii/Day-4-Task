const palindrome=str=>
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
}

console.log(palindrome('indu'));