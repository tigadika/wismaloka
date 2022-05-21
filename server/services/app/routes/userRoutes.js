const userRoute = require("express").Router();
const UserController = require("../controllers/userController");

const authentication = require("../middlewares/userAuthen");
const authorization = require("../middlewares/userAuthorize");

const multer = require("multer");

const upload = multer();

userRoute.post("/users/login", UserController.login);

userRoute.post(
  "/users/registerAdmin",
  upload.single("profilePict"),
  UserController.adminRegister
);
userRoute.post(
  "/users/registerUser",
  upload.single("profilePict"),
  UserController.userRegister
);
userRoute.post(
  "/users/registerAgen",
  upload.single("profilePict"),
  UserController.agenRegister
);

userRoute.get("/users", UserController.fetchUser);

userRoute.get("/users/:id", UserController.fetchOneUser);

userRoute.use(authentication);
userRoute.post("/payment", UserController.payment);

userRoute.post("/premiumAgen", UserController.premiumUser);

userRoute.delete("/users/:id", authorization, UserController.deleteUser);

module.exports = userRoute;
