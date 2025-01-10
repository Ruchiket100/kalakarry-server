import mongoose, { Schema, Document } from "mongoose";
import { UserType } from "../types/user";

const userSchema = new Schema<UserType>({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    collections: { type: [{type: String, ref: "Collection"}], required: false },
    email: { type: String, required: true, unique: true },
    collection_count: { type: Number, required: false },
    following_count: { type: Number, required: false },
    followers_count: { type: Number, required: false },
    following: { type: Boolean, required: false },
    verified: { type: Boolean, required: true },
    is_artist: { type: Boolean, required: true },
    birth_date: { type: Date, required: false },
    password: { type: String, required: true },
    setting_up: { type: Boolean, required: true, default: false }
},{timestamps: true})

const User = mongoose.model<UserType>('User', userSchema);

export default User;