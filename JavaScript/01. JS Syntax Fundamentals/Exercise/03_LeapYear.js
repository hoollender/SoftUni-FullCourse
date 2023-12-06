function isLeapYear(year) {
    // Check if the year is divisible by 4 but not by 100 or is divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return "yes";
    } else {
      return "no";
    }
  }
leapYear(1984);
leapYear(2003);
leapYear(4);