import { collectionType } from "../types/collection";
import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema<collectionType>({
    id: { type: String, required: true, unique: true },
    url: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    user: { type: String, ref: "User", required: true },
    description: { type: String, required: true },
    artpieces: { type: [{type: String, ref: "Artpiece"}], required: false },
});


const Collection = mongoose.model<collectionType>('Collection', collectionSchema);

export default Collection;