// Paul Cipher
// Published by Mubashir Hassan in
//  
// In Paul Cipher, only alpha characters will be encoded with the
// following rules:
// All alpha characters will be treated as uppercase letters.
// The first alpha character will not change(except for
// switching to upper case).

// All subsequent alpha characters will be shifted toward "Z"
// by the alphabetical position of the previous alpha
// character(wrap back to "A" if "Z" is passed).
// he1lo would be encoded as follows:
// Given a string txt, return the encoded message.See the below
// examples for a better understanding:

//   Examples
// paulCipher("muBas41r") ➞ "MHWCT41K"
// paulCipher("a1rForce") ➞ "A1SXUGUH"
// paulCipher("MATT") ➞ "MNUN"

function paulCipher(string) {
  if (typeof string !== 'string') return null

  let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    lastCharPlace,
    cypher = '',
    stringArray = string.toUpperCase().split('')
    
  for (let i = 0; i < stringArray.length; i++) {
    //if letter is number, add to cypher
    if (Number(stringArray[i]) || Number(stringArray[i]) === 0) {
      cypher += stringArray[i];
      continue;
    }

    //if letter is first in string
    if (i === 0) {
      //change the lastCharPlace to be added to further letters
      lastCharPlace = alpha.indexOf(stringArray[i]) + 1
      //add letter to cypher
      cypher += stringArray[i]
    }
    //if letter isn't first letter
    else {
      //check that modified letter placement is less then 26
      alpha.indexOf(stringArray[i]) + lastCharPlace <= alpha.length - 1
        //if so, add letter to cypher with modification due to previous letter
        ? cypher += alpha[alpha.indexOf(stringArray[i]) + lastCharPlace]
        //else, add letter minus 26
        : cypher += alpha[(alpha.indexOf(stringArray[i]) + lastCharPlace) - 26]
      //set new letter modification
      lastCharPlace = alpha.indexOf(stringArray[i]) + 1

    }

  }
  return cypher
}

console.log(paulCipher("muBas41r"))
// paulCipher("muBas41r") ➞ "MHWCT41K"
console.log(paulCipher("a1rForce"))
// paulCipher("a1rForce") ➞ "A1SXUGUH"
console.log(paulCipher("MATT"))
// paulCipher("MATT") ➞ "MNUN"
console.log(paulCipher("000"))
// paulCipher("S1tHL0rd") ➞ "S1MBTLRV"