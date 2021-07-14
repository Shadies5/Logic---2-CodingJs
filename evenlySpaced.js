// Given three ints, a b c, one of them is small, one is medium and one is large. Return true if the three values are evenly spaced, so the difference between small and medium is the same as the difference between medium and large.

// Examples
// evenlySpaced(2, 4, 6) → true
// evenlySpaced(4, 6, 2) → true
// evenlySpaced(4, 6, 3) → false

function evenlySpaced(a, b, c) {
  let large = 0;
  let medium = 0;
  let small = 0;

  if (a > b && b > c) {
    large = a;
    medium = b;
    small = c;
  } else if (a > c && c > b) {
    large = a;
    medium = c;
    small = b;
  } else if (b > a && a > c) {
    large = b;
    medium = a;
    small = c;
  } else if (b > c && c > a) {
    large = b;
    medium = c;
    small = a;
  } else if (c > a && a > b) {
    large = c;
    medium = a;
    small = b;
  } else {
    large = c;
    medium = b;
    small = a;
  }
  let diff0 = large - medium;
  let diff1 = medium - small;
  if (diff0 === diff1) {
    return true;
  }
  return false;
}

