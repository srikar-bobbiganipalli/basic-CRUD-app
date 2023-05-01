module.exports = (sequelize, Sequelize) => {
    const Operations = sequelize.define("operations", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      type: {
        type: Sequelize.STRING
      }
    });
    return Operations;
  };