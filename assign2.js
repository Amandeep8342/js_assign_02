let array=[]
loop_func(array)
function loop_func(array)
{
    array.push(1,'dog','one')
     for(let i=0;i<array.length;i++)
     {
         console.log("The Index Value"+i+":"+array[i])
     }
    console.log("The Final Array is",array)
    
}