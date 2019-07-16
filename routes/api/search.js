const router = require("express").Router();
const searchController = require("../../controllers/searchController");

//search route
router.route("/")
    .post(searchController.create)
    .get(searchController.findAll)
    
//search route ID
router.route("/:id")
    .get(searchController.findById)

module.exports = router;