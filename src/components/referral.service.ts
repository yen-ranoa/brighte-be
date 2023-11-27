import ImageKit from 'imagekit';
import ReferralUser from './referral.entity';
import { Referral } from './referral.interface';
import fs from 'fs';

class ReferralService {
	referrals: Referral[];
	imagekit: ImageKit;
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
		this.imagekit = new ImageKit({
			publicKey: 'public_jB2SLjiJ0fJREOYFf0bOSNaGfoE=',
			privateKey: 'private_YrbJXF3pr4W6uJ26aEj61dms+SU=',
			urlEndpoint: 'https://ik.imagekit.io/rqmhjdl8j/',
		});
	}

	addReferral = async (referral: Referral) => {
		const { avatar, avatarFilename } = referral;
		if (avatar && avatarFilename) {
			const newAvatarUrl = await this.uploadToCloud(avatar, avatarFilename);
			referral.avatar = newAvatarUrl;
		}
		this.referrals.push(referral);
		return referral;
	};

	uploadToCloud = async (avatar: string, avatarFilename: string) => {
		const data = fs.readFileSync(avatar);
		const img = await this.imagekit.upload({
			file: data,
			fileName: avatarFilename,
		});
		return img.url;
	};

	updateReferral = async (id: string, updatedReferral: Referral) => {
		let referralIndex = this.referrals.findIndex((u) => u.id === id);
		let referral = this.referrals[referralIndex];
		if (referral) {
			const { avatar, avatarFilename } = updatedReferral;
			let newAvatarUrl = avatar === undefined ? referral.avatar : avatar;
			if (avatar && avatarFilename) {
				newAvatarUrl = await this.uploadToCloud(avatar, avatarFilename);
			}
			referral = {
				...referral,
				...updatedReferral,
				avatar: newAvatarUrl,
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
