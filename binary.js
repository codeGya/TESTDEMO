let array=[1,0,-9,4,5,3,2,1]
for(let i=1;i<array.length;i=i+1){
    for(let j=i-1;j>=0;j=j-1){
        if(array[j+1]<array[j]){
            let temp=array[j]
            array[j]=array[j+1]
            array[j+1]=temp

        }
    }
}
