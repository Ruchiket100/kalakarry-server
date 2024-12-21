"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const userSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    username: zod_1.z.string(),
    collections: zod_1.z.array(zod_1.z.record(zod_1.z.string())).optional(),
    email: zod_1.z.string().email("Invalid email address"),
    collection_count: zod_1.z.number(),
    following_count: zod_1.z.number(),
    followers_count: zod_1.z.number(),
    following: zod_1.z.boolean(),
    verified: zod_1.z.boolean(),
    is_artist: zod_1.z.boolean(),
    birth_date: zod_1.z.date(),
    password: zod_1.z.string(),
    setting_up: zod_1.z.boolean()
});
//# sourceMappingURL=user.js.map