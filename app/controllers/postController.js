const db = require("../models");
const Posts = db.posts;

exports.postBestList = (req, res) => {
    Posts.findAll({
        where: db.sequelize.where(db.sequelize.fn('TIMESTAMPDIFF', 'hour', db.sequelize.col('create_at'), db.sequelize.fn('currdate')), '<', 720)
    }).then((response) => {
        return res.status(200).send(response);
    })
    .catch((err) => {return res.status(400).send(err);})
}