function buildAcronym(str) {
  const ignoreStr = ["a", "for", "an", "and", "by", "of"]
  const strSplit= str.split(/\s+/)
  const acronym=[]

  strSplit.forEach((word,index)=> {
    if(index ===0){
      acronym.push(word[0].toUpperCase());
    }
    else{
      if(!ignoreStr.includes(word.toLowerCase())){
        acronym.push(word[0].toUpperCase());
      }
    }
  })




  return acronym.join("");
}
console.log(
buildAcronym("Search Engine Optimization"))