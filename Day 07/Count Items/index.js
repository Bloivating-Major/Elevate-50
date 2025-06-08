// Count Items Matching a Rule
// Time Complexity: O(n)
// Space Complexity: O(1)

function countMatches(items, ruleKey, ruleValue) {
    // Map ruleKey to index
    const keyIndex = {
        "type": 0,
        "color": 1,
        "name": 2
    };
    
    let count = 0;
    const index = keyIndex[ruleKey];
    
    for(let item of items) {
        if(item[index] === ruleValue) {
            count++;
        }
    }
    
    return count;
}

// Test cases
let test1 = {
    items: [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]],
    ruleKey: "color",
    ruleValue: "silver"
};

let test2 = {
    items: [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]],
    ruleKey: "type",
    ruleValue: "phone"
};

console.log(countMatches(test1.items, test1.ruleKey, test1.ruleValue)); // 1
console.log(countMatches(test2.items, test2.ruleKey, test2.ruleValue)); // 2