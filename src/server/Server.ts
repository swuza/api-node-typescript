import express from 'express';
import 'dotenv/config'

import './shared/services/TranslationsYup.service';
import { router } from './routes/index.route';


const server = express();


server.use(express.json());

server.use(router);



export { server };