module.exports = (sequelize, Sequelize) => {
  const Posts = sequelize.define(
    "posts",
    {
      title: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      content: {
        type: Sequelize.TEXT,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      image: {
        type: Sequelize.TEXT,
      },
      like: {
        type: Sequelize.INTEGER,
      },
      comment: {
        type: Sequelize.INTEGER,
      },
      create_at: {
        type: Sequelize.DATE,
      }
    },
    {
      timestamps: false
    })

    return Posts;
};