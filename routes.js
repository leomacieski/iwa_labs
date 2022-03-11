const   express = require("express"),
        router = express.Router();
        itemControl = require("./item-controller");


router.get("/:foo/:bar", itemControl.helloWorld);

module.exports = router;