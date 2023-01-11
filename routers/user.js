const router = require("express").Router();
const { loginUser, createUser, verifyUser } = require("../controllers/user");

router.post("/login", loginUser);

router.post("/signup", createUser);

router.post("/verify", verifyUser);

module.exports = router;
