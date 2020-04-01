const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear=require("./ipl/matchesPlayedPerYear");
const winsPerTeameachYear=require("./ipl/winsPerTeameachYear");
const extraRunsConceded=require("./ipl/extraRunsConceded");
const mosteconomicalBowlers =require("./ipl/mosteconomicalBowlers");
const mostManOfTheMatches=require("./ipl/mostManOfTheMatches");
const winsPerVenue= require("./ipl/winsPerVenue");
const winsByAllTeams=require("./ipl/winsByAllTeams");

const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";


function main() {

  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      let all_in_one_Result={};
      csv()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(deliveries =>{
        let result = matchesPlayedPerYear(matches);
        let result2 = winsPerTeameachYear(matches);
        let result3=extraRunsConceded(deliveries);
        let result4=mosteconomicalBowlers(deliveries);
        let result5=mostManOfTheMatches(matches);
        let result6=winsPerVenue(matches);
        let result7 = winsByAllTeams(matches);

        all_in_one_Result['matchesPlayedPerYear'] = result;
        all_in_one_Result['winsPerTeameachYear'] = result2;
        all_in_one_Result['extraRunsConceded'] = result3;
        all_in_one_Result['mosteconomicalBowlers'] = result4;
        all_in_one_Result['mostManOfTheMatches'] = result5;
        all_in_one_Result['winsPerVenue'] = result6;
        all_in_one_Result['winsByAllTeams'] =result7;
        const jsonString =JSON.stringify(all_in_one_Result);
        fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
        if(err){
        console.error(err)
        }
      });
  
  }); 
 });
}
main();