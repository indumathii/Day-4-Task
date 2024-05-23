const odd=arr=>
{
    let arr2=[];
    let j=0;
    for(let i in arr)
        {
            if(arr[i]%2!=0)
                {
                arr2[j]=arr[i];
                j+=1;
                }
                
        }
    return arr2;
}

let array1=[1,4,6,7,9,10,11];
const arrays=odd(array1)
console.log(arrays);