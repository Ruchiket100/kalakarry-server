"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controllers_1 = require("../controllers/user.controllers");
const router = (0, express_1.Router)();
router.get("/myself", user_controllers_1.getMyself);
exports.default = router;
//# sourceMappingURL=user.js.map