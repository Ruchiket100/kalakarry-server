"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.artpieceSchema = void 0;
const zod_1 = require("zod");
exports.artpieceSchema = zod_1.z.object({
    id: zod_1.z.string(),
    url: zod_1.z.string(),
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    image: zod_1.z.string(),
    collection: zod_1.z.string(),
    count: zod_1.z.object({ likes: zod_1.z.number(), comments: zod_1.z.number() }).default({ likes: 0, comments: 0 }),
    likes: zod_1.z.number().default(0),
    comments: zod_1.z.array(zod_1.z.string()).optional()
});
//# sourceMappingURL=artpiece.js.map