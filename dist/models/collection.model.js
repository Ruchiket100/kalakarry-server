"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const collectionSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true, unique: true },
    url: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    user: { type: String, ref: "User", required: true },
    description: { type: String, required: true },
    artpieces: { type: [{ type: String, ref: "Artpiece" }], required: false },
}, { timestamps: true });
const Collection = mongoose_1.default.model('Collection', collectionSchema);
exports.default = Collection;
//# sourceMappingURL=collection.model.js.map