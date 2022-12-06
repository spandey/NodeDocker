// A prime number is a positive integer that is only divisible by 1 and itself. For example, 2, 3, 5, 7, 11 are the first few prime numbers. 

function primeNumbers(fromNum, toNum){
   // console.log(fromNum, toNum)
    // 2 loop with check % 
    for(let i = fromNum; i <= toNum ;i++){
        let isprime = true;
        for(let j = 2; j < i; j++){ // stated second loop by 2 because every no can diveded by 1 so result would be wrong
            if(i%j === 0){
                isprime = false
                break;
            }
           
        }
        if (isprime) {

            console.log(i);
        }
    }
}
primeNumbers(1, 20)