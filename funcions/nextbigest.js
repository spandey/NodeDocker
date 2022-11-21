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