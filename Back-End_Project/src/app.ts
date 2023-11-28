import 'express-async-errors';
import express, { Application } from 'express';
import cors from 'cors';
import { handleErrorsMiddleware } from './middlewares/handleErrors.middleware';
import { usersRouter } from './routers/users.routes';
import { loginRouter } from './routers/sessions.routes';
import { contactRouter } from './routers/contact.routes';

const app: Application = express();

app.use(cors());

app.use(express.json());
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/contacts', contactRouter);

app.use(handleErrorsMiddleware);

export default app;
