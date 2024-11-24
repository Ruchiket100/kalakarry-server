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
exports.deleteCollection = exports.updateCollection = exports.getCollections = exports.createCollection = void 0;
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
const getCollections = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collections = yield collection_model_1.default.find();
        res.status(200).json({ collections });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.getCollections = getCollections;
const updateCollection = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, description } = req.body;
    if (!id) {
        return res.status(400).json({ message: 'id is required.' });
    }
    try {
        const collection = yield collection_model_1.default.findOne({ id });
        if (!collection) {
            return res.status(404).json({ message: 'collection not found.' });
        }
        if (name)
            collection.name = name;
        if (description)
            collection.description = description;
        yield collection.save();
        res.status(200).json({ message: 'collection updated successfully.', collection });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.updateCollection = updateCollection;
const deleteCollection = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: 'id is required.' });
    }
    try {
        const collection = yield collection_model_1.default.deleteOne({ id });
        if (!collection) {
            return res.status(404).json({ message: 'collection not found.' });
        }
        return res.status(200).json({ message: 'collection deleted successfully.' });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.deleteCollection = deleteCollection;
//# sourceMappingURL=collection.controllers.js.map