// Converts rank of players in sgf into an elo ranking system
// Should be easy for OGS and other sites that put k, d, or p in the sgf, but Fox and other asian sites use asian characters, which will require different logic
// Look at BR and WR sgf properties for black rank and white rank respectively, For later? Use logic to determine which color made the mistake

const jssgf = require("jssgf");

function convertRankToElo(rank) {

  if (!rank) return 1500; // if rank is not provided, default to 1500 elo, which is 6 kyu in our elo system
  const rankLowerCase = rank.toLowerCase();
  let elo;
  // Extract numeric part of the rank
  const numericRank = parseInt(rankLowerCase.match(/\d+/)[0]);

  if (rankLowerCase.includes('p')) {
    // pro ranks
    elo = 3000;
  } else if (rankLowerCase.includes('d')) {
    // dan ranks, 1 dan is 2100 elo
    elo = 2000 + numericRank * 100;
  } else if (rankLowerCase.includes('k')) {
    // kyu ranks, 20k or weaker is 100 elo
    elo = Math.max(100, (21 - numericRank) * 100);
  } else {
    // unrecognized rank format, return the default 1500 elo
    return 1500;
  }
  return Math.min(3000, Math.max(100, elo)); // Ensure ELO is between 100 and 3000
}

function getAverageElo(blackElo, whiteElo) {
  return Math.round((blackElo + whiteElo) / 2);
}

function setPotentialPuzzleDifficulty(sgf_data) {
  // Parse the SGF data
  const parsedSgf = jssgf.parse(sgf_data);
  const gameInfo = parsedSgf[0];
  // console.log("gameInfo", gameInfo)

  // Extract the ranks from the SGF data
  const blackRank = gameInfo.BR;
  const whiteRank = gameInfo.WR;

  console.log("blackRank", blackRank)
  console.log("whiteRank", whiteRank)

  // Convert the ranks to ELO
  const blackElo = convertRankToElo(blackRank);
  const whiteElo = convertRankToElo(whiteRank);

  // Calculate and return the average ELO
  return getAverageElo(blackElo, whiteElo);
}

module.exports = { setPotentialPuzzleDifficulty };


const output1 = setPotentialPuzzleDifficulty("(;EV[9th Ing Cup, final 2]DT[2023-08-23]PB[Xie Ke]BR[9p]PW[Shin Jinseo]WR[9p]KM[7.5]RE[W+R]SO[Go4Go.net]CA[UTF-8];B[qd];W[dd];B[pq];W[dp];B[oc];W[qo];B[np];W[nd];B[cc];W[cd];B[dc];W[fc];B[fb];W[gb];B[ec];W[fd];B[ed];W[ee];B[de];W[be];B[df];W[ef];B[eg];W[fe];B[bc];W[dg];B[bd];W[cg];B[ce];W[nc];B[od];W[ne];B[fg];W[di];B[if];W[jd];B[fi];W[dk];B[cq];W[cp];B[dq];W[ep];B[eq];W[fq];B[fr];W[gq];B[gr];W[hq] (;B[qk]C[Incorrect - This was the actual move played in the game!]) (;B[fl]C[CORRECT] ;W[hi]C[CORRECT] ;B[ej]C[CORRECT]) (;B[ii]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT] ;W[rd]C[CORRECT]) (;B[ih]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT] ;W[rd]C[CORRECT]) (;B[ij]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT]) (;B[ji]C[CORRECT] ;W[gj]C[CORRECT] ;B[fj]C[CORRECT]) (;B[ke]C[CORRECT] ;W[kd]C[CORRECT] ;B[fl]C[CORRECT] ;W[qe]C[CORRECT]) (;B[gl]C[CORRECT] ;W[qe]C[CORRECT] ;B[oe]C[CORRECT]) (;B[ej]C[CORRECT] ;W[dj]C[CORRECT] ;B[ii]C[CORRECT] ;W[qe]C[CORRECT]) (;B[hc]C[CORRECT] ;W[hb]C[CORRECT] ;B[ic]C[CORRECT]) (;B[fk]C[CORRECT] ;W[qe]C[CORRECT]))")

console.log(output1)
