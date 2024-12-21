import {z} from "zod";

const userSchema = z.object({
    id: z.string(),
    name: z.string(),
    username: z.string(),
    collections: z.array(z.record(z.string())).optional(),
    email:  z.string().email("Invalid email address"),
    collection_count: z.number(),
    following_count: z.number(),
    followers_count: z.number(),
    following: z.boolean(),
    verified: z.boolean(),
    is_artist: z.boolean(),
    birth_date: z.date(),
    password: z.string(),
    setting_up: z.boolean()
});

export type userType = z.infer<typeof userSchema>;