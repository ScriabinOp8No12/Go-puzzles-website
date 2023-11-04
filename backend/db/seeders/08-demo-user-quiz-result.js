// "use strict";

// let options = {};
// if (process.env.NODE_ENV === "production") {
//   options.schema = process.env.SCHEMA; // define your schema in options object
// }

// module.exports = {
//   async up(queryInterface, Sequelize) {
//     options.tableName = "UserQuizResults";
//     return queryInterface.bulkInsert(
//       options,
//       [
//         {
//           id: 1,
//           user_id: 1,
//           quiz_id: 1,
//           score: 80,
//         },
//         {
//           id: 2,
//           user_id: 2,
//           quiz_id: 2,
//           score: 40,
//         },
//         {
//           id: 3,
//           user_id: 3,
//           quiz_id: 1,
//           score: 90,
//         },
//       ],
//       {}
//     );
//   },

//   async down(queryInterface, Sequelize) {
//     options.tableName = "UserQuizResults";
//     return queryInterface.bulkDelete(options, null, {});
//   },
// };
