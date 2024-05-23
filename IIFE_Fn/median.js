let arr1=[1,3,90,6,8]
let arr2=[2,4,80,10,12]
const median=(function(arr1,arr2)
{
    mergedarr=[...arr1,...arr2].sort((a,b)=> a-b);
    medianofarr= (mergedarr.length%2==0)? (mergedarr[mergedarr.length/2-1]+mergedarr[mergedarr.length/2])/2 : mergedarr[Math.floor(mergedarr.length/2)];
    return medianofarr
})(arr1,arr2)


console.log(median)