import mongoose, { Schema, Document } from "mongoose";

interface userInterface extends Document {
    id: string
    name: string;
    username: string;
    collections : mongoose.Schema.Types.ObjectId;
    email: string;
    collection_count: number;
    following_count: number;
    followers_count: number;
    following: boolean;
    verified: boolean;
    is_artist: boolean;
    birth_date: Date;
    password: string;
    setting_up: boolean;
}

const userSchema = new Schema<userInterface>({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    collections: { type: mongoose.Schema.Types.ObjectId, ref: 'Collection', required: false },
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

const User = mongoose.model<userInterface>('User', userSchema);

export default User;