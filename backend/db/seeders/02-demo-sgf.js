"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // put tableName here inside up function instead of outside
    options.tableName = "Sgfs";
    return queryInterface.bulkInsert(
      options,
      [
        {
          // ****** removed sgf_mistake_move_numbers and game_preview from seeders
          user_id: 1,
          sgf_data: `(;FF[4]
          CA[UTF-8]
          GM[1]
          DT[2023-06-29]
          PC[OGS: https://online-go.com/game/54935891]
          GN[Friendly Match]
          PB[EmperorPilaf]
          PW[bigfry]
          BR[9k]
          WR[6k]
          TM[0]OT[0 none]
          RE[?]
          SZ[19]
          KM[7.5]
          RU[Japanese]
          C[Game chats will be available in SGF downloads once the game has finished.
          ]
          ;B[qd]
          (;W[dd]
          (;B[pq]
          (;W[dq]
          (;B[do]
          (;W[co]
          (;B[cn]
          (;W[cp]
          (;B[dn]
          (;W[fq]
          (;B[dj]
          (;W[qo]
          (;B[op]
          (;W[pk]
          (;B[jq]
          (;W[oc]
          (;B[mc]
          (;W[pe]
          (;B[pd]
          (;W[od]
          (;B[oe]
          (;W[ne]
          (;B[of]
          (;W[md]
          (;B[pg]
          (;W[jd]
          ))))))))))))))))))))))))))`,

          sgf_name: "Nathan vs. Matthew",
          board_size: 19,
          black_player: "Nathan",
          white_player: "Matthew",
          black_rank: "6d",
          white_rank: "9d",
          result: "Black + Resign",
          thumbnail: "test",
        },
        {
          user_id: 2,
          sgf_data: `(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[9]KM[6.50]PW[test9by9]PB[yep];B[gc];W[gg];B[cc];W[cg];B[ee];W[eg];B[ge];W[ce])`,
          sgf_name: "Nathan vs. Matthew",
          board_size: 9,
          black_player: "Nathan",
          white_player: "Matthew",
          black_rank: "6d",
          white_rank: "9d",
          result: "Black + 5.5",
          thumbnail: "test",
        },
        {
          user_id: 3,
          sgf_data: `(;GM[1]FF[4]CA[UTF-8]AP[CGoban:3]ST[2]RU[Japanese]SZ[9]KM[6.50]PW[test9by9]PB[yep];B[gc];W[gg];B[cc];W[cg];B[ee];W[eg];B[ge];W[ce])`,
          sgf_name: "Nathan vs. Matthew",
          board_size: 9,
          black_player: "Nathan",
          white_player: "Matthew",
          black_rank: "6d",
          white_rank: "9d",
          result: "White + 3.5",
          thumbnail: "test",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Sgfs";
    return queryInterface.bulkDelete(options, null, {});
  },
};
