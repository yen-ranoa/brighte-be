import UserController from './referral.controller';
import UserRouter from './referral.router';
import UserService from './referral.service';

const userService = new UserService();
const userController = new UserController(userService);
const userRouter = new UserRouter(userController);

export default {
	service: userService,
	controller: userController,
	router: userRouter.getRouter(),
};
