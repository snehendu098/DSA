// String anagram -> If we have two strings with same number of letters and characters, then it forms an anagram.

// Input : "hello" -> "llheo"

// conditions
// check the length of both the strings.
// String "hello"
// {h: 1, e: 1, l: 2, o: 2}
// we wi;; decrement the number of letters whil;e checking the second string

function isAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  var counter = {};

  for (let letter of string1) {
    counter[letter] = (counter[letter] || 0) + 1; // counter["h"] = 1 (for the first time)
    // console.log(counter[letter]);
  }

  for (let items of string2) {
    if (!counter[items]) {
      console.log(items);
      return false;
    }
    counter[items] -= 1;
  }
  //   console.log(counter);
  return true;
}

console.log(isAnagram("hello", "llheo"));
