const { Person, MovieCast } = require("../models");
const movieCastController = {
  listAll: async (req, res) => {
    try {
      const movieCasts = await MovieCast.findAll({
        include: Person,
        limit: 50
      });

      return res.json(movieCasts);
    } catch (error) {
      console.log(error);

      return res
        .status(500)
        .json(
          "Erro na sua consulta, tente novamente mais tarde ou contate o suporte"
        );
    }
  },
};

module.exports = movieCastController;
