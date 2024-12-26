import User from "../models/user.model";

export const checkUsernameExist = async (req, res) => {
    const { username } = req.body;

    if(!username) {
        return res.status(400).json({ message: 'username is required.' });
    }

    try {
        const user = await User.findOne({username});

        if(user) {
            return res.status(404).json({ message: 'username already exist.' });
        }
        else {
            return res.status(200).json({ message: 'username does not exist.' });
        }
    }catch(e) {
        return res.status(500).json({ message: e.message });
    }
}

export const setUsername = async (req, res) => {
    const { username } = req.body;

    if(!username) {
        return res.status(400).json({ message: 'username is required.' });
    }

    try {
        const user = await User.findOne({
            username
        });
        if(!user){
            const setUser = await User.updateOne({id: req.user.id}, {username, setting_up: true});

            if(setUser){
                return res.status(200).json({ message: 'username set successfully.' });
            }
        }
    }catch(e) {
        return res.status(500).json({ message: e.message });
    }
}