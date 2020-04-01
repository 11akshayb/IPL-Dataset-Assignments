function mostManOfTheMatches(matches){
    
    var result={};
    for(let match of matches){
        var player=match.player_of_match;
            if(result[player]){
                result[player]+=1
            }else{
                result[player] = 1;
            }
        
    }
    let arr=Object.entries(result);
    let sorted=arr.sort((a,b) => b[1]-a[1]);
    let onlyTopTen=sorted.slice(0,10);
    var objSorted = {}
onlyTopTen.forEach(function(item){
    objSorted[item[0]]=item[1]
})
    return (objSorted);
}
module.exports =mostManOfTheMatches;