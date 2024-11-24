"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const artpieceSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    url: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    collection: { type: String, ref: 'Collection', required: true },
    count: {
        likes: { type: Number, required: true, default: 0 },
        comments: { type: Number, required: true, default: 0 }
    },
    likes: { type: Number, required: true, default: 0 },
    comments: { type: [{ type: String, ref: "Comments" }], required: false }
});
const Artpiece = (0, mongoose_1.model)('Artpiece', artpieceSchema);
exports.default = Artpiece;
//# sourceMappingURL=artpiece.model.js.map