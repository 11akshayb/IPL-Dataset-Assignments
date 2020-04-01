function winsPerTeameachYear(matches) {
  const result = { };
  for (let match of matches) {
    const season = match.season;

        const team = match.winner;
        if(result[season]){
          if(result[season][team]){
      result[season][team] += 1;}
      else{
        result[season][team] =1;
      }
    } else {
      result[season]={};
      
    }
  }
  return result;

}

module.exports = winsPerTeameachYear;
