export interface Referral {
	id?: string | null;
	givenName: string;
	surname: string;
	email: string;
	phone: string;
	addrHomeNameNum?: string;
	addrStreet?: string;
	addrSuburb?: string;
	addrState: string;
	addrPostCode: string;
	addrCountry: string;
	avatar?: string;
}
