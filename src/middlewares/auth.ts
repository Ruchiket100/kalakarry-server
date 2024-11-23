import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'; 
import User from '../models/user.model'; 

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const publicRoutes = ['/auth/login', '/auth/register']; 

  if (publicRoutes.includes(req.path)) {
    return next();
  }

  const token = req.headers['auth_token'] as string;

  if (!token) {
    return res.status(401).json({ error: 'Authentication token is missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    const userId = (decoded as any).id;

    const user = await User.findOne({id: userId});
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }
    
    (req as any).user = user;

    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid authentication token' });
  }
};
