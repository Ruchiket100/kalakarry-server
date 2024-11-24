import { artpieceType } from "../types/artpiece";

import { Schema, model } from "mongoose";

const artpieceSchema = new Schema<artpieceType>({
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
    comments: {type :[{type: String, ref: "Comments"}], required: false}
})

const Artpiece = model<artpieceType>('Artpiece', artpieceSchema);

export default Artpiece;