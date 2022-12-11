function isPythagoreanTriple(integers) {
 let a = integers[0];
 let b = integers[1];
 let c = integers[2];
 
 let aSqaure = a*a;
 let bSqaure = b*b;
 let cSqaure = c*c;
  
  if ( aSqaure + bSqaure == cSqaure) {
    return true;
  } else if (bSqaure + cSqaure == aSqaure) {
    return true;
  } else if (aSqaure + cSqaure == bSqaure) {
    return true;
  } else { return false }
 
}
