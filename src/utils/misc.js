export default function reduceTo(str,car){
  if (str.length > car) return str.substring(0,car).concat("...");
  return str;
}

//information
function getTotalSavedMoney(incomes){
  if(incomes.length>0){
    return incomes.map(e=> e.currentSaving).reduce((prev,current) => prev+current,0)
  }else{
    return 0;
  }
}

export {
  getTotalSavedMoney
}