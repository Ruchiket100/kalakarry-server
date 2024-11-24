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
exports.getArtpieces = exports.deleteArtpiece = exports.updateArtpiece = exports.createArtpiece = void 0;
const mongoose_1 = require("mongoose");
const artpiece_model_1 = __importDefault(require("../models/artpiece.model"));
const generateId_1 = __importDefault(require("../utils/generateId"));
const generateUrl_1 = require("../utils/generateUrl");
const createArtpiece = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, image, collectionId } = req.body;
    if (!title || !description || !image || !collectionId) {
        return res.status(400).json({ message: 'title, description, imageUrl and collectionId are required.' });
    }
    try {
        const collection = yield mongoose_1.Collection.findOne({ id: collectionId });
        if (!collection) {
            return res.status(404).json({ message: 'collection not found.' });
        }
        const artpiece = yield artpiece_model_1.default.create({
            id: (0, generateId_1.default)(),
            url: (0, generateUrl_1.generateUrl)(),
            title,
            description,
            image,
            collection: collectionId,
        });
        res.status(201).json({ message: 'artpiece created successfully.', data: Object.assign(Object.assign({}, artpiece), { collection: collection }) });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.createArtpiece = createArtpiece;
const updateArtpiece = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, description, image, collectionId } = req.body;
    if (!id) {
        return res.status(400).json({ message: 'id is required.' });
    }
    try {
        const artpiece = yield artpiece_model_1.default.findOne({ id });
        if (!artpiece) {
            return res.status(404).json({ message: 'artpiece not found.' });
        }
        if (title)
            artpiece.title = title;
        if (description)
            artpiece.description = description;
        if (image)
            artpiece.image = image;
        if (collectionId)
            artpiece.collection = collectionId;
        yield artpiece.save();
        res.status(200).json({ message: 'artpiece updated successfully.', artpiece });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.updateArtpiece = updateArtpiece;
const deleteArtpiece = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: 'id is required.' });
    }
    try {
        const artpiece = yield artpiece_model_1.default.findOne({ id });
        if (!artpiece) {
            return res.status(404).json({ message: 'artpiece not found.' });
        }
        yield artpiece.deleteOne();
        res.status(200).json({ message: 'artpiece deleted successfully.' });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.deleteArtpiece = deleteArtpiece;
const getArtpieces = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const artpieces = yield artpiece_model_1.default.find();
        // return collection and user model  also with artpiece
        res.status(200).json({ artpieces });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.getArtpieces = getArtpieces;
//# sourceMappingURL=artpiece.controllers.js.map