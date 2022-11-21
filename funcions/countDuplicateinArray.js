let str = "big black shambhu bug bit a big black shambhu dog on his big black nose";
let strArray = str.split(" ");
let arr = [1,1,1,3,4,5,5,4,3,2,5,6,7,8];

function countDuplicate(arr){
    let wordcount = {};
    for(let value of arr) {
        if(wordcount[value]){
            wordcount[value]++
        }
        else {
            wordcount[value] = 1;
        }
    }

    console.log(wordcount)

}

//countDuplicate(arr);
//countDuplicate(strArray)

// otherway(strArray)
function countRepeatedWords(words) {
    //let words = sentence.split(" ");
    let wordMap = {};
  
    for (let i = 0; i < words.length; i++) {
      let currentWordCount = wordMap[words[i]];
      let count = currentWordCount ? currentWordCount : 0;
      wordMap[words[i]] = count + 1;
    }
    return wordMap;
  }
  //console.log(countRepeatedWords(strArray))

  function test(str){
    console.log(str)
    const newStr = str.reduce((acc,rec) => {

        return ({ ...acc, [rec]: (acc[rec] || 0) + 1 })
      },{})
      console.log(newStr);
  }
  test(strArray)

