import { Router } from 'express';
import { createUser } from '../controllers/users';

const route = Router();

//Post /user/login
route.post('/', async (req, res) => {
  try {
    const user = await createUser(req.body.user);
    return res.send(user);
  } catch (e) {
    console.error(e);
    return res.status(422).json({
      errors: { body: ['Could not create user', e.message] },
    });
  }
});

export const usersRoute = route;
