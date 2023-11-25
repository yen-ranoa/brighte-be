import ReferralUser from './referral.entity';
import { Referral } from './referral.interface';

class ReferralService {
	referrals: Referral[];
	constructor() {
		this.referrals = [];
		this.addReferral(
			new ReferralUser({
				givenName: 'Jane',
				surname: 'Doe',
				email: 'jane.doe@gmail.com',
				phone: '0987-123-456',
				addrHomeNameNum: '',
				addrStreet: '43rd St',
				addrSuburb: '',
				addrState: 'Manila',
				addrPostCode: '122222',
				addrCountry: 'Philippines',
				avatar: '',
			})
		);
	}

	addReferral = (referral: Referral) => {
		this.referrals.push(referral);
		return referral;
	};

	updateReferral = (id: string, updatedReferral: Referral) => {
		let referralIndex = this.referrals.findIndex((u) => u.id === id);
		let referral = this.referrals[referralIndex];
		if (referral) {
			referral = {
				...referral,
				...updatedReferral,
				id: referral.id,
			};
			this.referrals[referralIndex] = referral;
		}

		return referral || {};
	};

	getReferrals = () => {
		return this.referrals;
	};

	getReferral = (id: string) => {
		const referral = this.referrals.find((u) => u.id === id);
		return referral || {};
	};

	deleteReferral = (id: string) => {
		const referralIndex = this.referrals.findIndex((u) => u.id === id);
		const referral = this.referrals[referralIndex];
		this.referrals.splice(referralIndex, 1);
		return referral || {};
	};
}

export default ReferralService;
