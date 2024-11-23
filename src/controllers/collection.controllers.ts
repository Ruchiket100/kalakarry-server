import Collection from "../models/collection.model";
import generateId from "../utils/generateId";
import { generateUrl } from "../utils/generateUrl";

export const createCollection = async (req, res) => {
    const { name, description} = req.body;

    if(!name || !description){
        res.status(400).json({ message: 'name and description are required.' });
    }
    try{
    const collection = await Collection.create({
        name,
        description,
        user: req.user.id,
        id: generateId(),
        url: generateUrl(),
    });
    
    res.status(201).json({ message: 'collection created successfully.', collection });
} catch(err){
    res.status(500).json({ message: err.message });
}
}

export const getCollections = async (req, res) => {
    try {
        const collections = await Collection.find();
        res.status(200).json({ collections });
    } catch(err){
        res.status(500).json({ message: err.message });
    }
}

export const updateCollection = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;

    if (!id) {
        return res.status(400).json({ message: 'id is required.' });
    }
    try {
        const collection = await Collection.findOne({ id });
        if (!collection) {
            return res.status(404).json({ message: 'collection not found.' });
        }
        if(name)
            collection.name = name;
        if(description)
            collection.description = description;
        await collection.save();
        res.status(200).json({ message: 'collection updated successfully.', collection });
    } catch(err){
        res.status(500).json({ message: err.message });
    }
}

export const deleteCollection = async (req, res) => {
    const { id } = req.params;

    if(!id) {
        return res.status(400).json({ message: 'id is required.' });
    }
    try {
        const collection = await Collection.deleteOne({ id });
        if (!collection) {
            return res.status(404).json({ message: 'collection not found.' });
        }
        return res.status(200).json({ message: 'collection deleted successfully.' });
}   
catch(err){
    res.status(500).json({ message: err.message });
}
}
