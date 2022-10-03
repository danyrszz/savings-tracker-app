function reduceTo(str,car){
  if (str.length > car) return str.substring(0,car).concat("...");
  return str;
}

export default reduceTo;