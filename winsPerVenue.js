function winsPerVenue(matches){
    
    const result={};
    for(let match of matches){
        const venue=match.venue;
        if(result[venue]){
            const winner =match.winner;
            if(result[venue][winner]){
                result[venue][winner]+=1;
            }else{
                result[venue][winner]=1;
            }
        }else{

            result[venue]={};
        }
    }return result;
}
module.exports = winsPerVenue;