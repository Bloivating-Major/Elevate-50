// 2 Approaches

// Approach 1: Using While Loop
var isSubsequence = function(s, t) {
    // TC : O(n) SC : O(1)
  let sequenceIndex = 0;

    // we will iterate our main array and check if our subsequence is valid or not
    for(let i = 0; i < t.length; i++){
        if(sequenceIndex === s.length) return true;
        if(s[sequenceIndex] === t[i]) sequenceIndex++;
    }

    // finally if valid it will return true else false
  return sequenceIndex === s.length;

};

// Approach 2: Using For Loop
var isSubsequence = function(s, t) {
    // TC : O(n) SC : O(1)
  let sequenceIndex = 0;

    // we will iterate our main array and check if our subsequence is valid or not
    for(let i = 0; i < t.length; i++){
        if(sequenceIndex === s.length) return true;
        if(s[sequenceIndex] === t[i]) sequenceIndex++;
    }

    // finally if valid it will return true else false
  return sequenceIndex === s.length;

};