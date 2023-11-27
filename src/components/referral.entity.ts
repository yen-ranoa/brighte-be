// ./src/components/user.entities.js

import crypto from 'crypto';
import { Referral } from './referral.interface';

class ReferralUser {
	id: string | null;
	givenName: string;
	surname: string;
	email: string;
	phone: string;
	addrHomeNameNum: string;
	addrStreet: string;
	addrSuburb: string;
	addrState: string;
	addrPostCode: string;
	addrCountry: string;
	avatar: string;
	avatarFilename?: string;

	constructor(referral: Referral) {
		const {
			givenName,
			surname,
			email,
			phone,
			addrHomeNameNum = '',
			addrStreet = '',
			addrSuburb = '',
			addrState,
			addrPostCode,
			addrCountry,
			avatar = '',
			avatarFilename = '',
		} = referral;
		this.id = crypto.randomUUID();
		this.givenName = givenName;
		this.surname = surname;
		this.email = email;
		this.phone = phone;
		this.addrHomeNameNum = addrHomeNameNum;
		this.addrStreet = addrStreet;
		this.addrSuburb = addrSuburb;
		this.addrState = addrState;
		this.addrPostCode = addrPostCode;
		this.addrCountry = addrCountry;
		this.avatar = avatar;
		this.avatarFilename = avatarFilename;
	}

	toJSON() {
		return {
			id: this.id,
			givenName: this.givenName,
			surname: this.surname,
			email: this.email,
			phone: this.phone,
			addrHomeNameNum: this.addrHomeNameNum,
			addrStreet: this.addrStreet,
			addrSuburb: this.addrSuburb,
			addrState: this.addrState,
			addrPostCode: this.addrPostCode,
			addrCountry: this.addrCountry,
			avatar: this.avatar,
			avatarFilename: this.avatarFilename,
		};
	}
}

export default ReferralUser;
