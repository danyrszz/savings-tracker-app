function daysTo( futureDate ) {
  //receives a future day and returns 
  //the number of DAYS to reach that future date
  //starting from now.
  const actualDateMS = new Date().getTime();
  const ONE_HOUR = 86400000;
  //converts futureDate into ms.
  //format AAAA-MM-DD
  const futureDateMS = new Date(futureDate).getTime()
  return Math.round((futureDateMS - actualDateMS)/ONE_HOUR)+1;
}

function formatDate(date){
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const d = date.split("-");
  return `${d[2]} de ${months[d[1]-1]} de ${d[0]}`;
}

function daysRemaining(){

}

export {daysTo, formatDate, daysRemaining};