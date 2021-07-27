class word {
   static stringLength = (word) => {
    if (word.length < 1 || word.length > 10){
      throw '1:10 chars';
    }
    return word.length
  } 
   static reverseWord = (word) => word.split("").reverse().join('')
   static capitalizeFirst = (word) => word.charAt(0).toUpperCase()+ word.slice(1)
}


console.log(word.capitalizeFirst('hello'));
// export {stringLength, reverseWord  }
module.exports = word;

