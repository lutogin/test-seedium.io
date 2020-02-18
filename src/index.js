import express from 'express';
import errorCatcher from './middleware/error-catcher';
import v1router from './v1/index';

const app = express();

app.use(v1router);
app.use(errorCatcher);
