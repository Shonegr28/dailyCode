function squaresWithThree(n) {
    let count=0
    for (let i=0; i<=n;i++){
      let squared=Math.pow(i,2)
      if (squared.toString().includes("3")){
        count++
      }
    }
  
    return count;
  }
  console.log(squaresWithThree(6))