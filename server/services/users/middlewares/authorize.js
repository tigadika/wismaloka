const { User } = require("../models/index");

const authorization = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getUser = await User.findByPk(id);

    if (!getUser) {
      throw { name: "Not Found" };
    } else {
      if (req.user.role === "Agen") {
        next();
      } else {
        if (req.user.id === getUser.id) {
          next();
        } else {
          throw { name: "Forbiden", statusCode: 403 };
        }
      }
    }
  } catch (error) {
    // console.log(error);
    next(error);
  }
};

module.exports = authorization;
