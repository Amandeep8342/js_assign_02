let array=[]
Add(array)

function Add(array){
    array.push(5,10,15)
    console.log("Before Addition the values are",array)  
    for(let i=0;i<array.length;i++)
    {
        
        array[i]=array[i]+2 // it will add every element with 2
    }
    console.log("Values of array after Addition of every number with 2",array)
}