import express from 'express';
import { addUser, getUsers, getUser, editUser, deleteUser} from '../controller/user-controller.js';
// import { addUser } from '../controller/user-controller.js';

const router = express.Router();

router.get('/all', getUsers);
router.post('/add', addUser);
router.get('/:id', getUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);


export default router;