import express from 'express';
import { createConnection } from 'typeorm';
import { Article } from './entities/Article';
import { User } from './entities/User';
import { usersRoute } from './routes/users';
import { userRoute } from './routes/user';

const app = express();

// By default express cannot parse body of any random data type so we need to explictly tell express about the data.
// if data is of urlencoded type then we use this
// app.use(express.urlencoded())
// if data is of json type
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/users', usersRoute);
app.use('/api/user', userRoute);
// app.get('/api/user', (req, res) => {res.send('GET / user);});

async function start() {
  await createConnection({
    type: 'postgres',
    username: 'conduit',
    password: 'conduit',
    database: 'conduit',
    entities: [Article, User],
    synchronize: true,
    dropSchema: true, // TODO: not for production
    logging: true,
    logger: 'advanced-console',
  });
  app.listen(3232, () => {
    console.log('Server started on http://localhost:3232');
  });
}

start();
