import express from 'express';
import { userControllers } from '../controllers';

const router = express.Router();

// PUBLIC
router.get('/read', userControllers.getUserList);

// PRIVATE

export default router;
