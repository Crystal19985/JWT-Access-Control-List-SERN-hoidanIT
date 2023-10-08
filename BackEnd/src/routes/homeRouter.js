import express from 'express';

const router = express.Router();

// PUBLIC ROUTE
router.get('/', (req, res) => {
    res.send('HELLLO ROUTER');
});

// PRIVATE ROUTE

export default router;
