import express from 'express';

const router = express.Router();

router.post('/', (req, res) => res.send('Hello')); // create
router.delete('/');// delete

export default router;
