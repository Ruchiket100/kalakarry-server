import { Router } from "express";
import { createCollection, deleteCollection, getCollections, updateCollection } from "../controllers/collection.controllers";

const router = Router();

router.post('/create', createCollection);

router.get('/', getCollections);

router.delete('/:id',deleteCollection);

router.patch('/:id', updateCollection);

export default router;