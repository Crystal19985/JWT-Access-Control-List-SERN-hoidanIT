import homeRouter from './homeRouter';
import userRouter from './userRouter';

const initRouter = (app) => {
    app.use('/', homeRouter);
    app.use('/user', userRouter);
};

export default initRouter;
