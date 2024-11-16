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
exports.login = exports.signup = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_model_1 = __importDefault(require("../models/user.model"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
const JWT_secret = process.env.JWT_SECRET;
(0, express_1.default)().use(body_parser_1.default.json());
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'name, email and password are required.' });
    }
    try {
        const existingUser = yield user_model_1.default.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'user already exists.' });
        }
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const uid = (new Date().getTime()).toString(36);
        const newUser = new user_model_1.default({
            id: uid,
            name,
            email,
            username: `Kalakarry-${uid}`,
            password: hashedPassword,
            is_artist: false,
            verified: false,
        });
        newUser.save();
        const auth_token = generateToken(newUser);
        return res.status(201).json({ message: 'user created successfully.', token: auth_token });
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
});
exports.signup = signup;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'email and password are required.' });
    }
    try {
        const existingUser = yield user_model_1.default.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: 'user does not exist.' });
        }
        const isPasswordCorrect = yield bcryptjs_1.default.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'invalid credentials.' });
        }
        const auth_token = generateToken(existingUser);
        return res.status(200).json({ message: 'user logged in successfully.', token: auth_token });
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
});
exports.login = login;
const generateToken = (user) => {
    return jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, JWT_secret, { expiresIn: '9999d' });
};
//# sourceMappingURL=auth.controllers.js.map