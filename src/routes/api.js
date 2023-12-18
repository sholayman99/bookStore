/*
* Author : Md. Sholayman
* Description: This is the file where router are being hold.
* Date: 15 December  2023.
* */


const express = require("express");
const router = express.Router();

const bookController  = require("../controllers/bookController");

router.get("/ReadAllBook" , bookController.ReadAllBook);
router.get("/ReadSingleBook/:id" , bookController.ReadSingleBook);
router.post("/CreateBook" , bookController.CreateBook);
router.post("/UpdateBook/:id" , bookController.UpdateBook);
router.delete("/RemoveBook/:id" , bookController.RemoveBook);
router.get("/FindByKeyWord/:keyWord" , bookController.FindByKeyWord);
router.get("/FindByCategory/:category" , bookController.FindByCategory);


module.exports = router ;


