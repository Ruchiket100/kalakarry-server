"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const collection_controllers_1 = require("../controllers/collection.controllers");
const router = (0, express_1.Router)();
router.post('/create', collection_controllers_1.createCollection);
router.get('/', collection_controllers_1.getCollections);
router.delete('/:id', collection_controllers_1.deleteCollection);
router.patch('/:id', collection_controllers_1.updateCollection);
exports.default = router;
//# sourceMappingURL=collection.js.map