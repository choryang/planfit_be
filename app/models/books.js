module.exports = (sequelize, Sequelize) => {
  const Books = sequelize.define(
    "books",
    {
      title: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      author: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      stock: {
        type: Sequelize.INTEGER,
      },
      sold: {
        type: Sequelize.INTEGER,
      },
      detail: {
        type: Sequelize.TEXT,
      },
      
    },
      {
        timestamps: false,
      })

    return Books;
};