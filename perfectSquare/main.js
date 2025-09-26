function isPerfectSquare(n) {
  if(n<0){ //If the number is negative it returns false
    return false;
  }else{    //otherwise
    let sqrt=Math.sqrt(n);  //sqrts the the number
    let integer = Number.isInteger(sqrt)    //checks if it is a integer and return true
    return integer;
  }
}