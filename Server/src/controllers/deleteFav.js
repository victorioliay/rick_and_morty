const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  try {
    const { id } = req.params;

    await Favorite.destroy({ where: { id } });

    const allFavavorites = await Favorite.findAll();

    return res.json(allFavavorites);
  } catch (error) {
    return res.status(500).res(error.message);
  }
};

module.exports = {
  deleteFav,
};
