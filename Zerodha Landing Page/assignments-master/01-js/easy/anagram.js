/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    str1 = str1.replace(/\s+/g,'').toLowerCase();
    str2 = str2.replace(/\s+/g,'').toLowerCase();

    if(str1.length !== str2.length) return false;

    const createMap = (s) => {
      mp = {}
      for(const char of s){
        mp[char] = (mp[char] || 0) + 1;
      }
      return mp;
    }

    mp1 = createMap(str1);
    mp2 = createMap(str2);

    for(const char in mp1){
      if(mp1[char] !== mp2[char]){
        return false;
      }
    }
    return true;

}

module.exports = isAnagram;
