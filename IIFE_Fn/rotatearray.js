const rotatearr=(function(arr,k)
{
    let length=arr.length;
    
    let rotateindex=k%length;
    let rotatedarr=[... arr.slice(rotateindex), ... arr.slice(0,rotateindex)]
    
    return rotatedarr
})([1,2,3,4,5])

console.log(rotatearr)
