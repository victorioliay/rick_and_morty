const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharById = (req, res) => {
  const { id } = req.params;

  axios(`${URL}/${id}`) // ID es necesario para hacer la peticion
    .then((response) => response.data)
    .then(({ status, name, species, origin, image, gender }) => {
      if (name) {
        // validamos cualquier otro parametro porque ID siempre va a dar True
        const character = {
          id,
          name,
          status,
          species,
          origin,
          image,
          gender,
        };
        return res.status(200).json(character);
      }

      return res.status(404).send("Not Found");
    })
    .catch((error) => res.status(500).send(error.mossage));
};

module.exports = {
  getCharById,
};
