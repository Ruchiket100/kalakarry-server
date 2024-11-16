"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const body_parser_1 = __importDefault(require("body-parser"));
//routes
const auth_1 = __importDefault(require("./routes/auth"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 8080;
(0, database_1.default)();
app.use(body_parser_1.default.json());
app.use("/auth", auth_1.default);
app.listen(port, () => {
    return console.log(`🚀 Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map