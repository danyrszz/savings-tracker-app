function daysTo( futureDate ) {
  //receives a future day and returns 
  //the number of DAYS to reach that future date
  //starting from now.
  const actualDateMS = new Date().getTime();
  const ONE_HOUR = 86400000;
  //converts futureDate into ms.
  //format AAAA-MM-DD
  const futureDateMS = new Date(futureDate).getTime()
  return Math.round((futureDateMS - actualDateMS)/ONE_HOUR);
}