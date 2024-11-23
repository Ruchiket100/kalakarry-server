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
exports.createCollection = void 0;
const collection_model_1 = __importDefault(require("../models/collection.model"));
const generateId_1 = __importDefault(require("../utils/generateId"));
const generateUrl_1 = require("../utils/generateUrl");
const createCollection = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description } = req.body;
    if (!name || !description) {
        res.status(400).json({ message: 'name and description are required.' });
    }
    try {
        const collection = yield collection_model_1.default.create({
            name,
            description,
            user: req.user.id,
            id: (0, generateId_1.default)(),
            url: (0, generateUrl_1.generateUrl)(),
        });
        res.status(201).json({ message: 'collection created successfully.', collection });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.createCollection = createCollection;
//# sourceMappingURL=collection.controllers.js.map