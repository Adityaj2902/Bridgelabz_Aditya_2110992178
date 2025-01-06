2) Group Anagrams(Done)
Given a list of strings, group anagrams together.


var groupAnagrams = function(strs) {
    let map = new Map();

    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');
        
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        
        map.get(sortedStr).push(str);
    }

    return Array.from(map.values());
};
