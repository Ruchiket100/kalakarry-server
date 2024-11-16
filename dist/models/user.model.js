"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const userSchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    collections: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Collection', required: false },
    email: { type: String, required: true, unique: true },
    collection_count: { type: Number, required: false },
    following_count: { type: Number, required: false },
    followers_count: { type: Number, required: false },
    following: { type: Boolean, required: false },
    verified: { type: Boolean, required: true },
    is_artist: { type: Boolean, required: true },
    birth_date: { type: Date, required: false },
    password: { type: String, required: true },
    setting_up: { type: Boolean, required: true, default: false }
}, { timestamps: true });
const User = mongoose_1.default.model('User', userSchema);
exports.default = User;
//# sourceMappingURL=user.model.js.map