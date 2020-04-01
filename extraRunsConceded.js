function extraRunsConceded(deliveries){

    var result={};
    for(let delivery of deliveries){
        var matchId=delivery.match_id;
        var team=delivery.bowling_team;
        if(matchId>=577 && matchId<=636){
            if(result[team]){
                result[team]+=(parseInt(delivery.extra_runs));
            }else{
                result[team] = (parseInt(delivery.extra_runs));
            }
        }
    }return result;
}
module.exports =extraRunsConceded;