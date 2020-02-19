import express from 'express';
import { PORT } from './config';
import collectData from './middleware/collect-date';
import errorCatcher from './middleware/error-catcher';
import v1router from './v1/index';

const app = express();

app.use(collectData);
app.use(v1router);
app.use(errorCatcher);

app.listen(PORT, () => console.log(`Server listen ${PORT}`));
