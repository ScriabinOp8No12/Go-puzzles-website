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
          user_id: 1,
          sgf_data: "test",
          // `(;FF[4]
          // CA[UTF-8]
          // GM[1]
          // DT[2023-06-29]
          // PC[OGS: https://online-go.com/game/54935891]
          // GN[Friendly Match]
          // PB[EmperorPilaf]
          // PW[bigfry]
          // BR[9k]
          // WR[6k]
          // TM[0]OT[0 none]
          // RE[?]
          // SZ[19]
          // KM[7.5]
          // RU[Japanese]
          // C[Game chats will be available in SGF downloads once the game has finished.
          // ]
          // ;B[qd]
          // (;W[dd]
          // (;B[pq]
          // (;W[dq]
          // (;B[do]
          // (;W[co]
          // (;B[cn]
          // (;W[cp]
          // (;B[dn]
          // (;W[fq]
          // (;B[dj]
          // (;W[qo]
          // (;B[op]
          // (;W[pk]
          // (;B[jq]
          // (;W[oc]
          // (;B[mc]
          // (;W[pe]
          // (;B[pd]
          // (;W[od]
          // (;B[oe]
          // (;W[ne]
          // (;B[of]
          // (;W[md]
          // (;B[pg]
          // (;W[jd]
          // ))))))))))))))))))))))))))`
          sgf_name: "Nathan vs. Matthew",
          black_player: "Nathan",
          white_player: "Matthew",
          black_rank: "6d",
          white_rank: "9d",
          // we want an array of moves in the SGF here!
          mistake_move_numbers: JSON.stringify([55, 100, 120, 125, 145]),
          game_preview: "https://example.com/image1.jpg",
        },
        {
          user_id: 2,
          sgf_data: `test123`,
          sgf_name: "Nathan vs. Matthew",
          black_player: "Nathan",
          white_player: "Matthew",
          black_rank: "6d",
          white_rank: "9d",
          mistake_move_numbers: JSON.stringify([58]),
          game_preview: "https://example.com/image2.jpg",
        },
        {
          user_id: 3,
          sgf_data: `test`,
          sgf_name: "Nathan vs. Matthew",
          black_player: "Nathan",
          white_player: "Matthew",
          black_rank: "6d",
          white_rank: "9d",
          mistake_move_numbers: JSON.stringify([9, 15, 26, 55, 100]),
          game_preview: "https://example.com/image3.jpg",
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
