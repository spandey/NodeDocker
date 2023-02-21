function nextBiggest(arr) {
    let max = -Infinity;
    let secondmax = Infinity
    for(const value of arr){
        const num = Number(value);
        if(num > max){
         secondmax = max;
         max = num;
        }
        else if(num < max && num > secondmax){
            secondmax = num;
        }
    }
    return secondmax;
  }
  
  const arr = ['20','120','111','215','54','78'];
  console.log(nextBiggest(arr));
  const arr1 = [3,6,2,9,5,1,7]
function sortarrysecnadthr (arr) {
    
    let max = 0;

    let secondmax = 0 ;
    let thirdmax = 0;
    
    for(let i = 0 ; i < arr.length; i++){
        if(max < arr[i]){
         thirdmax = secondmax;
         secondmax = max;
         max = arr[i]
        }
        else if (max > arr[i] && secondmax < max ) {
                  if(secondmax < arr[i] )  {
                      thirdmax = secondmax; 
                      secondmax = arr[i];
                  } else if( arr[i] < secondmax && arr[i] > thirdmax){
                        thirdmax = arr[i];
                    }
               }
                  
        
     
    }
     console.log(thirdmax, secondmax)
}

 sortarrysecnadthr (arr)