import express from 'express';
import UserController from './referral.controller';
import multer, { Multer } from 'multer';
import path from 'path';

class UserRouter {
	userController: UserController;
	upload: Multer;
	constructor(userController: UserController) {
		this.userController = userController;
		const storage = multer.diskStorage({
			destination: function (req, file, callback) {
				callback(null, path.join(__dirname, '../../uploads'));
			},
			filename: function (req, file, callback) {
				callback(null, file.originalname);
			},
		});

		this.upload = multer({ storage });
	}

	getRouter() {
		const router = express.Router();
		router.route('/:id').get(this.userController.getReferral);
		router.route('/:id').put(this.upload.single('avatar'), this.userController.updateReferral);
		router.route('/:id').delete(this.userController.deleteReferral);
		router.route('/').get(this.userController.getReferrals);
		router.route('/').post(this.upload.single('avatar'), this.userController.createReferral);

		return router;
	}
}

export default UserRouter;
