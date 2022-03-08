import express from 'express';

import { getUsers, getuserbyname, createUser, updateUser, deleteUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:name', getuserbyname);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;