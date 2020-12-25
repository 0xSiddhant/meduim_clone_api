import express from 'express';
import { AdvancedConsoleLogger, createConnection } from 'typeorm';
import { Article } from './entities/Article';
import { User } from './entities/User';

const app = express();

app.get('/', (req, res) => {
  res.send(' Hello World');
});

async function start() {
  await createConnection({
    type: 'postgres',
    username: 'conduit',
    password: 'conduit',
    database: 'conduit',
    entities: [Article, User],
    synchronize: true,
    logging: true,
    logger: 'advanced-console',
  });
  app.listen(3231, () => {
    console.log('Server stated on http://localhost:3231');
  });
}

start();
