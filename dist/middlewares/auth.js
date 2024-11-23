"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../models/user.model"));
const authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const publicRoutes = ['/auth/login', '/auth/register'];
    if (publicRoutes.includes(req.path)) {
        return next();
    }
    const token = req.headers['auth_token'];
    if (!token) {
        return res.status(401).json({ error: 'Authentication token is missing' });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;
        const user = yield user_model_1.default.findOne({ id: userId });
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }
        req.user = user;
        next();
    }
    catch (err) {
        return res.status(401).json({ error: 'Invalid authentication token' });
    }
});
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=auth.js.map