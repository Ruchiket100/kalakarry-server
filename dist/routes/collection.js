"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const collection_controllers_1 = require("../controllers/collection.controllers");
const router = (0, express_1.Router)();
router.post('/create', collection_controllers_1.createCollection);
exports.default = router;
//# sourceMappingURL=collection.js.map