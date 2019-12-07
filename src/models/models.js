import stats from "./sachinConverted.json";

const getWinLoseStat = () => { //Function to return win/lose stats on centuries
    let wins=0;
    let lost=0;
    for(let i=0;i<stats.length;i++){
        if(parseInt(stats[i].batting_score) >= 100){
            if(stats[i].match_result === "won")
                wins+=1;
            else if(stats[i].match_result === "lost")
                lost+=1;
        }
    }
    let results =[];
    results.push({name : 'won' , value: wins});
    results.push({name : 'lost', value : lost});

    return results;
}

const getWicketWinLoseStat = () => { // Function to return win/Lose stats on wickets
  let wins=0;
  let lost=0;
  let wickets = 0;
  for(let i=0;i<stats.length;i++){
      if(stats[i].wickets >= 0){
        wickets+=parseInt(stats[i].wickets, 10);
          if(stats[i].match_result === "won")
              wins+=1;
          else if(stats[i].match_result === "lost")
              lost+=1;
      }
  }
  let results =[];
  results.push(wickets);
  results.push(wins);
  results.push(lost);

  return results;
}

const getDateStat = () =>{ //Function to return runs in various 5 years
  let d1=0;
  let d2=0;
  let d3=0;
  let d4=0;
  for(let i =0;i<stats.length;i++){
    let temp = stats[i].date.split(" ");
    if(parseInt(temp[2])<1995){
      if(stats[i].batting_score!=="DNB" && stats[i].batting_score !== "TDNB")
      d1+=parseInt(stats[i].batting_score);
      
    }
    else if(parseInt(temp[2])<2000){
      if(stats[i].batting_score!=="DNB"&& stats[i].batting_score !== "TDNB")
      d2+=parseInt(stats[i].batting_score);
    }
    else if(parseInt(temp[2])<2005){
      if(stats[i].batting_score!=="DNB"&& stats[i].batting_score !== "TDNB")
      d3+=parseInt(stats[i].batting_score);
    }
    else if(parseInt(temp[2])<2012){
      if(stats[i].batting_score!=="DNB"&& stats[i].batting_score !== "TDNB")
      d4+=parseInt(stats[i].batting_score);
    }
  }
  
  let dateScores=[];
  dateScores.push({name:"1989-1995",runs:d1});
  dateScores.push({name:"1996-2000",runs:d2});
  dateScores.push({name:"2001-2005",runs:d3});
  dateScores.push({name:"2006-2012",runs:d4});
  return dateScores;
}

const getGroundStat = () =>{ //Function to return Home vs Away stats
  let home=0;
  let away=0;
  let homes=["Nagpur","Pune","Chandigarh","Cuttack","Kolkata","Gwalior","New Delhi","Jaipur","Bangalore","Jamshedpur","Guwahati","Gwalior",
              "Kanpur","Ahmedabad","Indore","Mohali","Rajkot","Hyderabad (Deccan)","Jalandhar","Mumbai","Chennai","Vadodara","Delhi","Visakhapatnam",
              "Amritsar","Mumbai (BS)","Hyderabad (Sind)","Kochi"];
            
  for(let i =0;i<stats.length;i++){
    console.log("Nagpur" in homes)
    let ctr=0;
    for(let j=0;j<homes.length;j++){
      if(stats[i].ground === homes[j]){
        if(stats[i].batting_score!=="DNB"&& stats[i].batting_score !== "TDNB")
          home+=parseInt(stats[i].batting_score);
          ctr=-1;
        break;
      }
    }
   if(ctr==0){
      if(stats[i].batting_score!=="DNB"&& stats[i].batting_score !== "TDNB")
      away+=parseInt(stats[i].batting_score);
    }
  }

  let groundStat=[];
  groundStat.push({name:"Home",runs:home});
  groundStat.push({name:"Away",runs:away});
  return groundStat;
}


const getScores = () => { //Function to return scores for each match.
  const scores = [];
  for (let i = 0; i < stats.length; i++) {
    scores.push({
      name: `Match ${i + 1}`,
      scores: stats[i].batting_score
    });
  }

  return scores;
};

export {
    getGroundStat,
    getDateStat,
    getWicketWinLoseStat,
    getWinLoseStat,
    getScores,
};
