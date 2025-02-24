module.exports = (sequelize, Sequelize) => {
  const Likes = sequelize.define(
    "likes",
    {
      post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    },
    {
        timestamps: false
    })

    return Likes;
};