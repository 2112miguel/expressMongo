const router = require("express").Router();
const user = require("../usercases/users");
const jwt = require("../lib/jwt");

router.post("/login", async (req, res, next) => {
  try {
    const { email, pswd } = req.body;

    const retrievedUser = await user.getByEmail(email);
    const isMatch = await user.authenticate(retrievedUser, pswd);
    //  console.log(retrievedUser)
    if (isMatch) {
      const token = await jwt.sing({
        sub: retrievedUser._id,
        role: retrievedUser.role,
      });
      res.json({
        success: true,
        payload: token,
      });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Contraseña incorrecta" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
