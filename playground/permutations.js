function getPermutations(string) {

  // Generate all permutations of the input string
  if (string.length === 0) {
    return new Set([string])
  }

  const charsRest = string.slice(0, -1)
  const lastChar = string[string.length - 1]

  const permutations1 = getPermutations(charsRest)

  const permutations = new Set();

  permutations1.forEach(permutation1 => {
    for (let p = 0; p <= charsRest.length; p++) {
      const permutation = permutation1.slice(0, p) + lastChar + permutation1.slice(p);
      permutations.add(permutation)
    }
  });

  return permutations;
}
