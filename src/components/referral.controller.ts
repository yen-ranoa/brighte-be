import { Request, Response } from 'express';
import ReferralUser from './referral.entity';
import { Referral } from './referral.interface';
import ReferralService from './referral.service';

class ReferralController {
	referralService: ReferralService;
	constructor(ReferralService: any) {
		this.referralService = ReferralService;
	}

	createReferral = (req: Request, res: Response) => {
		const avatar = req.file?.path || '';
		const referral = new ReferralUser({ ...req.body, avatar });
		return res.status(201).send(this.referralService.addReferral(referral));
	};

	updateReferral = (req: Request, res: Response) => {
		const { id } = req.params;
		const avatar = req.file?.path || '';
		return res.status(200).send(this.referralService.updateReferral(id, { ...req.body, avatar } as Referral));
	};

	getReferrals = (req: Request, res: Response) => res.status(200).send(this.referralService.getReferrals());

	getReferral = (req: Request, res: Response) => {
		const { id } = req.params;
		return res.status(200).send(this.referralService.getReferral(id));
	};

	deleteReferral = (req: Request, res: Response) => {
		const { id } = req.params;
		return res.status(200).send(this.referralService.deleteReferral(id));
	};
}

export default ReferralController;
