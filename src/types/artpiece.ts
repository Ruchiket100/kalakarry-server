import { z} from "zod";

export const artpieceSchema = z.object({
    id: z.string(),
    url: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    collection: z.string(),
    count: z.object({likes: z.number(), comments: z.number()}).default({likes: 0, comments: 0}),
    likes: z.number().default(0),
    comments: z.array(z.string()).optional()
    });

export type artpieceType = z.infer<typeof artpieceSchema>;