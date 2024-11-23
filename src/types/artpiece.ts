import {z} from "zod";

export const artpieceSchema = z.object({
    id: z.string(),
    url: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    collection: z.string(),
    });

export type artpieceType = z.infer<typeof artpieceSchema>;