import User from "../models/user.model";
import {UserType} from "../types/user";

type User = Omit<UserType, 'password'>;

export function getSafeUser(user: UserType): User {
    const { id,name, username, collections, collection_count, email, verified, is_artist, setting_up, followers_count, following, following_count, birth_date } = user; // Exclude sensitive values
    
    return { id,name, username, collections, collection_count, email, verified, is_artist, setting_up, followers_count, following_count, following , birth_date}; // Only return non-sensitive properties
}

export const getMyself = async (req,res) => {
    try {
        const user = await User.findOne({id:req.user.id});
        res.status(200).json({user: getSafeUser(user)});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const getUser = async (req, res) => {
    const {username} = req.params;
    try{
        const user = await User.findOne({username})
        if(user){
            res.status(200).json(getSafeUser(user));
        }
    }catch(err){
        res.satus(400).json({message:err.message});
    }
}

export const handleFollow = async (req, res) => {
    const {username} = req.params;
    try{
        const user = await User.findOne({username});
        const me = await User.findOne({id:req.user.id});
        if(user){
            if(user.following){
                user.followers_count -= 1;
                user.following = false;
                me.following_count -= 1;
            }else{
            user.following = true;
            user.followers_count += 1;
            me.following_count += 1;
            }
            await user.save();
            await me.save();
            res.status(200).json(getSafeUser(user));
        } else{
            res.status(404).json({message:"User not found"});
        }
    }catch(e){
        res.status(400).json({message:e.message});
    }
}