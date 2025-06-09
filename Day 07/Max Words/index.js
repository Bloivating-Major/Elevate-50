// Maximum Number of Words Found in Sentences
// Time Complexity: O(n*m) where m is average sentence length
// Space Complexity: O(1)

function mostWordsFound(sentences) {
    let maxWords = 0;
    
    for(let sentence of sentences) {
        const wordCount = sentence.split(' ').length;
        maxWords = Math.max(maxWords, wordCount);
    }
    
    return maxWords;
}

// Test cases
let test1 = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
let test2 = ["please wait", "continue to fight", "continue to win"];
let test3 = ["hi", "hello world", "welcome to coding"];

console.log(mostWordsFound(test1)); // 6
console.log(mostWordsFound(test2)); // 3
console.log(mostWordsFound(test3)); // 3