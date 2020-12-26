import { Router } from 'express';

const route = Router();

//GET /user
route.get('/', (req, res) => {
  res.send('GET / user');
});

export const userRoute = route;
