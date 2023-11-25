import express from 'express';
import referralModule from '../components/referral.module';

export default (app: express.Application) => {
	app.use('/referral', referralModule.router);
};
