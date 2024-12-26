import User from "../models/user.model";

export const getMyself = async (req,res) => {
    console.log(req.user.id)
    try {
        const user = await User.findOne({id:req.user.id});
        res.status(200).json({user});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const getUser = async (req, res) => {
    const {username} = req.params;
    try{
        const user = await User.findOne({username})
        if(user){
            res.status(200).json({user});
        }
    }catch(err){
        res.satus(400).json({message:err.message});
    }
}