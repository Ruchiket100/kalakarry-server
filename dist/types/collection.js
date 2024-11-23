"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionSchema = void 0;
const zod_1 = require("zod");
exports.collectionSchema = zod_1.z.object({
    id: zod_1.z.string(),
    url: zod_1.z.string(),
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    user: zod_1.z.string(),
    artpieces: zod_1.z.array(zod_1.z.record(zod_1.z.string())).optional(),
});
//# sourceMappingURL=collection.js.map