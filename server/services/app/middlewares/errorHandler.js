const errorHandler = (err, req, res, next) => {
  console.log(err);
  switch (err.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      err = err.errors.map((el) => el.message);
      const message = err.join("\n");
      res.status(400).json({ message });
      break;
    case "JsonWebTokenError":
    case "TokenExpiredError":
    case "Unauthorized":
    case "Invalid Token":
      res.status(401).json({
        message: err.name,
      });
      break;
    case "Forbidden":
      res.status(403).json({
        message: err.name,
      });
      break;
    case "Not Found":
    case "Empty List":
      res.status(404).json({
        message: err.name,
      });
      break;
    case "Required":
      res.status(400).json({
        message: err.message,
      });
      break;
    case "Email is required":
      res.status(400).json({
        message: "Email is required",
      });
      break;
    case "Password is required":
      res.status(400).json({
        message: "Password is required",
      });
      break;
    case "401":
      res.status(401).json({
        message: "Invalid email/password",
      });
      break;
    case "Data not found":
      res.status(404).json({
        message: "User not found",
      });
      break;
    case "AuthFail":
      res.status(401).json({
        message: "You are not authorized",
      });
      break;
    default:
      res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = errorHandler;
