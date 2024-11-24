import {Router} from 'express';
import { createArtpiece, deleteArtpiece, getArtpieces, updateArtpiece } from '../controllers/artpiece.controllers';

const router = Router();

router.get("/", getArtpieces);

router.post("/create", createArtpiece);

router.patch("/update/:id", updateArtpiece);

router.delete("/delete/:id", deleteArtpiece);

export default router;