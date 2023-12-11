function checkSpeed(speed, area) {
    // Define the speed limits for different areas
    let speedLimits = {
      motorway: 130,
      interstate: 90,
      city: 50,
      residential: 20,
    };
  
    // Calculate the difference between the driver's speed and the speed limit
    let difference = speed - speedLimits[area];
  
    if (difference <= 0) {
      // The driver is within the speed limit
      console.log(`Driving ${speed} km/h in a ${speedLimits[area]} zone`);
    } else {
      // The driver is over the speed limit
      let status = "";
  
      if (difference <= 20) {
        status = "speeding";
      } else if (difference <= 40) {
        status = "excessive speeding";
      } else {
        status = "reckless driving";
      }
      console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimits[area]} - ${status}`);
    }
  }