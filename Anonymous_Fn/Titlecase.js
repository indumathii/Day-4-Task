const titlecase=function(str1)
{
    let str2=(str1.toLowerCase()).split(' ');
    let str3=[]
    let str4=[]
    
    for( let i in str2)
        {
            str3[i]=str2[i].charAt(0).toUpperCase()+str2[i].slice(1)
            str4=str3.join(' ')
        }
    return str4;
        
}

let str1='MaKE hay while THE sunShine';
console.log(titlecase(str1));