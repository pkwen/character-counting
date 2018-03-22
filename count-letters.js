function countLetters(str) {
  var count = {};
  str.toLowerCase().split(" ").join("").split("").forEach(function(char) {
    if(count[char] !== undefined) {
      count[char]++;
    }else {
      count[char] = 1;
    }
  });
  return count;
}

console.log(countLetters("I wish there would be quality pizza at the JS meet."));