const { getCharById } = require("../controllers/getCharById");
const { login } = require("../controllers/login");
const { postUser } = require("../controllers/postUser");
const { postFav } = require("../controllers/postFav");
const { deleteFav } = require("../controllers/deleteFav");
const { Router } = require("express");

const router = Router();

router.get("/login", login);

router.post("/login", postUser);

router.post("/fav", postFav);

router.get("/character/:id", getCharById);

router.delete("/fav/:id", deleteFav);

// esta seria la forma base o simple de hacer las rutas.
// router.get("/character/:id", (req, res) => {
//   getCharById(req, res);
// });

module.exports = {
  router,
};
