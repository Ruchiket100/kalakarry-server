import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/user.model';
import bodyParser from 'body-parser';
import express from 'express';
import generateId from '../utils/generateId';
dotenv.config();

const JWT_secret = process.env.JWT_SECRET;

express().use(bodyParser.json());

export const signup = async (req, res) => {
    const { name, email, password} = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'name, email and password are required.' });
    }
    try{
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'user already exists.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const uid = generateId();

        const newUser = new User({
        id: uid,
        name,
        email,
        username: `Kalakarry-${uid}`,
        password: hashedPassword,
        is_artist: false,
        verified: false,
        });

        newUser.save();
        const auth_token = generateToken(newUser);
        return res.status(201).json({ message: 'user created successfully.', token: auth_token });  
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'email and password are required.' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: 'user does not exist.' });
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'invalid credentials.' });
        }

        const auth_token = generateToken(existingUser);
        return res.status(200).json({ message: 'user logged in successfully.', token: auth_token });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

const generateToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email }, JWT_secret, { expiresIn: '9999d' });
}