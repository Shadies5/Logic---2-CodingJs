//Given 3 int values, a b c, return their sum. However, if any of the values is a teen -- in the range 13..19 inclusive -- then that value counts as 0, except 15 and 16 do not count as a teens. Write a separate helper "public int fixTeen(int n) {"that takes in an int value and returns that value fixed for the teen rule. In this way, you avoid repeating the teen code 3 times (i.e. "decomposition"). Define the helper below and at the same indent level as the main noTeenSum().
// Examples
// noTeenSum(1, 2, 3) → 6
// noTeenSum(2, 13, 1) → 3
// noTeenSum(2, 1, 14) → 3

//solve:
function noTeenSum(a, b, c) {
  const input = [a, b, c];
  const findTeens = (numb, bet) => {
    if (
      bet === 13 ||
      bet === 14 ||
      bet === 17 ||
      bet === 18 ||
      bet === 19
    ) {
      return numb;
    }
    return numb + bet;
  };
  return input.reduce(findTeens, 0);

}
console.log(noTeenSum(1, 2, 3));
console.log(noTeenSum(2, 13, 1));
console.log(noTeenSum(2, 15, 1));