function sendMessage(route) {
    const speed = 300000; // Speed of message in km/s (constant)
    let totalDistance = 0; // Will store the total distance traveled
    let totalTime = 0; // Will store the final total time (seconds)
  
    // Loop through each distance in the route array
    for (let i = 0; i < route.length; i++) {
      totalDistance += route[i]; // Add each segment’s distance to total distance
  
      let travelTime = totalDistance / speed; // Calculate total travel time (distance ÷ speed)
      let travelDelay = (route.length - 1) * 0.5; // Each satellite adds 0.5s delay (one less than number of segments)
      totalTime = travelTime + travelDelay; // Combine travel time and delay to get total time
    }
  
    return totalTime.toFixed(4); // Return total time rounded to 4 decimal places
  }
  
  console.log(sendMessage([384400, 384400]));
  