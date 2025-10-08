function goldilocksZone(mass) {
    // 1. Compute luminosity = mass ^ 3.5
    let luminosity = Math.pow(mass, 3.5);
  
    // 2. Compute sqrt(luminosity)
    let sqrtL = Math.sqrt(luminosity);
  
    // 3. Compute start and end distances
    let start = 0.95 * sqrtL;
    let end = 1.37 * sqrtL;
  
    start = Number(start.toFixed(2));
    end = Number(end.toFixed(2));
  
    return [start, end];
  }
  
  console.log(goldilocksZone(1))