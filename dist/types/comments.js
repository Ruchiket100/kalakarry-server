"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentSchema = void 0;
const zod_1 = require("zod");
exports.commentSchema = zod_1.z.object({
    id: zod_1.z.string(),
    url: zod_1.z.string(),
    user: zod_1.z.string(),
    type: zod_1.z.enum(["artpiece", "collection"]),
    comment: zod_1.z.string(),
    likes: zod_1.z.number().default(0),
    count: zod_1.z.object({ likes: zod_1.z.number() }).default({ likes: 0 }),
    replies: zod_1.z.array(zod_1.z.string()).optional(),
    parent_comment: zod_1.z.string().optional(),
    like: zod_1.z.boolean().default(false)
});
//# sourceMappingURL=comments.js.map