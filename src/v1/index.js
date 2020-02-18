import { Router } from 'express';
import postRouter from './post/post-routes';
const router = Router();

router.use('/post', postRouter);

export default router;
