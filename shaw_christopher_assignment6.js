/*
Chris Shaw
Javascript Assignment 6
12/3/19
*/

//test variable
var s = 'azcbobobegghakl';
//counter for problem 1
var countVowels = 0;
//counter for problem 2
var couuntOccurences = 0;

//loop to jump through all letters in test string and test for specified vowels
for(var i = 0;  i < s.length; i++) {
    if(s.charAt(i) === 'a'||s.charAt(i) === 'e'||s.charAt(i) === 'i'||s.charAt(i) === 'o'||s.charAt(i) === 'u'){
        //increments when a vowel is found
        countVowels++;
    }
}
//prints test
console.log('Your total vowels were ' + countVowels);

//loop to test for a specific test phrase in string
for(var i = 0;  i < s.length; i++) {
    //test for the index and the next 2 indexes to search for bob
    if(s.charAt(i) === 'b'&&s.charAt(i+1) === 'o' && s.charAt(i+2) === 'b'){
        //increments the counter when bob is found
        couuntOccurences++;
    }
}
//prints test
console.log('bob appeared ' + couuntOccurences + ' times.');
