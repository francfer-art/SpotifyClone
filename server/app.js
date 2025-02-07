import express from 'express';
import path, {dirname} from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors'
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

import indexRouter from './routes/index.js';


const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);
const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

export default app;
