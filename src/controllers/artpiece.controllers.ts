import { Collection } from "mongoose";
import Artpiece from "../models/artpiece.model";
import generateId from "../utils/generateId";
import { generateUrl } from "../utils/generateUrl";

export const createArtpiece = async (req, res) => {
    const { title, description, image, collectionId } = req.body;

    if (!title || !description || !image|| !collectionId) {
        return res.status(400).json({ message: 'title, description, imageUrl and collectionId are required.' });
    }
    try {
        const collection = await Collection.findOne({ id: collectionId });
        if (!collection) {
            return res.status(404).json({ message: 'collection not found.' });
        }
        const artpiece = await Artpiece.create({
            id: generateId(),
            url: generateUrl(),
            title,
            description,
            image,
            collection: collectionId,
            user: req.user.id
        });

        res.status(201).json({ message: 'artpiece created successfully.', data:  {...artpiece, collection: collection} });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const updateArtpiece= async (req, res) => {
    const { id } = req.params;
    const { title, description, image, collectionId } = req.body;

    if (!id) {
        return res.status(400).json({ message: 'id is required.' });
    }
    try {
        const artpiece = await Artpiece.findOne({ id });
        if (!artpiece) {
            return res.status(404).json({ message: 'artpiece not found.' });
        }
        if (title)
            artpiece.title = title;
        if (description)
            artpiece.description = description;
        if (image)
            artpiece.image = image;
        if (collectionId)
            artpiece.collection = collectionId;
        await artpiece.save();
        res.status(200).json({ message: 'artpiece updated successfully.', artpiece });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const deleteArtpiece = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: 'id is required.' });
    }
    try {
        const artpiece = await Artpiece.findOne({ id });
        if (!artpiece) {
            return res.status(404).json({ message: 'artpiece not found.' });
        }
        await artpiece.deleteOne();
        res.status(200).json({ message: 'artpiece deleted successfully.' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const getArtpieces = async (req, res) => {
    try {
        const artpieces = await Artpiece.find()
        // return collection and user model  also with artpiece
        res.status(200).json({ artpieces });    
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


