"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
//routes
const auth_1 = __importDefault(require("./routes/auth"));
const collection_1 = __importDefault(require("./routes/collection"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_2 = require("./middlewares/auth");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 8080;
(0, database_1.default)();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use(auth_2.authMiddleware);
// @ts-ignore
app.get("/protected", (req, res) => res.send({ success: true, user: req === null || req === void 0 ? void 0 : req.user }));
app.use("/auth", auth_1.default);
app.use("/collection", collection_1.default);
app.listen(port, () => {
    return console.log(`🚀 Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map