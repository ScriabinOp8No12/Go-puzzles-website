// const { Transaction } = require('sequelize');
const Puzzle = require('./Puzzle'); // adjust the import to match your project structure

async function incrementTimesSolved(puzzleId, sequelize) {
  const t = await sequelize.transaction();

  try {
    // Read current value
    const puzzle = await Puzzle.findByPk(puzzleId, { transaction: t });
    const currentValue = puzzle.times_solved;

    // Perform the update
    puzzle.times_solved = currentValue + 1;

    // Save the updated record
    await puzzle.save({ transaction: t });

    // Commit the transaction
    await t.commit();
  } catch (error) {
    // Rollback the transaction in case of an error
    await t.rollback();
    throw error;
  }
}

module.exports = {
  incrementTimesSolved,
};
