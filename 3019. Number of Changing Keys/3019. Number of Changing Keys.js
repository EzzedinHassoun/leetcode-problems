var countKeyChanges = function(s) {
  let count = 0;

  for (let i = 0; i < s.length - 1; i++) {
    
    if (s[i] === s[i + 1].toUpperCase() || s[i] === s[i + 1].toLowerCase())
      continue;
    count++;
  }

  return count;
};