function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();


function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizeMostWinsPerTeameachYear(data.winsPerTeameachYear, data.winsByAllTeams);
  visualizeExtraRunsConceded(data.extraRunsConceded);
  visualizeMostEconomicalBowlers(data.mosteconomicalBowlers);
  visualizeMostManOfMatches(data.mostManOfTheMatches); 
  visualizeWinsPerVenue(data.winsPerVenue, data.winsByAllTeams);
  return;
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  Highcharts.chart("container_1", {
    chart: {
      type: "column"
    },
    title: {
      text: "Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      title: {
        text: "years"
      },
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Matches",
        data: seriesData
      }
    ]
  });
}

function visualizeMostWinsPerTeameachYear(winsPerTeameachYear, winsByAllTeams) {
  const teams = Object.keys(winsByAllTeams);
  const seasons=Object.keys(winsPerTeameachYear);
  let seriesData=[];
  seriesData = teams.map(team => ({
    name: team,
    data: seasons.map(season => winsPerTeameachYear[season][team] || 0)
  }));

  Highcharts.chart('container_2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Total Wins Per Team Each Year'
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      title: {
        text: "Teams"
      },
        categories: seasons,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total Wins'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },//LEGEND
    plotOptions: {
        column: {
            pointPadding: 0.1,
            borderWidth: 0
        }
    },
    series: seriesData
});
}

function visualizeExtraRunsConceded(extraRunsConceded) {
  const seriesData = [];
  for (let team in extraRunsConceded) {
    seriesData.push([team, extraRunsConceded[team]]);
  }
  Highcharts.chart("container_3", {
    chart: {
      type: "column"
    },
    title: {
      text: "Extra Runs Conceded per Team in 2016"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      title: {
        text: "Teams"
      },
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Extra Runs"
      }
    },
    series: [
      {
        name: "Extra Runs",
        data: seriesData,

      }
    ]
  });
}

function visualizeMostEconomicalBowlers(mosteconomicalBowlers) {
  const seriesData = [];
  for (let player in mosteconomicalBowlers) {
    seriesData.push([player, parseFloat(mosteconomicalBowlers[player])]);
  }
  Highcharts.chart("container_4", {
    chart: {
      type: "column"
    },
    title: {
      text: "Top Ten Economical Bowlers of 2015"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      title: {
        text: "Players"
      },
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economical Rates"
      }
    },
    series: [
      {
        name: "Economical Rates",
        data: seriesData
      }
    ]
  });
}
function visualizeMostManOfMatches(mostManOfTheMatches) {
  const seriesData = [];
  for (let player in mostManOfTheMatches) {
    seriesData.push([player, mostManOfTheMatches[player]]);
  }
Highcharts.chart('container_5', {
  chart: {
    type: 'column'
  },
  title: {
      text: 'Top Man of the Match Winners'
  },

  subtitle: {
      text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
  },

  xAxis: {
    title: {
      text: "Players"
    },
    type: "category"
  },
  yAxis: {
    min: 0,
    title: {
      text: "Matches"
    }
  },

  series: [{
      name: 'Man of the Match',
      data: seriesData,
  }]

});
}


function visualizeWinsPerVenue(winsPerVenue, winsByAllTeams) {
  const venues = Object.keys(winsPerVenue);
  const teams = Object.keys(winsByAllTeams);
  let seriesData = [];
  seriesData = teams.map(team => ({
    name: team,
    data: venues.map(v => winsPerVenue[v][team] || 0)
  }));

  Highcharts.chart("container_6", {
    chart: {
      type: "bar"
    },
    title: {
      text: "Total Wins Per Team At Venue"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      categories: venues
    },
    yAxis: {
      min: 0,
      title: {
        text: "Total Wins"
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: "normal"
      }
    },
    series: seriesData
  });
}



