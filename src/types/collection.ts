import {z} from "zod";

export const collectionSchema = z.object({
    id: z.string(),
    url: z.string(),
    name: z.string(),
    description: z.string(),
    user: z.string(),
    artpieces: z.array(z.record(z.string())).optional(),
    });

export type collectionType = z.infer<typeof collectionSchema>;