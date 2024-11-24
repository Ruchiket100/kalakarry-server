import {z} from "zod";

export const commentSchema = z.object({
    id: z.string(),
    url: z.string(),
    user: z.string(),
    type : z.enum(["artpiece", "collection"]),
    comment: z.string(),
    likes: z.number().default(0),
    count: z.object({likes: z.number()}).default({likes: 0}),
    replies: z.array(z.string()).optional(),
    parent_comment: z.string().optional(),
    like: z.boolean().default(false)
    });
