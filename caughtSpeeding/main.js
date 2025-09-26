function speeding(speeds, limit) {
  let count=0;  // Count of vechiles thare are speeding
  let total=0; //Total amount over the limit

  for(let i=0; i<speeds.length;i++){    //Loop throuch each speed in an array
    let speed =speeds[i];   // current speed of the vechole

    if(speed>limit){    //Check if the vechile is over the speed limit
      count++;  // vechile that went over the speed limit
      total+=(speed-limit) // add how much thos was over 
    }
  }
  // If no vechiles were speed ing retun[0,0]
  if (count===0){
    return [0,0];// if the none of the vechile speeding
  } else{
    // otherwise return [number speeding/]
    return [count, total/count]
  }
}