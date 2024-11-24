"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const artpiece_controllers_1 = require("../controllers/artpiece.controllers");
const router = (0, express_1.Router)();
router.get("/", artpiece_controllers_1.getArtpieces);
router.post("/create", artpiece_controllers_1.createArtpiece);
router.patch("/update/:id", artpiece_controllers_1.updateArtpiece);
router.delete("/delete/:id", artpiece_controllers_1.deleteArtpiece);
exports.default = router;
//# sourceMappingURL=artpiece.js.map