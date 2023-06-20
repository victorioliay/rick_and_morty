const { login } = require("../controllers/login");
const { getCharById } = require("../controllers/getCharById");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const { Router } = require("express");

const router = Router();

router.get("/character/:id", getCharById);

// esta seria la forma base o simple de hacer las rutas.
// router.get("/character/:id", (req, res) => {
//   getCharById(req, res);
// });

router.get("/login", login);

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

module.exports = {
  router,
};
