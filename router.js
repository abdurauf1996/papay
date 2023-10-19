const express = require("express");
const router = express.Router();
const memberController = require("./contollers/memberController");

/***********************************
 *      REST API                   *
 ***********************************/

//memberga dahildor routerlar

router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);
//boshqa routerlar
router.get("/menu", (req, res) => {
  res.send("Menu sahifadasiz");
});

router.get("/community", (req, res) => {
  res.send("Jamiyat sahifadasiz");
});

module.exports = router;
